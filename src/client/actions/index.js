import { SET_CURRENT_TIME } from './types';

export function dummyAction() {
  return {
    type: SET_CURRENT_TIME,
    payload: new Date(),
  };
};
