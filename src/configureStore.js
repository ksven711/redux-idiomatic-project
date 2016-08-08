import todoApp from './reducers';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

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

/*const promise = (store) => (next) => (action) => {
    if (typeof action.then === 'function') {
        return action.then(next);
 }
    return next(action);
};*/

/* Lesson 16 for impl details
const wrapDispatchWithMiddlewares = (store, middlewares) => {
    middlewares.slice().reverse().forEach(middleware =>
        store.dispatch = middleware(store)(store.dispatch)
    );
};
*/

const configureStore = () => {

    const middleware = [thunk];

    return createStore(
        todoApp,
        {},
        compose(
            applyMiddleware(...middleware),
            window.devToolsExtension ? window.devToolsExtension() : f => f
        )
    );

};

export default configureStore;
