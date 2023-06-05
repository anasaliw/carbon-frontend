const loginReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case "Login":
      return { ...state, users: action.payload };
    default:
      return state;
  }
};

export default loginReducer;
