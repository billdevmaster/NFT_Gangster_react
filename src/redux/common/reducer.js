import { SET_ACCOUNT, SET_WEB3 } from '../actions';

const account = localStorage.getItem("account");
const web3 = localStorage.getItem("web3");

const INIT_STATE = {
  account: account ? account : '',
  web3: web3 ? web3 : null,
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case SET_ACCOUNT:
      localStorage.setItem("account", action.payload);
      return { ...state, account: action.payload };
    case SET_WEB3:
      localStorage.setItem("web3", action.payload);
      return { ...state, web3: action.payload };
    default:
      return { ...state };
  }
};
