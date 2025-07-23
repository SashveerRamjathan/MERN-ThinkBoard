// Exported logic to controller file for each route

import Note from "../models/Note.js";

/**
 * Retrieves all notes from the database, sorted by creation date in descending order.
 *
 * @async
 * @function GetAllNotes
 * @param {Object} _ - Express request object (unused).
 * @param {Object} res - Express response object.
 * @returns {Promise<void>} Sends a JSON response with the list of notes or an error message.
 */
export async function GetAllNotes(_, res) {
  try {
    const notes = await Note.find().sort({ createdAt: -1 }); // -1 will sort in DESC order (newest first)
    res.status(200).json(notes);
  } catch (error) {
    console.error("Error in GetAllNotes controller", error);

    res.status(500).json({
      message: "Internal Server Error",
      error,
    });
  }
}

/**
 * Creates a new note with the provided title and content.
 *
 * @async
 * @function CreateNote
 * @param {import('express').Request} req - Express request object containing note data in the body.
 * @param {import('express').Response} res - Express response object used to send the result.
 * @returns {Promise<void>} Sends the created note as JSON with status 201, or an error with status 500.
 */
export async function CreateNote(req, res) {
  try {
    const { title, content } = req.body;

    const note = new Note({ title, content });

    const savedNote = await note.save();

    res.status(201).json(savedNote);
  } catch (error) {
    console.error("Error in CreateNote controller", error);

    res.status(500).json({
      message: "Internal Server Error",
      error,
    });
  }
}

/**
 * Updates an existing note by its ID.
 *
 * @async
 * @function UpdateNote
 * @param {import('express').Request} req - Express request object containing note data in the body and note ID in params.
 * @param {import('express').Response} res - Express response object used to send back the updated note or error message.
 * @returns {Promise<void>} Sends the updated note as JSON if successful, or an error message if not.
 */
export async function UpdateNote(req, res) {
  try {
    const { title, content } = req.body;

    const updatedNote = await Note.findByIdAndUpdate(
      req.params.id,
      {
        title,
        content,
      },
      { new: true }
    );

    if (!updatedNote)
      return res.status(404).json({ message: "Note Not Found" });

    res.status(200).json(updatedNote);
  } catch (error) {
    console.error("Error in UpdateNote controller", error);

    res.status(500).json({
      message: "Internal Server Error",
      error,
    });
  }
}

/**
 * Deletes a note by its ID.
 *
 * @async
 * @function DeleteNote
 * @param {import('express').Request} req - Express request object containing the note ID in params.
 * @param {import('express').Response} res - Express response object used to send the response.
 * @returns {Promise<void>} Sends a JSON response with the deleted note or an error message.
 */
export async function DeleteNote(req, res) {
  try {
    const deletedNote = await Note.findByIdAndDelete(req.params.id);

    if (!deletedNote)
      return res.status(404).json({ message: "Note Not Found" });

    res.status(200).json(deletedNote);
  } catch (error) {
    console.error("Error in DeleteNote controller", error);

    res.status(500).json({
      message: "Internal Server Error",
      error,
    });
  }
}

/**
 * Retrieves a note by its ID.
 *
 * @async
 * @function GetNoteById
 * @param {import('express').Request} req - Express request object containing the note ID in params.
 * @param {import('express').Response} res - Express response object used to send the response.
 * @returns {Promise<void>} Sends the note data as JSON if found, otherwise sends an error message.
 */
export async function GetNoteById(req, res) {
  try {
    const note = await Note.findById(req.params.id);

    if (!note) return res.status(404).json({ message: "Note Not Found" });

    res.status(200).json(note);
  } catch (error) {
    console.error("Error in GetAllNotes controller", error);

    res.status(500).json({
      message: "Internal Server Error",
      error,
    });
  }
}
