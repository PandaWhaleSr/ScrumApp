import * as types from '../constants/actionTypes';

const initialState = {
    showSignup: true,
    firstName: '',
    lastName: '',
    email: '',
    password: ''
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.TOGGLE_SIGNUP : 
            const newState = {
                ...state,
                showSignup: !state.showSignup
            };

            return newState;
        
        case types.FIRST_NAME_INPUT :
            const updateFirstName = {
                ...state,
                firstName: action.payload
            };

            return updateFirstName;

        case types.LAST_NAME_INPUT : 
            const updateLast = {
                ...state,
                lastName: action.payload
            }
            return updateLast;

        case types.EMAIL_INPUT :
            const updateEmail = {
                ...state,
                email: action.payload
            }

            return updateEmail;

        case types.PASSWORD_INPUT :
            const updatePwd = {
                ...state,
                password: action.payload
            }
            return updatePwd;

        case types.SUBMIT_SIGNUP : 
            const updates = {
                ...state,
                firstName: '',
                lastName: '',
                email: '',
                password: ''
            }

            return updates;
        default:
            return state;
    }
}

export default authReducer;