
import React from "react";
import './../styles/App.css';
import {BrowserRouter, Link, Routes, Route} from "react-router-dom"

const App = () => {
  return (
    <BrowserRouter>
    <div>
        {/* Do not remove the main div */}
        <Link to="/" >Home</Link>
        <Link to="/about" >About</Link>
        <Routes>
          <Route path="/" element={<><h1>Welcome to my website!</h1></>} />
          <Route path="/about" element={<><h1>About</h1><p>This is a sample React Router program.</p></>} />
        </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App