export const CHANGE_NAME = "PROFILE::CHANGE_NAME";
export const SIGN_IN = "PROFILE::SIGN_IN";
export const SIGN_OUT = "PROFILE::SIGN_OUT";

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