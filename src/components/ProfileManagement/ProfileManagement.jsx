import React, { useState, useRef } from "react";
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
import { useTheme } from "@mui/material/styles";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import styles from "../Profile/Profile.module.css";
import PreviewImage from "../PreviewImage/PreviewImage";
import avatarImg from "./placeholder.png";
import Icon from "./Pencil.svg";
import { useDispatch, useSelector } from "react-redux";
import { DocumentUpload, Edit } from "iconsax-react";

function ProfileManagement() {
  const userResData = useSelector((state) => state.getUserReducer);
  const avatarFileRef = useRef(null);

  let dispatch = useDispatch();
  const [disableTrue, setDisableTrue] = useState(true);
  const handleEdit = () => {
    setDisableTrue(!disableTrue);
  };
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
  return (
    <>
      <Box
        sx={{
          width: "100%",
          minHeight: { lg: "90vh", md: "90vh", sm: "90vh", xs: "120vh" },
          height: "auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: { lg: "90%", md: "80%", sm: "96%", xs: "96%" },
            minHeight: { lg: "83vh", md: "83vh", sm: "83vh", xs: "115vh" },
            height: "auto",
            pb: "20px",
            boxShadow: "5px 5px 15px #aaaaaa",
            borderRadius: "12px",
            backgroundColor: "white",
            display: "flex",
            flexDirection: "column",
            alignItems: { lg: "start", md: "start", sm: "start", xs: "center" },
            // justifyContent: "center",
          }}
        >
          <Box
            sx={{
              mt: "20px",
              pl: { lg: "50px", md: "70px", sm: "40px", xs: "20px" },
            }}
          >
            {/* userResData?.users?.data?.user */}

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
                        sx={{ height: "40px", width: "100%" }}
                        fullWidth
                        type='text'
                        margin='normal'
                        value={userResData?.users?.data?.user?.firstName}
                        // onChange={(e) => setFirstname(e.target.value)}
                      />
                    </Box>
                  </Grid>
                  <Grid item lg={6} md={6} sm={6} xs={12}>
                    <Box>
                      <InputLabel sx={{ mb: "10px", fontWeight: 400 }}>
                        Lastname
                      </InputLabel>
                      <OutlinedInput
                        sx={{ height: "40px", width: "100%" }}
                        fullWidth
                        type='text'
                        margin='normal'
                        value={userResData?.users?.data?.user?.lastName}
                        // onChange={(e) => setLastname(e.target.value)}
                      />
                    </Box>
                  </Grid>

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
                        // disabled={disableTrue}
                        sx={{ height: "40px", width: "100%" }}
                        fullWidth
                        type='email'
                        margin='normal'
                        value={userResData?.users?.data?.user?.emails[0].email}
                        // onChange={(e) => setEmail(e.target.value)}
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
                        Username
                      </InputLabel>
                      <OutlinedInput
                        // disabled={disableTrue}
                        sx={{ height: "40px", width: "100%" }}
                        fullWidth
                        type='email'
                        margin='normal'
                        value={userResData?.users?.data?.user?.userName}
                        // onChange={(e) => setEmail(e.target.value)}
                      />
                    </Box>
                  </Grid> */}
                  <Grid item lg={6} md={6} sm={6} xs={12}>
                    <Box>
                      <Box>
                        <InputLabel sx={{ fontWeight: 400, mb: "10px" }}>
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
                              {showPassword ? (
                                <VisibilityOff />
                              ) : (
                                <Visibility />
                              )}
                            </IconButton>
                          </InputAdornment>
                        }
                        value='475686'
                        margin='normal'
                        // onChange={(e) => setPassword(e.target.value)}
                      />
                    </Box>
                  </Grid>
                  {/* <Grid item lg={6} md={6} sm={6} xs={12}>
                    <Box>
                      <Box>
                        <InputLabel sx={{ fontWeight: 400, mb: "10px" }}>
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
                              {showPassword ? (
                                <VisibilityOff />
                              ) : (
                                <Visibility />
                              )}
                            </IconButton>
                          </InputAdornment>
                        }
                        value={userResData?.users?.data?.user}
                        margin='normal'
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </Box>
                  </Grid> */}
                  <Grid item lg={6} md={6} sm={6} xs={12}>
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
                        // value={pin}
                        margin='normal'
                        // onChange={(e) => setPin(e.target.value)}
                      />
                    </Box>
                  </Grid>
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
                    // endIcon={<DocumentUpload />}
                    sx={{
                      textTransform: "capitalize",
                    }}
                    // onClick={() => updateProfileFunc()}
                  >
                    Update Profile
                  </Button>
                  {/* <Button
                    onClick={handleEdit}
                    variant='contained'
                    endIcon={<Edit />}
                    sx={{
                      textTransform: "capitalize",
                      ml: "10px",
                    }}
                    // onClick={() => updateProfileFunc()}
                  >
                    Edit Profile
                  </Button> */}
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
    </>
  );
}

export default ProfileManagement;
