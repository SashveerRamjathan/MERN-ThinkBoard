// File to connect to database

import mongoose from "mongoose";

/**
 * Asynchronously connects to the MongoDB database using the connection URI specified in environment variables.
 * Logs a success message upon successful connection, or logs an error and exits the process if the connection fails.
 *
 * @async
 * @function connectDB
 * @returns {Promise<void>} Resolves when the connection is successful, otherwise exits the process.
 */
export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("MONGODB CONNECTED SUCCESSFULLY!");
  } catch (error) {
    console.error("Error connecting to MONGODB", error);
    process.exit(1); // exit with failure
  }
};
