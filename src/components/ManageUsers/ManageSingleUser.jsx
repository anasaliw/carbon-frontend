import {
  Box,
  Button,
  Grid,
  IconButton,
  InputLabel,
  OutlinedInput,
  Tooltip,
  Typography,
  Select,
  MenuItem,
  InputAdornment,
} from "@mui/material";
import axios from "axios";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import React, { useState, useRef } from "react";
import { useTheme } from "@mui/material/styles";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLoaderData, useParams } from "react-router-dom";
import {
  getSingleUserAction,
  updateProfileActionByAdmin,
} from "../../Redux/actions";
// import { getAllUsersAction } from "../../Redux/actions";
import styles from "../Profile/Profile.module.css";
import PreviewImage from "../PreviewImage/PreviewImage";
import avatarImg from "./placeholder.png";
import Icon from "./Pencil.svg";
import getSingleUserReducer from "../../Redux/reducers/getSingleUser";
import { DocumentUpload, Edit } from "iconsax-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBan,
  faCoffee,
  faRegistered,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import {
  faYoutube,
  faDiscord,
  faUniregistry,
} from "@fortawesome/free-brands-svg-icons";
import NotInterestedIcon from "@mui/icons-material/NotInterested";

function ManageSingleUser() {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    role: "",
  };
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const dispatch = useDispatch();
  const [firstName, setFirstname] = useState();
  const [userValues, setUserValues] = useState(initialValues);
  const [lastName, setLastname] = useState();
  const [email, setEmail] = useState();
  const [username, setUsername] = useState();
  const [role, setRole] = React.useState("");
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setRole(event.target.value);
    console.log(role);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const { id } = useParams();
  console.log("id", id);
  const data = useSelector((state) => state.getSingleUserReducer);
  console.log("single data", data);
  const userData = data?.users?.data?.user;
  const getUser = async () => {
    try {
      const response = await axios.get(
        `https://modern-blue-hippo.cyclic.app/api/v1/admin/users/${id}`
      );
      console.log("get user", response?.user?.data?.user);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
    dispatch(getSingleUserAction(id));

    // setTimeout(() => {
    //   setFirstname(userData?.firstName);
    //   setLastname(userData?.lastName);
    //   setEmail(userData?.emails[0].email);
    //   setUsername(userData?.username);
    // }, 3000);
  }, []);
  console.log("User Values", firstName);
  const avatarFileRef = useRef(null);

  const [disableTrue, setDisableTrue] = useState(true);
  const handleEdit = () => {
    setDisableTrue(!disableTrue);
  };

  const [values, setFieldValue] = useState("");
  let theme = useTheme();
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState("");

  const [pin, setPin] = useState("");

  //   setName(userData?.users?.data?.user?.firstName);
  console.log(userData);
  const updateProfileFunc = () => {
    let formData = new FormData();
    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("avatar", avatar);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("role", role);
    setTimeout(() => {
      dispatch(updateProfileActionByAdmin(formData));
    }, 500);
  };

  return (
    <>
      {data.loading ? (
        "Loading"
      ) : (
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
              width: { lg: "90%", md: "90%", sm: "96%", xs: "96%" },
              minHeight: { lg: "83vh", md: "83vh", sm: "83vh", xs: "115vh" },
              height: "auto",
              pb: "20px",
              boxShadow: "5px 5px 15px #aaaaaa",
              borderRadius: "12px",
              backgroundColor: "white",
              display: "flex",
              flexDirection: "column",
              alignItems: {
                lg: "start",
                md: "start",
                sm: "start",
                xs: "center",
              },
              paddingRight: "40px",
              // justifyContent: "center",
            }}
          >
            <Box
              sx={{
                mt: "20px",
                p: { lg: "20px", md: "20px", sm: "20px", xs: "10px" },
                width: "100%",
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                //   alignItems: "center",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  mt: 5,
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
                          name='firstName'
                          // disabled={disableTrue}
                          sx={{ height: "40px", width: "100%" }}
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
                          name='lastName'
                          // disabled={disableTrue}
                          sx={{ height: "40px", width: "100%" }}
                          fullWidth
                          type='text'
                          margin='normal'
                          value={lastName}
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
                          // disabled
                          sx={{ height: "40px", width: "100%" }}
                          fullWidth
                          type='email'
                          name='email'
                          margin='normal'
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
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
                        Password
                      </InputLabel>
                      <OutlinedInput
                        // disabled={disableTrue}
                        sx={{ height: "40px", width: "100%" }}
                        fullWidth
                        type='password'
                        margin='normal'
                        value='i89809798'
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
                          name='password'
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
                          value={password}
                          margin='normal'
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </Box>
                    </Grid>
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
                          value={pin}
                          margin='normal'
                          onChange={(e) => setPin(e.target.value)}
                        />
                      </Box>
                    </Grid>
                    <Grid
                      item
                      lg={6}
                      md={6}
                      sm={6}
                      xs={12}
                      sx={{
                        p: 0,
                        marginTop: "auto",
                      }}
                    >
                      <Box>
                        {/* <FormLabel id='demo-row-radio-buttons-group-label'>
                          Role
                        </FormLabel>
                        <RadioGroup
                          row
                          aria-labelledby='demo-row-radio-buttons-group-label'
                          name='row-radio-buttons-group'
                        >
                          <FormControlLabel
                            value='female'
                            control={<Radio />}
                            label='user'
                          />
                          <FormControlLabel
                            value='male'
                            control={<Radio />}
                            label='admin'
                          />
                        </RadioGroup> */}
                        <InputLabel
                          id='demo-controlled-open-select-label'
                          sx={{ fontWeight: 400, mb: "10px" }}
                        >
                          Role
                        </InputLabel>
                        <FormControl
                          fullWidth
                          sx={{
                            p: 0,
                          }}
                        >
                          <Select
                            labelId='demo-controlled-open-select-label'
                            id='demo-controlled-open-select'
                            open={open}
                            onClose={handleClose}
                            onOpen={handleOpen}
                            value={role}
                            name='role'
                            // label='Role'
                            onChange={handleChange}
                            sx={{ height: "40px" }}
                          >
                            <MenuItem value=''>
                              <em>None</em>
                            </MenuItem>
                            <MenuItem value={"viewOnly"}>View Only</MenuItem>
                            <MenuItem value={"accounting"}>Accounting</MenuItem>
                            <MenuItem value={"trader"}>Trader</MenuItem>
                            <MenuItem value={"controller"}>Controller</MenuItem>
                            <MenuItem value={"superUser"}>Super User</MenuItem>
                          </Select>
                        </FormControl>
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
                      // pl: "10px",
                    }}
                  >
                    <Button
                      variant='contained'
                      // endIcon={
                      //   <DocumentUpload sx={{ height: "12px", width: "12px" }} />
                      // }
                      sx={{
                        height: "30px",
                        fontSize: "12px",
                        textTransform: "capitalize",
                      }}
                      onClick={() => updateProfileFunc()}
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
                    flexDirection: "column",
                    justifyContent: "center",
                    // alignItems: "center",
                    ml: 2,
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
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                      <Tooltip
                        title={
                          <Typography sx={{ fontSize: "10px" }}>
                            Approve
                          </Typography>
                        }
                      >
                        <IconButton
                          sx={{
                            // p: 0,
                            fontSize: "16px",

                            color: "#6e6e6e",
                            "&:hover": {
                              backgroundColor: "transparent",
                              color: "blue",
                            },
                          }}
                        >
                          <FontAwesomeIcon
                            icon={faThumbsUp}
                            // style={{ color: "#6e6e6e" }}
                          />
                        </IconButton>
                      </Tooltip>
                      <Tooltip
                        title={
                          <Typography sx={{ fontSize: "10px" }}>
                            Unregistered
                          </Typography>
                        }
                      >
                        <IconButton
                          sx={{
                            fontSize: "16px",

                            color: "#6e6e6e",
                            "&:hover": {
                              backgroundColor: "transparent",
                              color: "blue",
                            },
                          }}
                        >
                          <FontAwesomeIcon
                            icon={faUniregistry}
                            // style={{ color: "#6e6e6e" }}
                          />
                        </IconButton>
                      </Tooltip>
                      <Tooltip
                        title={
                          <Typography sx={{ fontSize: "10px" }}>Ban</Typography>
                        }
                      >
                        <IconButton
                          sx={{
                            fontSize: "16px",
                            color: "#6e6e6e",
                            "&:hover": {
                              backgroundColor: "transparent",
                              color: "blue",
                            },
                          }}
                        >
                          <FontAwesomeIcon
                            icon={faBan}
                            // style={{ color: "#6e6e6e" }}
                          />
                        </IconButton>
                      </Tooltip>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
}

export default ManageSingleUser;
