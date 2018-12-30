import { createNavigationReducer } from 'react-navigation-redux-helpers';
import { combineReducers } from 'redux';
import RootNavigations from '../../navigators/RootNavigations';
import authReducer from './auth';
import memesReducer from './memes';

const reducerRouter = createNavigationReducer(RootNavigations);

const reducers = combineReducers({
  router: reducerRouter,
  auth: authReducer,
  memes: memesReducer
});

export default reducers;