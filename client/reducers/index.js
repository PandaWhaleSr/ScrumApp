/**
 * ************************************
 *
 * @module  index.js
 * @author  Phillip Yoo & Matthew Miller
 * @date 11/20/2021
 * @description A place to combine reducers
 *
 * ************************************
 */
import { combineReducers } from 'redux';
import projectsReducer from './projectsReducer';
import tasksReducer from './tasksReducer';



const reducers = combineReducers({
    projects: projectsReducer,
    tasks: tasksReducer,
});

export default reducers;