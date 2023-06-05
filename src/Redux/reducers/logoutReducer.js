const logoutReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case "Logout":
      return { ...state, users: action.payload };
    default:
      return state;
  }
};

export default logoutReducer;
