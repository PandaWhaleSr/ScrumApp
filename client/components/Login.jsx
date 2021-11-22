import React, { Component } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {emailInputActionCreator, passwordInputActionCreator, submitLoginActionCreator} from '../actions/actions'




function Login() {
    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth);
    const navigate = useNavigate();

    const submit = (e) => {
        e.preventDefault();
        const user = {
            email: auth.email,
            password: auth.password
        }
        dispatch(submitLoginActionCreator(user));
        navigate('/dashboard');
    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={submit}>
                <label>Email</label>
                <input onChange={(e) => dispatch(emailInputActionCreator(e.target.value))}/>
                <label>Password</label>
                <input onChange={(e) => dispatch(passwordInputActionCreator(e.target.value))} type="password"/>
                <button type="submit">Log in</button>
            </form>
            
        </div>
    )
};


export default Login;


