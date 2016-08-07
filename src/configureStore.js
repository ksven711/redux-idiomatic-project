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

const promise = (store) => (next) => (action) => {
    if (typeof action.then === 'function') {
        return action.then(next);
    }
    return next(action);
};

const wrapDispatchWithMiddlewares = (store, middlewares) => {
    middlewares.slice().reverse().forEach(middleware =>
        store.dispatch = middleware(store)(store.dispatch)
    );
};

const configureStore = () => {

    const middlewares = [promise];

    const store = createStore(
        todoApp,
        {},
        compose(
            window.devToolsExtension ? window.devToolsExtension() : f => f
        )
    );

    wrapDispatchWithMiddlewares(store, middlewares);

    return store;
};

export default configureStore;
