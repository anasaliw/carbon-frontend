const registerReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case "Register":
      return { ...state, users: action.payload };
    default:
      return state;
  }
};

export default registerReducer;
