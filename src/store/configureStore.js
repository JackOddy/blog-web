import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import createHistory from 'history/createBrowserHistory';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';

import skillsReducer from '../reducers/skillsReducer';

export const history = createHistory();

const middleware = routerMiddleware(history);

const reducer = combineReducers({
  router: routerReducer,
  form: formReducer,
  skills: skillsReducer,
});

export const store = createStore(
  reducer,
  compose(applyMiddleware(middleware, thunk)),
);
