import { SET_ACCOUNT, SET_WEB3 } from '../actions';

export const setAccount = (data) => {
  return {
    type: SET_ACCOUNT,
    payload: data,
  };
};

export const setWeb3 = (data) => {
  return {
    type: SET_WEB3,
    payload: data,
  };
};