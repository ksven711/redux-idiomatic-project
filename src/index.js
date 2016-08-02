import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import configureStore from './configureStore';
import Root from './components/Root';

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

const store = configureStore();

render(
  <Root store={store} />,
  document.getElementById('root')
);
