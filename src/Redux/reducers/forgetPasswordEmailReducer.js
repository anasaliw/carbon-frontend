const forgetPasswordEmailReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case "forgetPasswordEmailRequest":
      return { ...state, users: action.payload };
    default:
      return state;
  }
};

export default forgetPasswordEmailReducer;
