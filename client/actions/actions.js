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

import * as types from '../constants/actionTypes';

export const addProjectActionCreator = () => ({
  type: types.ADD_PROJECT,
});


export const setNewLocation = (e) => ({
    type: types.SET_NEW_LOCATION,
    payload: e.target.value,
  });