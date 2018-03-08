import { combineReducers } from 'redux';
import TimeReducer from './time_reducer';

const rootReducer = combineReducers({
  time: TimeReducer,
});

export default rootReducer;
