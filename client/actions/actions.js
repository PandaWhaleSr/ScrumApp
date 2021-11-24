/**
 * @module  actions.js
 * @author Phillip Yoo & Matthew Miller
 * @date 11/20/2021
 * @description Action Creators
 *
 *
 */

/* 
  export const ADD_PROJECT = 'ADD_PROJECT';
  export const UPDATE_PROJECT = 'UPDATE_PROJECT'
  export const DELETE_PROJECT = 'DELETE_PROJECT';
  export const ADD_TASK = 'ADD_TASK';
  export const UPDATE_TASK = 'UPDATE_TASK';
  export const DELETE_TASK = 'DELETE_TASK';
 */

import * as types from "../constants/actionTypes";

export const toggleSignupActionCreator = () => ({
  type: types.TOGGLE_SIGNUP,
});

export const firstNameInputActionCreator = (input) => ({
  type: types.FIRST_NAME_INPUT,
  payload: input,
});

export const lastNameInputActionCreator = (input) => ({
  type: types.LAST_NAME_INPUT,
  payload: input,
});

export const emailInputActionCreator = (input) => ({
  type: types.EMAIL_INPUT,
  payload: input,
});

export const passwordInputActionCreator = (input) => ({
  type: types.PASSWORD_INPUT,
  payload: input,
});

export const submitSignupActionCreator = (user) => {
  console.log(user);
  return (dispatch) => {
    fetch("/api/userRoutes/createUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        password: user.password,
      }),
    })
      .then((res) => {
        console.log(res);
        dispatch({ type: types.SUBMIT_SIGNUP });
      })
      .catch((err) => console.log(err));
  };
};

export const submitLoginActionCreator = (user) => {
  return (dispatch) => {
    fetch("/api/userRoutes/verifyUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: user.email,
        password: user.password,
      }),
    })
      .then((res) => {
        console.log(res);
        dispatch({ type: types.SUBMIT_LOGIN });
      })
      .catch((err) => console.log(err));
  };
};

//project action creators
export const updateDashboardActionCreator = () => {
  return (dispatch) => {
    fetch("/api/projectRoutes/projects")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        dispatch({ type: types.UPDATE_DASHBOARD, payload: data });
      })
      .catch((err) => console.log(err));
  };
};

// export const addProjectActionCreator = () => ({
//   type: types.ADD_PROJECT
// });

// export const projectNextStepActionCreator = (data) => ({
//   type: types.PROJECT_NEXT_STEP,
//   payload: data
//   });

// export const projectPreviousStepActionCreator = () => ({
//   type: types.PROJECT_PREVIOUS_STEP
//   });

// export const updateProjectDeadlineActionCreator = (deadline) => ({
//   type: types.UPDATE_PROJECT_DEADLINE,
//   payload: deadline
// });

// export const updateProjectgoalActionCreator = (goal) => ({
//   type: types.UPDATE_PROJECT_GOAL,
//   payload: goal
// });

// export const deleteProjectActionCreator = (projectId) => ({
//   type: types.DELETE_PROJECT,
//   payload: projectId
// });

// //task action creators
// export const taskNextStepActionCreator = (data) => ({
//   type: types.TASK_NEXT_STEP,
//   payload: data
// });

// export const taskPreviousStepActionCreator = () => ({
//   type: types.TASK_PREVIOUS_STEP,
// });

// export const addTaskActionCreator = (projectId) => ({
//   type: types.ADD_TASK,
//   payload: projectId
// });

// export const updateTaskPriorityActionCreator = (taskId) => ({
//   type: types.UPDATE_TASK_PRIORITY,
//   payload: taskId
// });

// export const deleteTaskActionCreator = (taskId) => ({
//   type: types.DELETE_TASK,
//   payload: taskId
// });
