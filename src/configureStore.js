import todoApp from './reducers';
import { createStore } from 'redux';

/*const persistedState = {
 todos: [{
 id: '0',
 text: 'Welcome back',
 completed: false
 }]
 };

 const store = createStore(
 todoApp,
 persistedState
 );*/


const configureStore = () => {
    const store = createStore(
        todoApp
    );
    return store;
};

export default configureStore;
