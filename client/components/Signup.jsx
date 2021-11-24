import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  firstNameInputActionCreator,
  lastNameInputActionCreator,
  emailInputActionCreator,
  passwordInputActionCreator,
  submitSignupActionCreator,
} from "../actions/actions";
import { useNavigate } from "react-router";

function Signup() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const signup = (e) => {
    e.preventDefault();
    const user = {
      firstName: auth.firstName,
      lastName: auth.lastName,
      email: auth.email,
      password: auth.password,
    };
    dispatch(submitSignupActionCreator(user));
    navigate("/dashboard");
  };
  return (
    <div>
      <h1>Signup</h1>
      <form onSubmit={signup}>
        <label>First Name</label>
        <input
          onChange={(e) =>
            dispatch(firstNameInputActionCreator(e.target.value))
          }
        />
        <label>Last Name</label>
        <input
          onChange={(e) => dispatch(lastNameInputActionCreator(e.target.value))}
        />
        <label>Email</label>
        <input
          type="email"
          onChange={(e) => dispatch(emailInputActionCreator(e.target.value))}
        />
        <label>Password</label>
        <input
          type="password"
          onChange={(e) => dispatch(passwordInputActionCreator(e.target.value))}
        />
        <button type="submit">Sign up</button>
      </form>
    </div>
  );
}

export default Signup;
