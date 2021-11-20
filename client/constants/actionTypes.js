/**
 * @module  actionTypes.js
 * @author Phillip Yoo & Matthew Miller
 * @date 11/20/2021
 * @description Action Type Constants
 * 
 * 
 */

export const UPDATE_DASHBOARD = 'UPDATE_DASHBOARD'; //fired when user logs in, or finishes creating, updating, or deleting a project or task.

export const PROJECT_NEXT_STEP = 'PROJECT_NEXT_STEP'; //for project creation process
export const PROJECT_PREVIOUS_STEP = 'PROJECT_PREVIOUS_STEP';
export const ADD_PROJECT = 'ADD_PROJECT';
export const UPDATE_PROJECT_NAME = 'UPDATE_PROJECT_NAME';
export const UPDATE_PROJECT_DEADLINE = 'UPDATE_PROJECT_DEADLINE';
export const DELETE_PROJECT = 'DELETE_PROJECT';

export const TASK_NEXT_STEP = 'TASK_NEXT_STEP';//for task creation process
export const TASK_PREVIOUS_STEP = 'TASK_PREVIOUS_STEP';
export const ADD_TASK = 'ADD_TASK';
export const UPDATE_TASK = 'UPDATE_TASK';
export const DELETE_TASK = 'DELETE_TASK';