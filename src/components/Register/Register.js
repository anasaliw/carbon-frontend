import { Box, Button, Typography, InputLabel, IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Checkbox from "@mui/material/Checkbox";
import bgImg from "../Login/f18.png";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerAction } from "../../Redux/actions";
import registerReducer from "../../Redux/reducers/registerReducer";
import { validateOtpAction } from "../../Redux/actions";
import validateOtpReducer from "../../Redux/reducers/validateOtpReducer";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const Register = () => {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleRegister = () => {
    dispatch(registerAction(firstName, lastName, email, password));
  };

  const handleValidateOtp = () => {
    dispatch(validateOtpAction(email, otp));
  };

  const registerData = useSelector((state) => state.registerReducer);
  const validateOtpRes = useSelector((state) => state.validateOtpReducer);
  console.log("Otp res", validateOtpRes);
  console.log("this is reg", registerData);
  console.log(email);

  useEffect(() => {
    //If user is logged in then login page will be unavailable
    if (localStorage.getItem("Id")) {
      navigate("/dashboard");
    }

    if (validateOtpRes?.users?.data?.success === true) {
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
  }, [validateOtpRes]);

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
              m: { lg: "50px", md: "50px", sm: "30px", xs: "20px" },
            }}
          >
            <Box>
              {registerData?.users?.data?.success ? (
                <Typography
                  sx={{ color: "#3c4257", fontSize: "25px", fontWeight: 600 }}
                >
                  Register yourself by
                  <span style={{ color: "#635bff" }}> Verifying OTP</span>
                </Typography>
              ) : (
                <Typography
                  sx={{ color: "#3c4257", fontSize: "26px", fontWeight: 600 }}
                >
                  Register your account
                </Typography>
              )}
            </Box>

            {registerData?.users?.data?.success ? (
              <Box>
                <Box
                  sx={{
                    mt: "20px",
                  }}
                >
                  <InputLabel sx={{ mb: "10px", fontWeight: "bold" }}>
                    Enter OTP
                  </InputLabel>
                  <OutlinedInput
                    sx={{ height: "40px" }}
                    fullWidth
                    type='text'
                    margin='normal'
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                  />
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
                    <Button
                      variant='contained'
                      sx={{ textTransform: "capitalize" }}
                      onClick={handleValidateOtp}
                    >
                      Verify OTP
                    </Button>
                  </Box>
                </Box>
              </Box>
            ) : (
              <>
                <Box
                  sx={{
                    mt: "20px",
                  }}
                >
                  <InputLabel sx={{ mb: "10px", fontWeight: "bold" }}>
                    Email
                  </InputLabel>
                  <OutlinedInput
                    sx={{ height: "40px" }}
                    fullWidth
                    type='email'
                    margin='normal'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Box>

                <Box
                  sx={{
                    mt: "20px",
                  }}
                >
                  <InputLabel sx={{ mb: "10px", fontWeight: "bold" }}>
                    First Name
                  </InputLabel>
                  <OutlinedInput
                    sx={{ height: "40px" }}
                    fullWidth
                    type='text'
                    margin='normal'
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </Box>
                <Box
                  sx={{
                    mt: "20px",
                  }}
                >
                  <InputLabel sx={{ mb: "10px", fontWeight: "bold" }}>
                    Last Name
                  </InputLabel>
                  <OutlinedInput
                    sx={{ height: "40px" }}
                    fullWidth
                    type='text'
                    margin='normal'
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </Box>
                {/* <Box
                  sx={{
                    mt: "20px",
                  }}
                >
                  <InputLabel sx={{ mb: "10px", fontWeight: "bold" }}>
                    Lastname
                  </InputLabel>
                  <OutlinedInput
                    sx={{ height: "40px" }}
                    fullWidth
                    type="text"
                    margin="normal"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </Box> */}
                <Box sx={{ mt: "20px" }}>
                  <Box>
                    <InputLabel sx={{ fontWeight: "bold", mb: "10px" }}>
                      Password
                    </InputLabel>
                  </Box>
                  <OutlinedInput
                    sx={{ height: "40px" }}
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
                    width: "100%",
                    mt: "20px",
                  }}
                >
                  <Button
                    variant='contained'
                    size='large'
                    sx={{ width: "100%", textTransform: "capitalize" }}
                    onClick={handleRegister}
                  >
                    Register
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
                      Already have an account?
                    </Typography>
                  </Box>
                  <Box>
                    <Button
                      variant='text'
                      sx={{ textTransform: "capitalize" }}
                      onClick={() => navigate("/")}
                    >
                      Sign In
                    </Button>
                  </Box>
                </Box>
              </>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Register;
