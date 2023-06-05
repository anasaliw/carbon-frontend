const getUserReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case "GetUser":
      return { ...state, users: action.payload };
    default:
      return state;
  }
};

export default getUserReducer;
