import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleSignupActionCreator } from "../actions/actions";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./globalStyles.js";
import { lightTheme, darkTheme } from "./Themes.js";

const NavBar = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const toggleSignup = () => {
    dispatch(toggleSignupActionCreator());
  };
  const [theme, setTheme] = useState("light");
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <div className="nav">
          <ul>
            <li>Project Tracker</li>
            <li>{/* Dashboard or nothing */}</li>
            {auth.showSignup === false && (
              <button onClick={toggleSignup}>Signup</button>
            )}
            {auth.showSignup === true && (
              <button onClick={toggleSignup}>Login</button>
            )}
            <button onClick={themeToggler}>Switch Theme</button>
          </ul>
        </div>
      </>
    </ThemeProvider>
  );
};

export default NavBar;
