import NoteContext from "./noteContext";
import { useState } from 'react'


const NoteState = (props) => {
  const host = "http://localhost:5000";
  const initialNotes = []
  const [notes, setNotes] = useState(initialNotes);

  const getNotes = async () => {
    const response = await fetch(`${host}/api/note/fetchallnotes`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      }
    });
    const json = await response.json();
    // console.log(json);
    setNotes(json);

  }
  const addNote = async (title, description, tag) => {
    try {
      const response = await fetch(`${host}/api/note/addnotes`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'auth-token':  localStorage.getItem('token')
        },
        body: JSON.stringify({ title, description, tag })
      });
      const note = await response.json();
      setNotes(notes.concat(note));
      props.showAlert("Note has been Added", "success");
      } catch (error) {
      console.error("Error adding note:", error); 
    }

  };
  const deleteNote = async (id) => {
    try {
      const response = await fetch(`${host}/api/note/deletenote/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': localStorage.getItem('token')
        },
      });
      
      const json = await response.json(); 
      // console.log(json);                
      // console.log("Deleting the note with id: " + id);
      
      const newNotes = notes.filter((note) => note._id !== id);
      setNotes(newNotes);             
    } catch (error) {
      console.error("Error deleting note:", error); 
    }
  };
  
  const editNote = async(id, title, description, tag) => {
    const response = await fetch(`${host}/api/note/updatenote/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'auth-token':  localStorage.getItem('token')
      },
      body: JSON.stringify({ title, description, tag })
    });
let newNotes = JSON.parse(JSON.stringify(notes))
for (let index = 0; index < newNotes.length; index++) {
  if (newNotes[index]._id === id) {
    newNotes[index].title = title;
    newNotes[index].description = description;
    newNotes[index].tag = tag;
    break;
    }
}
setNotes(newNotes);
// props.showAlert("Note has been Edited", "success");

  };

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote,getNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
