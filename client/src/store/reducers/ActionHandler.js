export const buildReducer = (initialState, actionHandlers) => {
  return {
    addAction(action, fn) {
      action = [].concat(action);
      action.forEach(a => {
        const reducers = actionHandlers[a] ? actionHandlers[a]: [];
        actionHandlers[a] = reducers.concat(fn);
      })
    },
    rootReducer(state = initialState, {type: action, payload, ...rest}) {
      if (actionHandlers[action]) {
        const oldState = Object.assign({}, state);
        let reducers = actionHandlers[action] ? actionHandlers[action]: [];
        reducers = actionHandlers.default ? reducers.concat(actionHandlers.default) : reducers;
        state = reducers.reduce((acc, cv) => cv(action, acc, payload), oldState);
      }
      return state;
    }
  }
}