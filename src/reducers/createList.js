/**
 * Created by vshan on 8/8/16.
 */
import { combineReducers } from 'redux';

const createList = (filter) => {
    const ids = (state = [], action) => {
        switch (action.type) {
            case 'RECEIVE_TODOS_SUCCESS':
                return filter === action.filter ?
                    action.response.map(todo => todo.id)
                    :
                    state;
            case 'ADD_TODO_SUCCESS':
                return filter !== 'completed' ? [...state, action.response.id] : state;
            default:
                return state;
        }
    };

    const errorMessage = (state = null, action) => {
        if(action.filter !== filter) {
            return state;
        }
        switch (action.type) {
            case 'RECEIVE_TODOS_FAILURE':
                return action.message;
            case 'RECEIVE_TODOS_SUCCESS':
            case 'FETCH_TODOS_REQUEST':
                return null;
            default:
                return state;
        }
    };

    const isFetching = (state = false, action) => {
        if(action.filter !== filter) {
            return state;
        }
        switch (action.type) {
            case 'FETCH_TODOS_REQUEST':
                return true;
            case 'RECEIVE_TODOS_SUCCESS':
            case 'RECEIVE_TODOS_FAILURE':
                return false;
            default:
                return state;
        }
    };

    return combineReducers({
        ids,
        isFetching,
        errorMessage
    });
};

export default createList;

export const getIds = (state) => state.ids;
export const getIsFetching = (state) => state.isFetching;
export const getErrorMessage = (state) => state.errorMessage;

