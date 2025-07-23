import mongoose from "mongoose";

// 1 - Create a schema
/**
 * Mongoose schema for a Note document.
 *
 * @typedef {Object} Note
 * @property {string} title - The title of the note. Required.
 * @property {string} content - The content/body of the note. Required.
 * @property {Date} createdAt - Timestamp when the note was created. Automatically managed by Mongoose.
 * @property {Date} updatedAt - Timestamp when the note was last updated. Automatically managed by Mongoose.
 */
const noteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true } // by default give createdAt, updatedAt fields
);

// 2 - Create a model based of that schema
const Note = mongoose.model("Note", noteSchema);

export default Note;
