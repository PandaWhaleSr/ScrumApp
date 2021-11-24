import React from "react";
import NavBar from "./components/NavBar.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./containers/Dashboard.jsx";
import Login from "./components/Login.jsx";
import Signup from "./components/Signup.jsx";

import { useSelector } from "react-redux";

function App() {
  const auth = useSelector((state) => state.auth);
  return (
    <>
      <div className="App">
        <Router>
          <NavBar />
          <Routes>
            {auth.showSignup === true && (
              <Route exact path="/" element={<Signup />}></Route>
            )}
            {auth.showSignup === false && (
              <Route exact path="/" element={<Login />}></Route>
            )}
            <Route exact path="/dashboard" element={<Dashboard />}></Route>
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
