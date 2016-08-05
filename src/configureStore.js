import todoApp from './reducers';
import { createStore, compose } from 'redux';

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
        todoApp,
        {},
        compose(
            window.devToolsExtension ? window.devToolsExtension() : f => f
        )
    );
    return store;
};

export default configureStore;
