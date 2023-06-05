import React, { useState, useEffect } from "react";
import { Box, Button, Typography, InputLabel, IconButton } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import bgImg from "../Login/f18.png";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  forgetPasswordAction,
  forgetPasswordEmail,
  forgetPasswordEmailAction,
  loginAction,
} from "../../Redux/actions";
import loginReducer from "../../Redux/reducers/loginReducer";
import { getUserAction } from "../../Redux/actions";
import forgetPasswordReducer from "../../Redux/reducers/forgetPasswordReducer";

function ForgetPassword() {
  let navigate = useNavigate();
  let selector = useSelector();
  const { token } = useParams();
  let dispatch = useDispatch();
  const [passwordMatch, setPasswordMatch] = useState(false);

  // !Forget Password Code Starts here
  const [forgetPassword, setForgetPassword] = useState(true);
  //For Backend
  const [confirmPassword1, setConfirmPassword1] = useState("");
  const [confirmPassword2, setConfirmPassword2] = useState("");

  //For, Whether to show password or not
  const [showConfirmPassword1, setShowConfirmPassword1] = useState(false);
  const [showConfirmPassword2, setShowConfirmPassword2] = useState(false);
  const handleClickShowPassword1 = () =>
    setShowConfirmPassword1(
      (setShowConfirmPassword2) => !setShowConfirmPassword2
    );
  const handleClickShowPassword2 = () =>
    setShowConfirmPassword2(
      (setShowConfirmPassword2) => !setShowConfirmPassword2
    );

  //whether to show the forget section or not
  const setForgetPasswordHandler = () => setForgetPassword(!forgetPassword);

  // !Forget Password Code Ends here

  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleForgetPassword = async () => {
    if (confirmPassword1 === confirmPassword2) {
      setPasswordMatch(false);
      const response = await dispatch(
        forgetPasswordAction(confirmPassword1, confirmPassword2, token)
      );
      // const forgetPasswordRes = useSelector(
      //   (state) => state.forgetPasswordReducer
      // );
      // console.log("navigate to sign in", forgetPasswordRes.user);
    } else {
      setPasswordMatch(true);
      console.log("confirm password doest not match");
    }
  };
  return (
    <>
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
              <Box>
                <Typography
                  sx={{ color: "#3c4257", fontSize: "26px", fontWeight: 600 }}
                >
                  Forget Password
                </Typography>
              </Box>
              <Box sx={{ mt: "20px" }}>
                <Box>
                  <InputLabel sx={{ fontWeight: "bold", mb: "10px" }}>
                    Password
                  </InputLabel>
                </Box>
                <OutlinedInput
                  sx={{ height: "50px" }}
                  fullWidth
                  type={showConfirmPassword1 ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position='end'>
                      <IconButton
                        aria-label='toggle password visibility'
                        onClick={handleClickShowPassword1}
                        onMouseDown={handleMouseDownPassword}
                        edge='end'
                      >
                        {showConfirmPassword1 ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                  margin='normal'
                  value={confirmPassword1}
                  onChange={(e) => setConfirmPassword1(e.target.value)}
                />
              </Box>
              <Box sx={{ mt: "20px" }}>
                <Box>
                  <InputLabel sx={{ fontWeight: "bold", mb: "10px" }}>
                    Confirm Password
                  </InputLabel>
                </Box>
                <OutlinedInput
                  sx={{ height: "50px" }}
                  fullWidth
                  type={showConfirmPassword2 ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position='end'>
                      <IconButton
                        aria-label='toggle password visibility'
                        onClick={handleClickShowPassword2}
                        onMouseDown={handleMouseDownPassword}
                        edge='end'
                      >
                        {showConfirmPassword2 ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                  margin='normal'
                  value={confirmPassword2}
                  onChange={(e) => setConfirmPassword2(e.target.value)}
                />
              </Box>
              {passwordMatch ? (
                <Typography sx={{ fontSize: "12px", color: "red", mt: 1 }}>
                  Confirm password does not match
                </Typography>
              ) : (
                ""
              )}

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
                  onClick={handleForgetPassword}
                >
                  Continue
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default ForgetPassword;
