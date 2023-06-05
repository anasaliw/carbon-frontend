const userApprovedReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case "userApproved":
      return { ...state, users: action.payload };
    default:
      return state;
  }
};

export default userApprovedReducer;
