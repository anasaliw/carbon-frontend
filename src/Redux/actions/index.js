import axios from "axios";
import Swal from "sweetalert2";
import { instance } from "../../config";

export const registerAction =
  (firstName, lastName, email, password) => async (dispatch) => {
    console.log("this is email", email);
    let data = {
      firstName: firstName,
      email: email,
      password: password,
      lastName: lastName,
    };
    let response = await instance
      .post(`api/v1/register`, data)
      .then((response) => {
        if (response.data.success === true) {
          console.log("forget password", response);
          Swal.fire(
            "Success",
            response.data.message,
            "success",

            {
              buttons: false,
              timer: 2000,
            }
          );
        }

        const retrnObj = { type: "Register", payload: response };
        console.log("ObjectReturn", retrnObj);
        dispatch(retrnObj);
        localStorage.setItem("Id", response.data.user._id);
      })
      .catch((error) => {
        Swal.fire(
          "error",
          error.response.data.error,
          "error",

          {
            buttons: false,
            timer: 2000,
          }
        );
      });
  };

// Validate OTP action starts from here

export const validateOtpAction = (email, otp) => async (dispatch) => {
  let response = await instance
    .post(`api/v1/validateOTP`, {
      email: email,
      otp: otp,
    })
    .then((response) => {
      if (response.data.success === true) {
        Swal.fire(
          "Success",
          response.data.message,
          "success",

          {
            buttons: false,
            timer: 2000,
          }
        );
      }

      const retrnObj = { type: "ValidateOTP", payload: response };
      console.log("ObjectReturnOtp", retrnObj);
      dispatch(retrnObj);
      localStorage.setItem("authToken", response.data.token);
    })
    .catch((error) => {
      Swal.fire("error", error.response.data.error, "error", {
        buttons: false,
        timer: 2000,
      });
    });
};

//  Validate OTP action ends here

// login action starts form here

export const loginAction = (email, password) => async (dispatch) => {
  let response = await instance
    .post(`api/v1/login`, {
      email: email,
      password: password,
    })
    .then((response) => {
      console.log("loginRes", response);
      if (response.data.success === true) {
        Swal.fire("Success", response.data.message, "success", {
          buttons: false,
          timer: 2000,
        });
      }

      const retrnObj = { type: "Login", payload: response };
      console.log("ObjectReturnLogin", retrnObj);
      dispatch(retrnObj);
      localStorage.setItem("Id", response.data.user._id);
      localStorage.setItem("user", JSON.stringify(response.data));
    })
    .catch((error) => {
      console.log("error", error.response.data.error);
      Swal.fire(
        "error",
        error.response.data.error,
        "error",

        {
          buttons: false,
          timer: 2000,
        }
      );
    });
};

// login action ends from here

// Get Users action start from here

export const getUserAction = (id) => async (dispatch) => {
  console.log("thisIsId", id, "token", localStorage.getItem("authToken"));
  let response = await instance
    .get(`api/v1/me`)
    .then((response) => {
      const retrnObj = { type: "GetUser", payload: response };
      console.log("ObjectReturnGetUser", retrnObj);
      dispatch(retrnObj);
    })
    .catch((error) => {});
};

// Get users action ends here

// logout action starts form here
export const logoutAction = () => async (dispatch) => {
  let response = await instance
    .get(`api/v1/logout`)
    .then((response) => {
      console.log("loginRes", response);
      if (response.data.success === true) {
        Swal.fire("Success", response.data.message, "success", {
          buttons: false,
          timer: 2000,
        });
      }

      const retrnObj = { type: "Logout", payload: response };
      console.log("ObjectReturnLogout", retrnObj);
      dispatch(retrnObj);
      localStorage.removeItem("Id");
      localStorage.removeItem("user");
    })
    .catch((error) => {
      console.log("error", error.response.data.error);
      Swal.fire(
        "error",
        error.response.data.error,
        "error",

        {
          buttons: false,
          timer: 2000,
        }
      );
    });
};

// logout action ends here

//Forget Password Email Send Starts here
export const forgetPasswordEmailAction = (email) => async (dispatch) => {
  console.log("request forget link triggered", email);
  await instance
    .post(`api/v1/password/forgot`, {
      email: email,
    })
    .then((response) => {
      console.log("Forget Password Email Request", response);
      if (response.data.success === true) {
        Swal.fire("Success", response.data.message, "success", {
          buttons: false,
          timer: 2000,
        });
      }
      const retrnObj = {
        type: "forgetPasswordEmailRequest",
        payload: response,
      };
      console.log("ObjectReturnForgetPasswordEmail", retrnObj);
      dispatch(retrnObj);
    })
    .catch((error) => {
      console.log("error", error);
      Swal.fire(
        "error",
        error.response.data.error,
        "error",

        {
          buttons: false,
          timer: 2000,
        }
      );
    });
};
//Forget Password Email Send Ends here

//Forget Password Starts here
export const forgetPasswordAction =
  (password, confirmPassword, token) => async (dispatch) => {
    console.log(password, confirmPassword, token);
    let response = await instance
      .put(`api/v1/password/reset/${token}`, { password, confirmPassword })
      .then((response) => {
        console.log("ForgetPasswordResponse", response);
        if (response.data.success === true) {
          Swal.fire("Success", response.data.message, "success", {
            buttons: false,
            timer: 2000,
          });
        }

        const retrnObj = { type: "forgetPassword", payload: response };
        console.log("ObjectReturnForgetPassword", retrnObj);
        dispatch(retrnObj);
        localStorage.setItem("Id", response.data.user._id);
        return response.data.success;
      })
      .catch((error) => {
        console.log("error", error.response.data.error);
        Swal.fire(
          "error",
          error.response.data.error,
          "error",

          {
            buttons: false,
            timer: 2000,
          }
        );
      });
  };

// updateEmail action starts from here
export const updateEmailAction = (email) => async (dispatch) => {
  let response = await instance
    .put(`api/v1/me/updateEmail`, {
      email: email,
    })
    .then((response) => {
      console.log("updateEmailRes", response);
      if (response.data.success === true) {
        Swal.fire("Success", response.data.message, "success", {
          buttons: false,
          timer: 2000,
        });
      }

      const retrnObj = { type: "updateEmail", payload: response };
      console.log("ObjectReturnLogin", retrnObj);
      dispatch(retrnObj);
      localStorage.setItem("Id", response.data.user._id);
    })
    .catch((error) => {
      console.log("error", error.response.data.error);
      Swal.fire(
        "error",
        error.response.data.error,
        "error",

        {
          buttons: false,
          timer: 2000,
        }
      );
    });
};

// updateEmail action ends here

// updateProfile action starts from here

export const updateProfileAction = (formData) => async (dispatch) => {
  let response = await instance
    .put(`api/v1/me/update`, formData)
    .then((response) => {
      console.log("updateProfileRes", response);
      if (response.data.success === true) {
        Swal.fire("Success", response.data.message, "success", {
          buttons: false,
          timer: 2000,
        });
      }

      const retrnObj = { type: "updateProfile", payload: response };
      console.log("ObjectReturnLogin", retrnObj);
      dispatch(retrnObj);
      localStorage.setItem("Id", response.data.user._id);
    })
    .catch((error) => {
      console.log("error", error.response.data.error);
      Swal.fire(
        "error",
        error.response.data.error,
        "error",

        {
          buttons: false,
          timer: 2000,
        }
      );
    });
};

// updateProfile action ends here

//Payment method starts here
export const paymentAction = (amount, id) => async (dispatch) => {
  try {
    const response = await instance.post(`api/v1/payment`, {
      //Amount is in cents.. 1000=10$
      amount: amount,
      id,
    });

    if (response.data.success === true) {
      console.log("Payment Successful", response);
      Swal.fire("Payment Successful", response.data.message, "success", {
        buttons: false,
        timer: 2000,
      });
      const retrnObj = { type: "payment", payload: response };
      console.log("ObjectReturnPayment", retrnObj);
      dispatch(retrnObj);
    }
  } catch (error) {
    console.log("error", error);
    Swal.fire(
      "error",
      error.response.data.error,
      "error",

      {
        buttons: false,
        timer: 2000,
      }
    );
  }
};

//Payment method ends here

// ! Basket Composition API's Starts here

// ? Create Basket Starts here
export const createBasketAction = (basketName, ratios) => async (dispatch) => {
  try {
    const response = await instance.post(`api/v1/createRatio`, {
      //Amount is in cents.. 1000=10$
      basketName,
      ratios,
    });

    if (response.data.success === true) {
      console.log("Basket Created Successfully", response);
      Swal.fire(
        "Basket Created Successfully",
        response.data.message,
        "success",
        {
          buttons: false,
          timer: 2000,
        }
      );
      const retrnObj = { type: "basketCreate", payload: response };
      console.log("basketCreate", retrnObj);
      dispatch(retrnObj);
    }
  } catch (error) {
    console.log("error", error);
    Swal.fire(
      "error",
      error.response.data.error,
      "error",

      {
        buttons: false,
        timer: 2000,
      }
    );
  }
};

// ? Create Basket Ends here

// ! Basket Composition API's End here

// ! Manage Users Starts
// ? Get All Users Starts
export const getAllUsersAction = () => async (dispatch) => {
  try {
    const response = await instance.get(`api/v1/admin/users`);

    if (response.data.success === true) {
      console.log("Get All Users Successfully", response);
      // Swal.fire("Get All Users Successful", response.data.message, "success", {
      //   buttons: false,
      //   timer: 2000,
      // });
      const retrnObj = { type: "getUsers", payload: response };
      console.log("getUsers", retrnObj);
      dispatch(retrnObj);
    }
  } catch (error) {
    console.log("error", error);
    Swal.fire(
      "error",
      error.response.data.error,
      "error",

      {
        buttons: false,
        timer: 2000,
      }
    );
  }
};
// ? Get All Users Ends

// ? Get Single User Start

export const getSingleUserAction = (id) => async (dispatch) => {
  try {
    const response = await instance.get(`api/v1/admin/users/${id}`);

    if (response.data.success === true) {
      console.log("Get Single User Successfully", response);
      // Swal.fire("Get All Users Successful", response.data.message, "success", {
      //   buttons: false,
      //   timer: 2000,
      // });
      const retrnObj = { type: "getSingleUser", payload: response };
      console.log("getSingleUser", retrnObj);
      dispatch(retrnObj);
    }
  } catch (error) {
    console.log("error", error);
    Swal.fire(
      "error",
      error.response.data.error,
      "error",

      {
        buttons: false,
        timer: 2000,
      }
    );
  }
};

// ? Get Single User Ends

// ? Get User Approve, Ban Start

export const getUserApprovedAction =
  (id, approveByAdmin) => async (dispatch) => {
    console.log(id);
    console.log(approveByAdmin);

    try {
      const response = await instance.put(`api/v1/admin/users/approval/${id}`, {
        approveByAdmin,
      });

      if (response.data.success === true) {
        console.log("User Approved Successfully", response);
        Swal.fire(
          `User ${approveByAdmin ? "Approved" : "Banned"} Successful`,
          response.data.message,
          "success",
          {
            buttons: false,
            timer: 2000,
          }
        );
        const retrnObj = { type: "userApproved", payload: response };
        console.log("userApproved", retrnObj);
        dispatch(retrnObj);
      }
    } catch (error) {
      console.log("error", error);
      Swal.fire(
        "error",
        error.response.data.error,
        "error",

        {
          buttons: false,
          timer: 2000,
        }
      );
    }
  };
// ? Get User Approve, Ban  Ends

// ? Get User Profile Update Starts
export const updateProfileActionByAdmin = (formData) => async (dispatch) => {
  console.log(formData);
  // let response = await instance
  // .put(`api/v1/me/update`, formData)
  // .then((response) => {
  //   console.log("updateProfileRes", response);
  //   if (response.data.success === true) {
  //     Swal.fire("Success", response.data.message, "success", {
  //       buttons: false,
  //       timer: 2000,
  //     });
  //   }

  //   const retrnObj = { type: "updateProfile", payload: response };
  //   console.log("ObjectReturnLogin", retrnObj);
  //   dispatch(retrnObj);
  //   localStorage.setItem("Id", response.data.user._id);
  // })
  // .catch((error) => {
  //   console.log("error", error.response.data.error);
  //   Swal.fire(
  //     "error",
  //     error.response.data.error,
  //     "error",

  //     {
  //       buttons: false,
  //       timer: 2000,
  //     }
  //   );
  // });
};
// ? Get User Profile Update Starts

// ! Manage Users End
