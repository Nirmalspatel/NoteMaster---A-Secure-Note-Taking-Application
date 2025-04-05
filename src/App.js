import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NoteState from './components/context/notes/NoteState';
import {Alert}  from './components/Alert';
import Login from './components/login';
import Signup from './components/signup';
import { useState } from 'react';
function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message,type) => {
    setAlert({
      msg: message,
      type:type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  return (
    <div className="comtainer  " >
      <Router>
        <NoteState>
          <Alert alert={alert} />
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home showAlert ={showAlert}/>} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/login" element={<Login showAlert ={showAlert}/>} />
            <Route exact path="/signup" element={<Signup showAlert ={showAlert}/>} />
          </Routes>
        </NoteState>
      </Router >
    </div >
  );
}
export default App;
