import notecontext from './context/notes/noteContext'
import {useContext} from 'react'

import '../addnote.css'
import React, { useEffect,useState  } from 'react';
function Addnote(props) {
    const [userName, setUserName] = useState("");
  
    const context = useContext(notecontext)
    const {addNote} = context
    const [note, setNote] = useState({title:"", description:"", tag:""})
    const handleClick = (e)=>{
        e.preventDefault()
        addNote(note.title, note.description, note.tag)
        // console.log("Adding the note", note)
    setNote({id:"",title:"", description:"", tag:""})
    props.showAlert("Note has been Added", "success");

        }
 useEffect(() => {
    const storedUser = localStorage.getItem("name");
    if (storedUser) {
      setUserName(storedUser);
      console.log("stored")
    }
  });
    const onchange = (e)=>{
        setNote({...note, [e.target.name]:e.target.value})
    }
// console.log(note.title, note.description, note.tag)
  return (
    <div>
       <div className='name'>

       <span className="nav-link text-white fw-bold ">
                  👋 Welcome, {userName}!
                </span>
       </div>
       <div className="container add">
        <h2 className="text-center">{props.name}</h2>
    <form onSubmit={handleClick}>
    <h2>✍ Add a New Note</h2>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
    <input type="text" className="form-control" id="title" value={note.title} name='title' aria-describedby="emailHelp" onChange={onchange} minLength={3} required/>
    {/* <div id="emailHelp" className="form-text">Description</div> */}
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Description</label>
    <input type="text" className="form-control" id="description" value={note.description} name='description' minLength={5} required onChange={onchange}/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Tag</label>
    <input type="text" className="form-control" id="tag" name='tag'value={note.tag} minLength={3} required onChange={onchange}/>
  </div>
  <button type="btn-submit" className="btn-submit">➕AddNote</button>
</form>
    </div>
 
    </div>
  )
}

export default Addnote
