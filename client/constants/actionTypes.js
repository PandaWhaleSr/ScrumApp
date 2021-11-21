/**
 * @module  actionTypes.js
 * @author Phillip Yoo & Matthew Miller
 * @date 11/20/2021
 * @description Action Type Constants
 * 
 * 
 */

export const TOGGLE_SIGNUP = 'TOGGLE_SIGNUP';
export const FIRST_NAME_INPUT = 'FIRST_NAME_INPUT';
export const LAST_NAME_INPUT = 'LAST_NAME_INPUT';
export const EMAIL_INPUT = 'EMAIL_INPUT';
export const PASSWORD_INPUT = 'PASSWORD_INPUT';
export const SUBMIT_SIGNUP = 'SUBMIT_SIGNUP';







export const UPDATE_DASHBOARD = 'UPDATE_DASHBOARD'; //fired when user logs in, or finishes creating, updating, or deleting a project or task.

export const PROJECT_NEXT_STEP = 'PROJECT_NEXT_STEP'; //for project creation process
export const PROJECT_PREVIOUS_STEP = 'PROJECT_PREVIOUS_STEP';
export const ADD_PROJECT = 'ADD_PROJECT';
export const UPDATE_PROJECT_DEADLINE = 'UPDATE_PROJECT_DEADLINE';
export const UPDATE_PROJECT_GOAL = 'UPDATE_PROJECT_GOAL';
export const DELETE_PROJECT = 'DELETE_PROJECT';

export const TASK_NEXT_STEP = 'TASK_NEXT_STEP';//for task creation process
export const TASK_PREVIOUS_STEP = 'TASK_PREVIOUS_STEP';
export const ADD_TASK = 'ADD_TASK';
export const UPDATE_TASK_PRIORITY = 'UPDATE_TASK_PRIORITY';
export const DELETE_TASK = 'DELETE_TASK';