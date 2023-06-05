const validateOtpReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case "ValidateOTP":
      return { ...state, users: action.payload };
    default:
      return state;
  }
};

export default validateOtpReducer;
