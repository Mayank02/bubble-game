import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import * as types from '../utils/action-types';

const bubbles = (state = {}, action) => {
    switch (action.type) {
        case types.SET_VALIDATE_MESSAGE:
            return {
                ...state,
                userDetails: null,
                validationError: action.payload
            };
        case types.RESET_VALIDATE_MESSAGE:
            return {
                ...state,
                userDetails: null,
                validationError: null
            };
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    bubbles,
    routing
});

export default rootReducer;
