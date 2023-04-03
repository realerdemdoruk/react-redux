import countReducer from './counterReducers';
import { combineReducers } from 'redux';
import temaReducer from './themesReducers';
const reducers = combineReducers({
  countReducer,
  temaReducer,
});

export default reducers;
