const updateProfileReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case "updateProfile":
      return { ...state, users: action.payload };
    default:
      return state;
  }
};

export default updateProfileReducer;
