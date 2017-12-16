import {createStore} from './redux';
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

let store = createStore(reducer);
console.info(store.getState());
store.dispatch({type:Types.ADD});
console.info(store.getState());
