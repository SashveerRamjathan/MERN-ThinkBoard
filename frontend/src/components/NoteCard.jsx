import { PenSquareIcon, Trash2Icon } from "lucide-react";
import { Link } from "react-router";
import { formatDate } from "../lib/utils";
import api from "../lib/axios";
import toast from "react-hot-toast";

/**
 * NoteCard component displays a single note with options to edit or delete.
 *
 * @component
 * @param {Object} props
 * @param {Object} props.note - The note object to display.
 * @param {string} props.note._id - Unique identifier for the note.
 * @param {string} props.note.title - Title of the note.
 * @param {string} props.note.content - Content of the note.
 * @param {string|Date} props.note.createdAt - Creation date of the note.
 * @param {Function} props.setNotes - State setter to update the notes array after deletion.
 *
 * @example
 * <NoteCard note={note} setNotes={setNotes} />
 */
const NoteCard = ({ note, setNotes }) => {
  const handleDelete = async (e, id) => {
    e.preventDefault(); // remove nav behavior

    if (!window.confirm("Are you sure you want to delete this note")) {
      return;
    }

    try {
      await api.delete(`/notes/${id}`);
      // update UI to reflect new state
      setNotes((prev) => prev.filter((note) => note._id !== id)); // remove deleted one from array
      toast.success("Note deleted successfully");
    } catch (error) {
      console.log("Failed to delete note. Error in handleDelete", error);
      toast.error("Failed to delete note");
    }
  };

  return (
    <Link
      to={`/note/${note._id}`}
      className="card bg-base-100 hover:shadow-lg transition-all duration-200 border-t-4 border-solid border-[#00FF9D]"
    >
      <div className="card-body">
        <h3 className="card-title text-base-content">{note.title}</h3>
        <p className="text-base-content/70 line-clamp-3">{note.content}</p>
        <div className="card-actions justify-between items-center mt-4">
          <span className="text-sm text-base-content/60">
            {formatDate(new Date(note.createdAt))}
          </span>
          <div className="flex items-center gap-1">
            <PenSquareIcon className="size-4" />
            <button
              className="btn btn-ghost btn-xs text-error"
              onClick={(e) => handleDelete(e, note._id)}
            >
              <Trash2Icon className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default NoteCard;
