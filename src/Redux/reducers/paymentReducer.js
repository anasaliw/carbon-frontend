const paymentReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case "payment":
      return { ...state, users: action.payload };
    default:
      return state;
  }
};

export default paymentReducer;
