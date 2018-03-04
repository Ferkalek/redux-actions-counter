import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, combineReducers} from 'redux';

import {
    createAction,
    handleActions,
    createActions } from 'redux-actions';

import App from './App';


//создаем экшины через createAction
const increment = createAction('INCREMENT');
const decrement = createAction('DECREMENT');

//создаем экшины через createActions
export const { increment2, decrement2 } = createActions('INCREMENT2', 'DECREMENT2');

// создание редюсеров
const initialState = { count: 1 };

// создание редюсеров через редакс-экшенс
const reducershandleActions = handleActions({
        [increment](store, { payload }) {
            console.log('increment1', store, payload);
            return { count: store.count + parseInt(payload) }
        },
        [decrement](store, { payload }) {
            console.log('decrement1', store, payload);
            return { count: store.count - parseInt(payload) }
        }
    }, initialState
);

const reducershandleActions2 = handleActions({
        [increment2](store, { payload }) {
            console.log('increment2', store, payload);
            return { count: store.count + parseInt(payload) }
        },
        [decrement2](store, { payload }) {
            console.log('decrement2', store, payload);
            return { count: store.count - parseInt(payload) }
        }
    }, initialState
);


// создание редюсеров
function counter(store = initialState, action) {
    if (action.type === 'INCREMENT') {
        return {
            ...store,
            count: store.count + parseInt(action.payload)
        }
    } else if (action.type === 'DECREMENT') {
        return {
            ...store,
            count: store.count - parseInt(action.payload)
        }
    } else {
        return store
    }
}
// const reducers = combineReducers({counter});
// const reducers = combineReducers({reducershandleActions});
const reducers = combineReducers({reducershandleActions2});

//index.js
const store = createStore(reducers, __REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
)