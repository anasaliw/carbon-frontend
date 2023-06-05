import {
  Box,
  Button,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Typography,
} from "@mui/material";
import React, { useState, useRef } from "react";
import styles from "./Profile.module.css";
import PreviewImage from "../PreviewImage/PreviewImage";
import avatarImg from "./placeholder.png";
import Icon from "./Pencil.svg";
import { DocumentUpload } from "iconsax-react";
import { useTheme } from "@mui/material/styles";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useDispatch } from "react-redux";
import { updateEmailAction } from "../../Redux/actions";
import { updateProfileAction } from "../../Redux/actions";
import { getUserAction } from "../../Redux/actions";

const Profile = () => {
  const avatarFileRef = useRef(null);

  let dispatch = useDispatch();

  const [values, setFieldValue] = useState("");
  let theme = useTheme();
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastname] = useState("");
  const [pin, setPin] = useState("");

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const updateEmailFunc = () => {
    // dispatch(updateEmailAction(email));
  };

  const updateProfileFunc = () => {
    let formData = new FormData();
    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("avatar", avatar);
    formData.append("email", email);
    formData.append("password", password);
    setTimeout(() => {
      dispatch(updateProfileAction(formData));
      setTimeout(() => {
        dispatch(getUserAction());
      }, 1000);
    }, 500);
  };

  const handleUpdateProfile = () => {
    updateEmailFunc();
  };

  console.log("checkingImg", avatar);
  return (
    <Box>
      <Box
        sx={{
          width: "100%",
          height: { lg: "90vh", md: "90vh", sm: "90vh", xs: "120vh" },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: { lg: "90%", md: "80%", sm: "96%", xs: "96%" },
            height: { lg: "83vh", md: "83vh", sm: "83vh", xs: "115vh" },
            // height: "auto",
            boxShadow: "5px 5px 15px #aaaaaa",
            borderRadius: "12px",
            backgroundColor: "white",
            display: "flex",
            flexDirection: "column",
            alignItems: { lg: "start", md: "start", sm: "start", xs: "center" },
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              mt: "20px",
              pl: { lg: "50px", md: "70px", sm: "40px", xs: "20px" },
            }}
          >
            <Typography
              sx={{
                color: "text.primary",
                fontWeight: 300,
                fontSize: "25px",
              }}
            >
              Update Profile
            </Typography>
          </Box>
          <Box
            sx={{
              p: { lg: "50px", md: "70px", sm: "40px", xs: "20px" },
              width: "100%",
            }}
          >
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: {
                  lg: "row",
                  md: "row",
                  sm: "row",
                  xs: "column-reverse",
                },
                justifyContent: {
                  lg: "space-between",
                  md: "space-between",
                  sm: "space-between",
                  xs: "center",
                },
                alignItems: "start",
                // p: "50px",
              }}
            >
              <Box sx={{ width: "100%" }}>
                <Grid container spacing={2}>
                  <Grid item lg={6} md={6} sm={6} xs={12}>
                    <Box>
                      <InputLabel sx={{ mb: "10px", fontWeight: 400 }}>
                        Firstname
                      </InputLabel>
                      <OutlinedInput
                        sx={{ height: "35px", width: "100%" }}
                        fullWidth
                        type='text'
                        margin='normal'
                        value={firstName}
                        onChange={(e) => setFirstname(e.target.value)}
                      />
                    </Box>
                  </Grid>
                  <Grid item lg={6} md={6} sm={6} xs={12}>
                    <Box>
                      <InputLabel sx={{ mb: "10px", fontWeight: 400 }}>
                        Lastname
                      </InputLabel>
                      <OutlinedInput
                        sx={{ height: "35px", width: "100%" }}
                        fullWidth
                        type='text'
                        margin='normal'
                        value={lastName}
                        onChange={(e) => setLastname(e.target.value)}
                      />
                    </Box>
                  </Grid>
                  {/* <Grid item lg={6} md={6} sm={6} xs={12}>
                    <Box
                    // sx={{
                    //   mt: "10px",
                    // }}
                    >
                      <InputLabel sx={{ mb: "10px", fontWeight: 400 }}>
                        Name
                      </InputLabel>
                      <OutlinedInput
                        sx={{ height: "40px", width: "100%" }}
                        fullWidth
                        type='text'
                        margin='normal'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </Box>
                  </Grid> */}
                  <Grid item lg={6} md={6} sm={6} xs={12}>
                    <Box
                    // sx={{
                    //   mt: "10px",
                    // }}
                    >
                      <InputLabel sx={{ mb: "10px", fontWeight: 400 }}>
                        Email
                      </InputLabel>
                      <OutlinedInput
                        sx={{ height: "35px", width: "100%" }}
                        fullWidth
                        type='email'
                        margin='normal'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </Box>
                  </Grid>
                  <Grid item lg={6} md={6} sm={6} xs={12}>
                    <Box>
                      <Box>
                        <InputLabel sx={{ fontWeight: 400, mb: "10px" }}>
                          Password
                        </InputLabel>
                      </Box>
                      <OutlinedInput
                        sx={{ height: "35px" }}
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
                              {showPassword ? (
                                <VisibilityOff />
                              ) : (
                                <Visibility />
                              )}
                            </IconButton>
                          </InputAdornment>
                        }
                        value={password}
                        margin='normal'
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </Box>
                  </Grid>
                  {/* <Grid item lg={6} md={6} sm={6} xs={12}>
                    <Box>
                      <Box>
                        <InputLabel sx={{ fontWeight: 400, mb: "10px" }}>
                          Pin
                        </InputLabel>
                      </Box>
                      <OutlinedInput
                        sx={{ height: "40px" }}
                        fullWidth
                        type='number'
                        value={pin}
                        margin='normal'
                        onChange={(e) => setPin(e.target.value)}
                      />
                    </Box>
                  </Grid> */}
                </Grid>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    mt: "40px",
                  }}
                >
                  <Button
                    variant='contained'
                    endIcon={<DocumentUpload />}
                    sx={{
                      textTransform: "capitalize",
                      height: "30px",
                    }}
                    onClick={() => updateProfileFunc()}
                  >
                    Update Profile
                  </Button>
                </Box>
              </Box>
              <Box
                sx={{
                  width: { lg: "35%", md: "35%", sm: "35%", xs: "100%" },
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <Box className={styles.avatarImgWrapper}>
                  {avatar ? (
                    <PreviewImage
                      file={avatar}
                      alt='avatar_img'
                      className={styles.Img}
                    />
                  ) : (
                    <img
                      src={avatarImg}
                      alt='avatar_img'
                      className={styles.Img}
                    />
                  )}
                  <Box className={styles.pencilIconWrapper}>
                    <input
                      ref={avatarFileRef}
                      hidden
                      type='file'
                      accept='image/*'
                      onChange={(e) => {
                        setAvatar(e.target.files[0]);
                      }}
                    />
                    <img
                      src={Icon}
                      alt='cant load image'
                      onClick={() => avatarFileRef.current.click()}
                      className={styles.Img2}
                    />
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Profile;
