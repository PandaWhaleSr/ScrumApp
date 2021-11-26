import * as types from "../constants/actionTypes";

const initialState = {
  taskList: [],
  taskName: "",
  points: "",
  priorityLevel: "",
  taskCreationStep: null,
  createTaskClicked: false,
};

const tasksReducer = (state = initialState, action) => {
  switch (action.types) {
    default:
      return state;
  }
};
export default tasksReducer;
