const BasketCreateReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case "basketCreate":
      return { ...state, users: action.payload };
    default:
      return state;
  }
};

export default BasketCreateReducer;
