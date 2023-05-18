export const registerUser = (userData) => {
  return {
    type: "REGISTER_USER",
    payload: userData
  };
};
export const loginUser = (user) => {
  return {
    type: "LOGIN_USER",
    payload: user
  };
};
