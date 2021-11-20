/**
 * ************************************
 *
 * @module  projectsReducer
 * @author  Phillip Yoo & Matthew Miller
 * @date 11/20/2021
 * @description reducer for project data
 *
 * ************************************
 */

 import * as types from '../constants/actionTypes';

 const initialState = {
   projectList: [],
   projectName: '',
   deadline: '',
   goal: '',
   projCreationStep: 0
 };