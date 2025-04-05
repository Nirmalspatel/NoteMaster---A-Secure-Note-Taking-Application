import React from "react";
import notecontext from "./context/notes/noteContext";
import { useContext } from "react";
import "./Noteitem.css"; // Importing the new CSS file

function Noteitem(props) {
  const context = useContext(notecontext);
  const { deleteNote } = context;
  const { note, updateNote } = props;

  return (
    <div className="col-md-4 my-3">
      <div className="note-card">
        <div className="card-body">
          <h5 className="note-title"> {note.title}</h5>
          <p className="note-text"> {note.description}</p>
          <div className="note-actions">
            <i
              className="fa-solid fa-trash-can delete-icon"
              onClick={() => {
                deleteNote(note._id);
                console.log("note deleted")
                props.showAlert("Note has been Deleted", "success");
              }}
            ></i>
            <i
              className="fa-solid fa-pen-to-square edit-icon"
              onClick={() => {
                updateNote(note);
              }}
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Noteitem;
