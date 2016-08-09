import { v4 } from 'node-uuid';
import * as api from '../api/index';
import { getIsFetching } from '../reducers';


export const addTodo = (text) => ({
    type: 'ADD_TODO',
    id: v4(),
    text
});

export const toggleTodo = (id) => ({
    type: 'TOGGLE_TODO',
    id
});

export const fetchTodos = (filter) => (dispatch, getState) => {
    
    if(getIsFetching(getState(), filter)) {
        return Promise.resolve();
    }
    
    dispatch({
        type: 'FETCH_TODOS_REQUEST',
        filter
    });

    return api.fetchTodos(filter).then(
        response => {
            dispatch({
                type: 'RECEIVE_TODOS_SUCCESS',
                filter,
                response
            })
        },
        error => {
            dispatch({
                type: 'RECEIVE_TODOS_FAILURE',
                filter,
                message: error.message || 'Something went wrong'
            })
        }
    );
};