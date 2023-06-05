const getAllUserReducer = (state = { loading: true, users: [] }, action) => {
  switch (action.type) {
    case "getUsers":
      return { ...state, loading: false, users: action.payload };
    default:
      return state;
  }
};

export default getAllUserReducer;
