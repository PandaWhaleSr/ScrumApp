import React, { Component } from 'react';
import NavBar from './components/NavBar.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './containers/Dashboard.jsx'
import Login from './components/Login.jsx'
import Signup from './components/Signup.jsx';
import ProjectCreator from './components/ProjectCreator.jsx';

import {useSelector} from 'react-redux';



function App() {
  const auth = useSelector(state => state.auth);
  // console.log(auth)
    return (
        <div>
            <Router>
          {/* <h1>helllooo</h1> */}
          <NavBar/>
            <Routes>
                {/* <Route exact path="/dashboard" element={<Dashboard />}></Route> */}
                {auth.showSignup === true && <Route exact path="/" element={<Signup />}></Route>}
                {auth.showSignup === false && <Route exact path="/" element={<Login />}></Route>}
                {/* <Route exact path="/dashboard" element={<Dashboard />}></Route> */}
                <Route exact path="/projectCreator" element={<ProjectCreator/>}></Route>
            </Routes>
            </Router>
        </div>
    )
}

export default App;