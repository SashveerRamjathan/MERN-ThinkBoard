/**
 * Initializes and configures the Express server application.
 * - Loads environment variables from a .env file.
 * - Sets up CORS to allow requests from http://localhost:5173.
 * - Parses incoming JSON requests.
 * - Applies rate limiting middleware.
 * - Registers notes-related API routes under "/api/notes".
 * - Connects to the database before starting the server.
 *
 * @module server
 * @requires express
 * @requires cors
 * @requires dotenv
 * @requires ./routes/notesRoutes.js
 * @requires ./config/db.js
 * @requires ./middleware/rateLimiter.js
 */
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";

import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";

dotenv.config();

const app = express();

/**
 * The port number on which the server will listen.
 * Defaults to 5001 if the PORT environment variable is not set.
 * @type {number}
 */
const PORT = process.env.PORT || 5001;
const __dirname = path.resolve();

// middleware
if (process.env.NODE_ENV !== "production") {
  app.use(
    cors({
      origin: "http://localhost:5173",
    })
  );
}

app.use(express.json()); // parses JSON bodies
app.use(rateLimiter);

// // Simple middleware manipulation
// app.use((req, res, next) => {
//   console.log(`Req method is ${req.method} & Req URL is ${req.url}`);
//   next();
// });

// Endpoints are prefixed with "/api/notes"
app.use("/api/notes", notesRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}

// connect to database first then run application
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server started on PORT:", PORT);
  });
});
