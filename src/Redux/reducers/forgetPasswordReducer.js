const forgetPasswordReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case "forgetPassword":
      return { ...state, users: action.payload };
    default:
      return state;
  }
};

export default forgetPasswordReducer;
