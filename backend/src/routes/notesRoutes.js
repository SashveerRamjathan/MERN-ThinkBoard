import express from "express";
import {
  GetAllNotes,
  CreateNote,
  UpdateNote,
  DeleteNote,
  GetNoteById,
} from "../controllers/notesController.js";

/*
    Sets up the routes in a different file from server.js
*/

/**
 * Express router instance for handling notes-related routes.
 * @type {import('express').Router}
 */
const router = express.Router();

// GET Route
router.get("/", GetAllNotes);
router.get("/:id", GetNoteById);

// POST Route
router.post("/", CreateNote);

// PUT Route
router.put("/:id", UpdateNote);

// DELETE Route
router.delete("/:id", DeleteNote);

export default router;
