import {createStore, applyMiddleware} from './redux';
// import {ADD, DEC} from './MyTypes';
import * as Types from './types';

let reducer = (state = 0, action) => {
    if (action) {
        switch (action.type) {
            case Types.ADD:
                return state + 1;
            case Types.DEC:
                return state - 1;
            default:
                return state;
        }
    } else {
        return state;
    }
}


let logger = store => next => action => {
    console.log('before----------', store.getState());
    console.log(action);
    next(action);
    console.log('after----------', store.getState());
}

let thunk = store => next => action => {
    if (typeof action === 'function') {
        return action(next);
    } else {
        return next(action);
    }
}
let store = applyMiddleware(thunk)(createStore)(reducer);
//let store = createStore(reducer);
//console.info(store.getState());
store.subscribe(function () {
    console.log(store.getState())
});
store.dispatch(function (dispatch) {
    setTimeout(function () {
        dispatch({type: Types.ADD})
    }, 3000);
});
console.info(store.getState());
store.dispatch({type: Types.DEC});
console.info(store.getState());
