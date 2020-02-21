import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/root_reducer';
// import thunk from 'redux-thunk';
// import logger from 'redux-logger';

const addLoggingToDispatch = store => next => action => {
  // your code here
  console.log('Action received:', action);
  console.log('State pre-dispatch:', store.getState());

  let result = next(action);

  console.log('State post-dispatch:', store.getState());

  return result;
}

const configureStore = (preloadedState = {}) => {
  const store = createStore(rootReducer, preloadedState, applyMiddleware(addLoggingToDispatch));
  store.subscribe(() => {
    localStorage.state = JSON.stringify(store.getState());
  });
  return store;
}

export default configureStore;
