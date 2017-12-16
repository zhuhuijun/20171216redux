let createStore = (reducer) => {
    let state;
    let getState = () => state;
    //监听器
    let listeners = [];
    //
    let subscribe = (listener) => {
        this.listeners.push(listener);
        return () => {
            listeners = listeners.filter(l => l !== listener)
        }
    };
    /****
     *
     * @param action
     */
    let dispatch = action => {
        state = reducer(state, action);
        listeners.forEach(l => l());
    };
    //执行回掉函数
    dispatch();
    return {
        getState,
        subscribe,
        dispatch
    }
};
export  {createStore};