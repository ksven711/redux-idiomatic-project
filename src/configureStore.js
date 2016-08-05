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

const addPromiseSupportToDispatch = (store) => {
    const rawDispatch = store.dispatch;
    return (action) => {
        if(typeof action.then === 'function') {
            return action.then(rawDispatch);
        }
        return rawDispatch(action);
    }
};

const configureStore = () => {
    const store = createStore(
        todoApp,
        {},
        compose(
            window.devToolsExtension ? window.devToolsExtension() : f => f
        )
    );

    store.dispatch = addPromiseSupportToDispatch(store);

    return store;
};

export default configureStore;
