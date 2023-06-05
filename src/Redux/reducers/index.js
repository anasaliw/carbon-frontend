import { combineReducers } from "redux";
import registerReducer from "./registerReducer";
import validateOtpReducer from "./validateOtpReducer";
import loginReducer from "./loginReducer";
import getUserReducer from "./getUserReducer";
import logoutReducer from "./logoutReducer";
import updateEmailReducer from "./updateEmailReducer";
import updateProfileReducer from "./updateProfileReducer";
import paymentReducer from "./paymentReducer";
import forgetPasswordEmailReducer from "./forgetPasswordEmailReducer";
import forgetPasswordReducer from "./forgetPasswordReducer";
import basketCreateReducer from "./BasketCreateReducer";
import getAllUserReducer from "./getAllUsers";
import getSingleUserReducer from "./getSingleUser";
import userApprovedReducer from "./userApproved";

const rootReducer = combineReducers({
  registerReducer,
  validateOtpReducer,
  loginReducer,
  getUserReducer,
  logoutReducer,
  updateEmailReducer,
  updateProfileReducer,
  paymentReducer,
  forgetPasswordEmailReducer,
  forgetPasswordReducer,
  basketCreateReducer,
  getAllUserReducer,
  getSingleUserReducer,
  userApprovedReducer,
});

export default rootReducer;
