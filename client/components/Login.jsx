import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  emailInputActionCreator,
  passwordInputActionCreator,
  submitLoginActionCreator,
} from "../actions/actions";
import styled from "styled-components";

const Wrapper = styled.section`
  box-sizing: border-box;
  text-align: center;
`;

function Login() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    const user = {
      email: auth.email,
      password: auth.password,
    };
    dispatch(submitLoginActionCreator(user));
    navigate("/dashboard");
  };

  return (
    <div>
      <Wrapper>
        <h1>Login</h1>
        <form onSubmit={submit}>
          <label>Email: </label>
          <input
            onChange={(e) => dispatch(emailInputActionCreator(e.target.value))}
          />
          <label>Password: </label>
          <input
            onChange={(e) =>
              dispatch(passwordInputActionCreator(e.target.value))
            }
            type="password"
          />
          <button type="submit">Log in</button>
        </form>
      </Wrapper>
    </div>
  );
}

export default Login;
