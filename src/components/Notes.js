import notecontext from './context/notes/noteContext'
import { useContext, useEffect, useRef } from 'react'
import Noteitem from './Noteitem'
import React from 'react'
import Addnote from './Addnote'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../modal.css'
// import '../home.css'
const Notes = (props) => {
  let navigate = useNavigate();

  const context = useContext(notecontext)
  const { notes, getNotes, editNote } = context
  useEffect(() => {
    if (localStorage.getItem('token')) {
      getNotes();
    } else {
      navigate("/login");
    }
    // eslint-disable-next-line
  }, []);
  const ref = useRef(null)
  const refclose = useRef(null)
  const [note, setNote] = useState({ id: "", etitle: "", edescription: "", etag: "" })
  const updateNote = (currentnote) => {
    // ref.toggle();
    // console.log("Updating the note", currentnote)
    ref.current.click();
    setNote({ id: currentnote._id, etitle: currentnote.title, edescription: currentnote.description, etag: currentnote.tag });
  }
  const handleClick = (e) => {
    refclose.current.click();
    editNote(note.id, note.etitle, note.edescription, note.etag)
    props.showAlert("Note has been updated", "success");

  }

  const onchange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value })
  }

  return (
    <>
      <div className="container my-3" >
        <div className="sticky-top pt-3 pb-2" style={{ top: "70px", zIndex: "1000" }}>
          <Addnote showAlert={props.showAlert} />
        </div>
        <button ref={ref} type="button" className="btn btn-primary d-none" data-toggle="modal" data-target="#exampleModal">
          Launch demo modal
        </button>

        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              {/* Modal Header */}
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Edit Note
                </h5>
              </div>

              {/* Modal Body */}
              <div className="modal-body">
                <form>
                  {/* Title */}
                  <div className="mb-3">
                    <label htmlFor="etitle" className="form-label">
                      Title
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="etitle"
                      name="etitle"
                      value={note.etitle}
                      onChange={onchange}
                      placeholder="Enter title"
                      required
                    />
                  </div>

                  {/* Description */}
                  <div className="mb-3">
                    <label htmlFor="edescription" className="form-label">
                      Description
                    </label>
                    <textarea
                      type="text"
                      className="form-control"
                      id="edescription"
                      name="edescription"
                      value={note.edescription}
                      onChange={onchange}
                      placeholder="Enter description"
                      required
                    />
                  </div>

                  {/* Tag */}
                  <div className="mb-3">
                    <label htmlFor="etag" className="form-label">
                      Tag
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="etag"
                      name="etag"
                      value={note.etag}
                      onChange={onchange}
                      placeholder="Enter tag"
                    />
                  </div>
                </form>
              </div>

              {/* Modal Footer */}
              <div className="modal-footer">
                <button
                  ref={refclose}
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button onClick={handleClick} type="button" className="btn btn-primary">
                  Update Note
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container my-3">
        <div className="row my-3">
          {notes.map((note) => {
            return <Noteitem note={note} updateNote={updateNote} showAlert={props.showAlert} />
          })}
        </div>
      </div>
    </>
  )
}
export default Notes
