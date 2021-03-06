export const LoginStart = () => ({ type: "LOGIN_START" });

export const LoginSuccess = (user) => ({
  type: "LOGIN_SUCCESS",
  payload: user,
});

export const LoginFailure = (error) => ({
  type: "LOGIN_FAILURE",
  payload: error,
});

export const LogOut = () => ({
  type: "LOGOUT",
});

export const UpdateUserStart = () => ({ type: "UPDATE_START" });
export const UpdateUserSuccess = (user) => ({
  type: "UPDATE_SUCCESS",
  payload: user,
});
export const UpdateUserFailure = (error) => ({
  type: "UPDATE_FAILURE",
  payload: error,
});
