const updateEmailReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case "updateEmail":
      return { ...state, users: action.payload };
    default:
      return state;
  }
};

export default updateEmailReducer;
