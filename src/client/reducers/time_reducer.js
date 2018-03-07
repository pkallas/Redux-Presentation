import { SET_CURRENT_TIME } from '../actions/types';

export default function(state = {}, action) {
  switch (action.type) {
    case SET_CURRENT_TIME:
      return { ...state, currentTime: action.payload };
    default:
      return state;
  };
}
