import { CHANGE_NAME, SIGN_IN, SIGN_OUT } from "./actions";

const initialState = {
  name: "default name",
  authed: false,
};

export const profileReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case CHANGE_NAME:
      return {
        ...state,
        name: action.payload,
      };
    case SIGN_IN:
      return {
        ...state,
        authed: true,
      };
    case SIGN_OUT:
      return {
        ...state,
        authed: false,
      };
    default:
      return state;
  }
};