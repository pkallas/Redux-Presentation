import { combineReducers } from 'redux';
import TimeReducer from './dummy_reducer';

const rootReducer = combineReducers({
  time: TimeReducer,
});

export default rootReducer;
