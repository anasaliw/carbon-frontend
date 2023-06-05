import { Box, Button, styled, Typography } from "@mui/material";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getAllUsersAction, getUserApprovedAction } from "../../Redux/actions";
import getAllUserReducer from "../../Redux/reducers/getAllUsers";
import VisibilityIcon from "@mui/icons-material/Visibility";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Edit, Eye } from "iconsax-react";
import { Delete, Publish, Visibility } from "@mui/icons-material";

const ParentBox = styled(Box)`
  height: 100px;
  width: 100%;
  box-shadow: 5px 5px 15px #aaaaaa;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LightTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: "rgba(0, 0, 0, 0.87)",
    boxShadow: theme.shadows[1],
    fontSize: 11,
    minWidth: 110,
  },
}));
const CustomWidthTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))({
  [`& .${tooltipClasses.tooltip}`]: {
    maxWidth: 500,
  },
});

function AllUser() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [approvedByAdmin, setApprovedByAdmin] = useState(true);
  const [banByAdmin, setBanByAdmin] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [role, setRole] = useState("");
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleMenuClick = (e, index) => {
    setAnchorEl(e.currentTarget);
    console.log(index);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    dispatch(getAllUsersAction());
  }, []);

  const data = useSelector((state) => state.getAllUserReducer);
  console.log(data);
  const userData = data?.users?.data?.users;
  const handleApprove = (id) => {
    console.log("handleApprove");

    console.log(id);
    setTimeout(() => {
      console.log("timeout");
      console.log(approvedByAdmin);
      dispatch(getUserApprovedAction(id, approvedByAdmin));
    }, 1000);
  };
  const handleBan = (id) => {
    console.log("handleApprove");

    console.log(id);
    setTimeout(() => {
      console.log("timeout");
      console.log(banByAdmin);
      dispatch(getUserApprovedAction(id, banByAdmin));
    }, 1000);
  };

  return (
    <>
      <Box sx={{ p: "20px" }}>
        {data.loading ? (
          "loading..."
        ) : (
          <>
            <Box
              sx={{
                width: "100%",
                minHeight: {
                  lg: "90vh",
                  md: "90vh",
                  sm: "90vh",
                  xs: "120vh",
                },
                height: "auto",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  width: { lg: "90%", md: "98%", sm: "98%", xs: "98%" },
                  minHeight: {
                    lg: "83vh",
                    md: "83vh",
                    sm: "83vh",
                    xs: "115vh",
                  },
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
                  paddingRight: "20px",
                  // justifyContent: "center",
                }}
              >
                <Box
                  sx={{
                    mt: "20px",
                    pl: { lg: "50px", md: "70px", sm: "40px", xs: "20px" },
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                    alignItems: "center",
                    textAlign: "center",
                  }}
                >
                  <Typography
                    sx={{
                      color: "text.primary",
                      fontWeight: 300,
                      fontSize: "20px",
                    }}
                  >
                    All Users
                  </Typography>
                </Box>

                <Box
                  sx={{
                    width: "100%",
                    mt: "20px",
                    pl: { lg: "50px", md: "40px", sm: "20px", xs: "10px" },
                    pr: { lg: "36px", md: "30px", sm: "10px", xs: "5px" },
                  }}
                >
                  <TableContainer
                    component={Paper}
                    sx={{ width: "100%", boxShadow: "none !important" }}
                  >
                    <Table sx={{ minWidth: 650 }} aria-label='simple table'>
                      <TableHead sx={{ backgroundColor: "#F6F7FB" }}>
                        <TableRow>
                          <TableCell
                            sx={{
                              color: "rgb(137, 138, 154)",
                              fonSize: "12px",
                              fontWeight: 600,
                            }}
                            align='center'
                          >
                            First Name
                          </TableCell>
                          <TableCell
                            sx={{
                              color: "rgb(137, 138, 154)",
                              fonSize: "12px",
                              fontWeight: 600,
                            }}
                            align='center'
                          >
                            Last Name
                          </TableCell>
                          <TableCell
                            sx={{
                              color: "rgb(137, 138, 154)",
                              fonSize: "12px",
                              fontWeight: 600,
                            }}
                            align='center'
                          >
                            Email
                          </TableCell>
                          {/* <TableCell
                            sx={{
                              color: "rgb(137, 138, 154)",
                              fonSize: "12px",
                              fontWeight: 600,
                            }}
                            align='center'
                          >
                            Verified
                          </TableCell> */}
                          <TableCell align='center'></TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {userData.map((row, index) => (
                          <TableRow
                            key={index}
                            sx={{
                              "&:last-child td, &:last-child th": {
                                border: 0,
                              },
                              "&:hover": {
                                backgroundColor: "#F6F7FB",
                              },
                            }}
                          >
                            <TableCell
                              align='center'
                              sx={{ fontSize: "12px" }}
                              component='th'
                              scope='row'
                            >
                              {row?.firstName}
                            </TableCell>
                            <TableCell sx={{ fontSize: "12px" }} align='center'>
                              {row?.lastName}
                            </TableCell>
                            <TableCell sx={{ fontSize: "12px" }} align='center'>
                              {row?.emails[0].email}
                            </TableCell>
                            {/* <TableCell sx={{ fontSize: "12px" }} align='center'>
                              {row.approveByAdmin === true ? "True" : "False"}
                            </TableCell> */}

                            <TableCell align='right'>
                              <LightTooltip
                                placement='bottom-end'
                                sx={{ minWidth: 20 }}
                                // paperProps={{
                                //   backgroundColor: "white",
                                // }}
                                title={
                                  <>
                                    <Box>
                                      <Box
                                        onClick={() =>
                                          navigate(`singleUser/${row._id}`)
                                        }
                                        sx={{
                                          padding: "4px 5px",
                                          display: "flex",
                                          cursor: "pointer",
                                          alignItems: "center",
                                          "&:hover": {
                                            borderLeft: "4px solid blue",
                                            borderRight: "4px solid blue",
                                          },
                                        }}
                                      >
                                        <Typography
                                          sx={{
                                            padding: "0 5px",
                                            fontSize: "12px",
                                            cursor: "pointer",
                                          }}
                                        >
                                          View
                                        </Typography>
                                      </Box>
                                      <Box
                                        onClick={() => handleApprove(row._id)}
                                        sx={{
                                          padding: "4px 5px",
                                          display: "flex",
                                          alignItems: "center",
                                          cursor: "pointer",
                                          "&:hover": {
                                            borderLeft: "4px solid blue",
                                            borderRight: "4px solid blue",
                                          },
                                        }}
                                      >
                                        <Typography
                                          sx={{
                                            padding: "0 5px",
                                            fontSize: "12px",
                                            cursor: "pointer",
                                          }}
                                        >
                                          Approve
                                        </Typography>
                                      </Box>
                                      <Box
                                        sx={{
                                          padding: "4px 5px",
                                          display: "flex",
                                          alignItems: "center",
                                          cursor: "pointer",
                                          "&:hover": {
                                            borderLeft: "4px solid green",
                                            borderRight: "4px solid green",
                                          },
                                        }}
                                        onClick={() => handleApprove(row._id)}
                                      >
                                        <Typography
                                          sx={{
                                            padding: "0 5px",
                                            fontSize: "12px",
                                            cursor: "pointer",
                                          }}
                                        >
                                          UnBan
                                        </Typography>
                                      </Box>
                                      <Box
                                        sx={{
                                          padding: "4px 5px",
                                          display: "flex",
                                          alignItems: "center",
                                          cursor: "pointer",
                                          "&:hover": {
                                            borderLeft: "4px solid red",
                                            borderRight: "4px solid red",
                                          },
                                        }}
                                        onClick={() => handleBan(row._id)}
                                      >
                                        <Typography
                                          sx={{
                                            padding: "0 5px",
                                            fontSize: "12px",
                                          }}
                                        >
                                          Ban
                                        </Typography>
                                      </Box>
                                    </Box>
                                  </>
                                }
                              >
                                <Box
                                  sx={{
                                    border: "1px solid rgb(137, 138, 154)",
                                    height: "30px",
                                    width: "30px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    cursor: "pointer",
                                  }}
                                  onClick={handleMenuClick}
                                >
                                  <MoreHorizIcon
                                    sx={{ fontSize: "16px", p: 0 }}
                                  />
                                </Box>
                              </LightTooltip>

                              {/* <Tooltip disableFocusListener enterTouchDelay={} title='Add'>
                                <Button>Hover or touch</Button>
                              </Tooltip> */}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Box>
              </Box>
            </Box>

            {/* <Menu
              anchorEl={anchorEl}
              id='account-menu'
              open={open}
              onClose={handleClose}
              onClick={handleClose}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: "visible",
                  filter: "drop-shadow(0px 2px 2px rgba(116, 116, 116, 0.32))",
                  mt: 1.8,
                  minHeight: 10,
                  border: "none",
                },
              }}
              transformOrigin={{
                horizontal: "right",
                vertical: "top",
              }}
              anchorOrigin={{
                horizontal: "left",
                vertical: "bottom",
              }}
            >
              <MenuItem
                sx={{
                  "&:hover": {
                    borderLeft: "4px solid blue",
                    borderRight: "4px solid blue",
                  },
                }}
                // onClick={() => navigate(`/singleUser/${641e857b1c369f7731263f42}`)}
                onClick={() => navigate(`/singleUser/641e857b1c369f7731263f42`)}
              >
                <Box
                  sx={{
                    padding: "0px 5px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Typography sx={{ padding: "0 5px", fontSize: "12px" }}>
                    View
                  </Typography>
                </Box>
              </MenuItem>
              <MenuItem
                sx={{
                  "&:hover": {
                    borderLeft: "4px solid blue",
                    borderRight: "4px solid blue",
                  },
                }}
              >
                <Box
                  sx={{
                    padding: "0px 5px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Typography sx={{ padding: "0 5px", fontSize: "12px" }}>
                    Approve
                  </Typography>
                </Box>
              </MenuItem>

              <MenuItem
                sx={{
                  "&:hover": {
                    borderLeft: "4px solid green",
                    borderRight: "4px solid green",
                  },
                }}
              >
                <Box
                  sx={{
                    padding: "0px 5px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Typography sx={{ padding: "0 5px", fontSize: "12px" }}>
                    Unregister
                  </Typography>
                </Box>
              </MenuItem>
              <MenuItem
                sx={{
                  "&:hover": {
                    borderLeft: "4px solid red",
                    borderRight: "4px solid red",
                  },
                }}
              >
                <Box
                  sx={{
                    padding: "0px 5px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Typography sx={{ padding: "0 5px", fontSize: "12px" }}>
                    Ban
                  </Typography>
                </Box>
              </MenuItem>
            </Menu> */}
          </>
        )}
      </Box>
    </>
  );
}

export default AllUser;
