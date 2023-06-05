import { Box, Button, Typography, InputLabel, IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Checkbox from "@mui/material/Checkbox";
import bgImg from "./f18.png";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  forgetPasswordAction,
  forgetPasswordEmail,
  forgetPasswordEmailAction,
  loginAction,
} from "../../Redux/actions";
import loginReducer from "../../Redux/reducers/loginReducer";
import { getUserAction } from "../../Redux/actions";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const Login = () => {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  const [forgetPassword, setForgetPassword] = useState(true);

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const setForgetPasswordHandler = () => setForgetPassword(!forgetPassword);

  // !Forget Password Email Code Starts here
  const [forgetPasswordEmailValue, setForgetPasswordEmailValue] = useState("");

  const handleForgetPasswordEmail = () => {
    dispatch(forgetPasswordEmailAction(forgetPasswordEmailValue));
  };

  // !Forget Password Email Code Ends here

  // // !Forget Password Code Starts here
  // const [forgetPassword, setForgetPassword] = useState(true);
  // //For Backend
  // const [confirmPassword1, setConfirmPassword1] = useState("");
  // const [confirmPassword2, setConfirmPassword2] = useState("");

  // //For, Whether to show password or not
  // const [showConfirmPassword1, setShowConfirmPassword1] = useState(false);
  // const [showConfirmPassword2, setShowConfirmPassword2] = useState(false);
  // const handleClickShowPassword1 = () =>
  //   setShowConfirmPassword1(
  //     (setShowConfirmPassword2) => !setShowConfirmPassword2
  //   );
  // const handleClickShowPassword2 = () =>
  //   setShowConfirmPassword2(
  //     (setShowConfirmPassword2) => !setShowConfirmPassword2
  //   );

  // //whether to show the forget section or not
  // const setForgetPasswordHandler = () => setForgetPassword(!forgetPassword);

  // const handleForgetPassword = () => {
  //   dispatch(forgetPasswordAction(confirmPassword1, confirmPassword2));
  // };

  // // !Forget Password Code Ends here

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleLogin = () => {
    dispatch(loginAction(email, password));
    setTimeout(() => {
      dispatch(getUserAction());
      navigate();
    }, 1000);
  };

  const loginResData = useSelector((state) => state.loginReducer);

  console.log("This is Login details", loginResData);

  const userData = JSON.parse(localStorage.getItem("user"));
  console.log("Approve check", userData?.user.approveByAdmin);
  const userStatus = userData?.user.approveByAdmin;
  // console.log("This is user details", getUserData);
  // const userStatus = getUserData?.users?.data?.user.approveByAdmin;
  // console.log(userStatus);
  const loginCheck = localStorage.getItem("Id");
  useEffect(() => {
    //If user is logged in then login page will be unavailable
    if (loginCheck) {
      navigate("/dashboard");
    } else {
      navigate("/");
    }
    // if (loginCheck) {
    //   navigate("/dashboard");
    // }
    // if (loginResData?.users?.data?.success === true) {
    //   setTimeout(() => {
    //     navigate("/dashboard");
    //   }, 1000);
    // }
  }, [loginCheck]);

  const id = "27e931c486e93721bf7b5cde467a3e75dceea51b";
  return (
    <Box
      sx={{
        m: "0px",
        p: "0px",
        width: "100%",
        height: "100vh",
        backgroundImage: `url(${bgImg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        // overflowY: "scroll",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: { lg: "40%", md: "45%", sm: "96%", xs: "96%" },
            height: "auto",
            boxShadow: "5px 5px 15px #aaaaaa",
            borderRadius: "10px 50px",
            backgroundColor: "white",
          }}
        >
          <Box
            sx={{
              m: { lg: "70px", md: "70px", sm: "40px", xs: "20px" },
            }}
          >
            {forgetPassword ? (
              <>
                {/* //Login Box Starts from here */}
                <Box>
                  <Typography
                    sx={{ color: "#3c4257", fontSize: "26px", fontWeight: 600 }}
                  >
                    Sign in to your account
                  </Typography>
                </Box>
                <Box
                  sx={{
                    mt: "20px",
                  }}
                >
                  <InputLabel sx={{ mb: "10px", fontWeight: "bold" }}>
                    Email
                  </InputLabel>
                  <OutlinedInput
                    sx={{ height: "50px" }}
                    fullWidth
                    type='email'
                    margin='normal'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Box>
                <Box sx={{ mt: "20px" }}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                      mb: "10px",
                    }}
                  >
                    <Box>
                      <InputLabel sx={{ fontWeight: "bold" }}>
                        Password
                      </InputLabel>
                    </Box>
                    <Box>
                      <Button
                        variant='text'
                        onClick={setForgetPasswordHandler}
                        sx={{ textTransform: "capitalize" }}
                      >
                        Forgot your password?
                      </Button>
                    </Box>
                  </Box>
                  <OutlinedInput
                    sx={{ height: "50px" }}
                    fullWidth
                    type={showPassword ? "text" : "password"}
                    endAdornment={
                      <InputAdornment position='end'>
                        <IconButton
                          aria-label='toggle password visibility'
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge='end'
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    margin='normal'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    mt: "20px",
                  }}
                >
                  <Box>
                    <Checkbox {...label} />
                  </Box>
                  <Box>
                    <Typography variant='body2'>
                      Stay signed in for a week
                    </Typography>
                  </Box>
                </Box>
                <Box
                  sx={{
                    width: "100%",
                    mt: "20px",
                  }}
                >
                  <Button
                    variant='contained'
                    size='large'
                    sx={{ width: "100%", textTransform: "capitalize" }}
                    onClick={handleLogin}
                  >
                    Continue
                  </Button>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    mt: "30px",
                  }}
                >
                  <Box>
                    <Typography variant='body2'>
                      Don't have an account?
                    </Typography>
                  </Box>
                  <Box>
                    <Button
                      variant='text'
                      sx={{ textTransform: "capitalize" }}
                      onClick={() => navigate("/register")}
                    >
                      Sign up
                    </Button>
                  </Box>
                </Box>
                {/* //Login Box Ends from here */}
              </>
            ) : (
              <>
                <Box>
                  <Typography
                    sx={{ color: "#3c4257", fontSize: "26px", fontWeight: 600 }}
                  >
                    Forget Password
                  </Typography>
                </Box>
                <Box
                  sx={{
                    mt: "20px",
                  }}
                >
                  <InputLabel sx={{ mb: "10px", fontWeight: "bold" }}>
                    Email
                  </InputLabel>
                  <OutlinedInput
                    sx={{ height: "50px" }}
                    fullWidth
                    type='email'
                    margin='normal'
                    value={forgetPasswordEmailValue}
                    onChange={(e) =>
                      setForgetPasswordEmailValue(e.target.value)
                    }
                  />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "flex-end",
                    justifyContent: "end",
                    mt: 1,
                  }}
                >
                  <Button
                    variant='text'
                    sx={{ textTransform: "capitalize" }}
                    onClick={setForgetPasswordHandler}
                  >
                    Sign In
                  </Button>
                </Box>
                <Box
                  sx={{
                    width: "100%",
                    mt: "20px",
                  }}
                >
                  <Button
                    variant='contained'
                    size='large'
                    sx={{ width: "100%", textTransform: "capitalize" }}
                    onClick={handleForgetPasswordEmail}
                  >
                    Continue
                  </Button>
                </Box>
              </>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
