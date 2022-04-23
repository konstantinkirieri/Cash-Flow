export const CHANGE_NAME = "HOME::CHANGE_NAME";
export const SIGN_IN = "HOME::SIGN_IN";
export const SIGN_OUT = "HOME::SIGN_OUT";
export const TOGGLE_CHECKBOX = "HOME::TOGGLE_CHECKBOX";

export const toggleCheckbox = {
    type: TOGGLE_CHECKBOX,
  };

export const changeName = (name: any) => ({
  type: CHANGE_NAME,
  payload: name,
});

export const signIn = () => ({
  type: SIGN_IN,
});

export const signOut = () => ({
  type: SIGN_OUT,
});