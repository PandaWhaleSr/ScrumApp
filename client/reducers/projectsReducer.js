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
   projCreationStep: null,
   createProjectClicked: false,
 };

 const projectsReducer = (state = initialState, action) => {
   switch(action.types) {
      case types.ADD_PROJECT : 
        const createProj = {
          ...state,
          createProjectClicked: true,
          projCreationStep: 1
        };
        return createProj
    
      case types.PROJECT_NEXT_STEP :
       const nextStep = {
         ...state,
         createProjectClicked: true,
         projCreationStep: state.projCreationStep + 1
       };
       return nextStep;

       case types.PROJECT_PREVIOUS_STEP :
         const prevStep = {
           ...state,
           createProjectClicked: true,
           projCreationStep: state.projCreationStep - 1
         }
         return prevStep;

        //  case types.UPDATE_PROJECT_DEADLINE : 
        //   const prevStep = {
            
        //   }

        default: 
          return state;




   }
 }


 export default projectsReducer;