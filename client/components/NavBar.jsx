import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {toggleSignupActionCreator} from '../actions/actions';

const NavBar = () => {
    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth);
    console.log(auth);
    const toggleSignup = () => {
        dispatch(toggleSignupActionCreator())
    }
    return (
        <div className="nav">
            <ul>
            <li>
                Project Tracker
            </li>
            <li>
        {/* Dashboard or nothing */}

            </li>
            <li>
        {/* Log in/Log out */}
                Log in
            </li>
            {auth.showSignup === true && <button onClick={toggleSignup}>Signup</button>}
           {auth.showSignup === false && <button onClick={toggleSignup}>Login</button>}
            </ul>
        </div>
    )
  
};

export default NavBar;