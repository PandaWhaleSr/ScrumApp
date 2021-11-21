import * as types from '../constants/actionTypes';

const initialState = {
    showSignup: true,
    randomState: null
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.TOGGLE_SIGNUP : 
            const newState = {
                ...state,
                showSignup: !state.showSignup
            };

            return newState;
        default:
            return state;
    }
}

export default authReducer;