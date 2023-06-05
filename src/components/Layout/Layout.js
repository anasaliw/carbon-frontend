import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Avatar from "@mui/material/Avatar";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import "../../index.css";
import {
  Home2,
  Setting2,
  CardPos,
  TransactionMinus,
  Coin1,
  DollarCircle,
  Wallet,
  BuyCrypto,
  Profile,
} from "iconsax-react";
import logo from "./logo.jpg";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUserAction } from "../../Redux/actions";
import getUserReducer from "../../Redux/reducers/getUserReducer";
import { Link, useNavigate } from "react-router-dom";
import { logoutAction } from "../../Redux/actions";
import Badge from "@mui/material/Badge";
import Button from "@mui/material/Button";
import LogoutIcon from "@mui/icons-material/Logout";
// import logo1 from "../../../public/assets/images/logo.png";

const drawerWidth = 255;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    // padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  // padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -16,
    top: -3,
    padding: "5px",
  },
}));
const StyledText = styled("span")(({ theme }) => ({
  fontSize: "12px",
  // fontFamily: "Inter",
  fontWeight: 400,
}));

export default function Layout({ children }) {
  const theme = useTheme();
  let dispatch = useDispatch();

  let navigate = useNavigate();

  const loginResData = useSelector((state) => state.loginReducer);

  console.log("loginDataFromPanel", loginResData);
  const [open, setOpen] = React.useState(true);
  const collpseDrawer = () => {
    if (window.innerWidth <= 768) {
      setOpen(false);
    }
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const openMenu = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.removeItem("Id");
    localStorage.removeItem("authToken");
    dispatch(logoutAction());
    setAnchorEl(null);
    setTimeout(() => {
      navigate("/");
    }, 500);
  };

  useEffect(() => {
    collpseDrawer();
  }, []);

  useEffect(() => {
    let id = localStorage.getItem("Id");
    dispatch(getUserAction());
  }, []);

  const userResData = useSelector((state) => state.getUserReducer);

  console.log("this is UserData", userResData);
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  console.log("admin", userResData?.users?.data?.user?.role);
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        elevation={0}
        position='fixed'
        open={open}
        sx={{ backgroundColor: "black", color: "white" }}
      >
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            onClick={handleDrawerOpen}
            edge='start'
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box>
              <Typography variant='h6' noWrap component='div'>
                Dashboard
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  width: "100px",
                  height: "30px",
                  border: "2px solid #d8d8d8",
                  borderRadius: "5px",
                  mr: "10px",
                  backgroundColor: "#f6f7fb",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography sx={{ textAlign: "center", fontSize: "11px" }}>
                  {formatter.format(1000)} USD
                </Typography>
              </Box>
              <Box
                sx={{
                  cursor: "pointer",
                  mr: "10px",
                }}
                onClick={handleClick}
                onMouseOver={handleClick}
              >
                <Avatar
                  sx={{ height: "33px" }}
                  variant='rounded'
                  src='./assets/images/avatr.jpg'
                />
              </Box>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          background: "black",
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant='persistent'
        anchor='left'
        open={open}
      >
        <DrawerHeader
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              mt: "5px",
              mb: "5px",
              width: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={require("./logo.png")}
              // src={logo1}
              // src='https://res.cloudinary.com/learn2code/image/upload/v1664270968/favIcon_axui1g.png'
              width='75px'
            />
            <Typography
              sx={{ ml: "10px", fontWeight: "bold", fontSize: "20px" }}
            >
              Logo
            </Typography>
          </Box>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>

        <List>
          <ListItem sx={{ pb: 1.5, pt: 1.5 }}>
            <ListItemButton
              onClick={() => navigate("/dashboard")}
              sx={{
                pt: "0px",
                pb: "0px",
              }}
            >
              <ListItemIcon sx={{ minWidth: "45px" }}>
                <Home2 />
              </ListItemIcon>
              <StyledText>Dashboard</StyledText>
            </ListItemButton>
          </ListItem>

          <ListItem sx={{ pb: 1.5, pt: 1.5 }}>
            <ListItemButton
              sx={{
                pt: "0px",
                pb: "0px",
              }}
              onClick={() => navigate("/payment")}
            >
              <ListItemIcon sx={{ minWidth: "45px" }}>
                <CardPos />
              </ListItemIcon>
              <StyledText>Payment</StyledText>
            </ListItemButton>
          </ListItem>

          {userResData?.users?.data?.user?.role === "admin" && (
            <>
              <ListItem
                sx={{
                  pt: 0,
                }}
              >
                <ListItemButton
                  sx={{
                    pt: "0px",
                    pb: "0px",
                    "&:hover": {
                      backgroundColor: "white",
                    },
                  }}
                >
                  <Box sx={{ display: "flex" }}>
                    <ListItemIcon sx={{ minWidth: "45px", paddingTop: "12px" }}>
                      <ShoppingBasketIcon />
                    </ListItemIcon>
                    <Accordion
                      disableGutters
                      // paperProps={{ sx: { backgroundColor: "red" } }}
                      sx={{
                        boxShadow: "none",
                        width: "100%",
                        "&:hover": {
                          // backgroundColor: "#f5f5f5",
                        },
                        "&:before": {
                          display: "none",
                        },
                      }}
                    >
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls='panel1a-content'
                        id='panel1a-header'
                        sx={{
                          padding: "0px 0px",
                          marginRight: "-58px",
                          // "& .MuiAccordionSummary-root": {
                          //   padding: 0,
                          // },
                          "& .MuiAccordion-root	": {
                            "& .Mui-expanded ": {
                              margin: "0px",
                            },
                            "&.MuiPaper-root-MuiAccordion-root.Mui-expanded": {
                              margin: "0px",
                            },
                          },
                        }}
                      >
                        <StyledText>Basket</StyledText>
                      </AccordionSummary>
                      <AccordionDetails sx={{ p: 0 }}>
                        {/* <ListItem> */}
                        <ListItemButton
                          // component={Link}
                          onClick={() => navigate("/basket")}
                          sx={{
                            pt: "5px",
                            pb: "5px",
                          }}
                        >
                          <StyledText>Compose</StyledText>
                        </ListItemButton>
                        <ListItemButton
                          // component={Link}
                          onClick={() => navigate("/editBasket")}
                          sx={{
                            pt: "5px",
                            pb: "5px",
                          }}
                        >
                          <StyledText>Manage</StyledText>
                        </ListItemButton>
                      </AccordionDetails>
                    </Accordion>
                  </Box>
                </ListItemButton>
              </ListItem>
              <ListItem
                sx={{
                  pt: 0,
                }}
              >
                <ListItemButton
                  sx={{
                    pt: "0px",
                    pb: "0px",
                    "&:hover": {
                      backgroundColor: "white",
                    },
                  }}
                  // onClick={() => navigate("/basket")}
                >
                  <Box sx={{ display: "flex" }}>
                    <ListItemIcon sx={{ minWidth: "45px", paddingTop: "12px" }}>
                      <ManageAccountsIcon />
                    </ListItemIcon>
                    <Accordion
                      disableGutters
                      // paperProps={{ sx: { backgroundColor: "red" } }}
                      sx={{
                        boxShadow: "none",
                        width: "100%",
                        "&:hover": {
                          // backgroundColor: "#f5f5f5",
                        },
                        "&:before": {
                          display: "none",
                        },
                      }}
                    >
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls='panel1a-content'
                        id='panel1a-header'
                        sx={{
                          marginRight: "-36px",
                          padding: "0px 0px",
                          // "& .MuiAccordionSummary-root": {
                          //   padding: 0,
                          // },
                          "& .MuiAccordion-root	": {
                            "& .Mui-expanded ": {
                              margin: "0px",
                            },
                            "&.MuiPaper-root-MuiAccordion-root.Mui-expanded": {
                              margin: "0px",
                            },
                          },
                        }}
                      >
                        <StyledText>User</StyledText>
                      </AccordionSummary>
                      <AccordionDetails sx={{ p: 0 }}>
                        {/* <ListItem> */}
                        <ListItemButton
                          sx={{
                            pt: "5px",
                            pb: "5px",
                          }}
                          onClick={() => navigate("/EditUser")}
                        >
                          <StyledText>Add User</StyledText>
                        </ListItemButton>

                        <ListItemButton
                          sx={{
                            pt: "5px",
                            pb: "5px",
                          }}
                          onClick={() => navigate("/allUsers")}
                        >
                          <StyledText>Manage User</StyledText>
                        </ListItemButton>
                      </AccordionDetails>
                    </Accordion>
                  </Box>
                </ListItemButton>
              </ListItem>
            </>
          )}
          {userResData?.users?.data?.user?.role === "admin" && (
            <>
              <ListItem
                sx={{
                  pt: 0,
                }}
              >
                <ListItemButton
                  sx={{
                    pt: "0px",
                    pb: "0px",
                    "&:hover": {
                      backgroundColor: "white",
                    },
                  }}
                >
                  <Box sx={{ display: "flex" }}>
                    <ListItemIcon sx={{ minWidth: "45px", paddingTop: "12px" }}>
                      <AttachMoneyIcon />
                    </ListItemIcon>
                    <Accordion
                      disableGutters
                      // paperProps={{ sx: { backgroundColor: "red" } }}
                      sx={{
                        boxShadow: "none",
                        width: "100%",
                        "&:hover": {
                          // backgroundColor: "#f5f5f5",
                        },
                        "&:before": {
                          display: "none",
                        },
                      }}
                    >
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls='panel1a-content'
                        id='panel1a-header'
                        sx={{
                          padding: "0px 0px",
                          // marginRight: "-16px",
                          // "& .MuiAccordionSummary-root": {
                          //   padding: 0,
                          // },
                        }}
                      >
                        <StyledText>FIAT Management</StyledText>
                      </AccordionSummary>
                      <AccordionDetails sx={{ p: 0 }}>
                        {/* <ListItem> */}
                        <ListItemButton
                          sx={{
                            pt: "5px",
                            pb: "5px",
                          }}
                          onClick={() => navigate("/approveDeposit")}
                        >
                          <StyledText>Approve Deposit</StyledText>
                        </ListItemButton>
                        <ListItemButton
                          approveWithdrawFiat
                          onClick={() => navigate("/approveWithdrawFiat")}
                          sx={{
                            pt: "5px",
                            pb: "5px",
                          }}
                        >
                          <StyledText>Approve withdrawal</StyledText>
                        </ListItemButton>
                        <ListItemButton
                          sx={{
                            pt: "5px",
                            pb: "10px",
                          }}
                        >
                          <StyledText>Currency denomination</StyledText>
                        </ListItemButton>
                        <ListItemButton
                          sx={{
                            pt: "5px",
                            pb: "10px",
                          }}
                        >
                          <StyledText>Consolidate View</StyledText>
                        </ListItemButton>
                        <ListItemButton
                          sx={{
                            pt: "5px",
                            pb: "10px",
                          }}
                        >
                          <StyledText>
                            Automatization through a service provider
                          </StyledText>
                        </ListItemButton>
                      </AccordionDetails>
                    </Accordion>
                  </Box>
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton
                  sx={{
                    pt: "0px",
                    pb: "0px",
                  }}
                  onClick={() => navigate("/manageRole")}
                >
                  <ListItemIcon sx={{ minWidth: "45px" }}>
                    <Profile />
                  </ListItemIcon>
                  <StyledText>Role</StyledText>
                </ListItemButton>
              </ListItem>
            </>
          )}
          {userResData?.users?.data?.user?.role === "user" && (
            <>
              <ListItem
                sx={{
                  pt: 0,
                  pb: 0,
                }}
              >
                <ListItemButton
                  sx={{
                    pt: "0px",
                    pb: "0px",
                    "&:hover": {
                      backgroundColor: "white",
                    },
                  }}
                >
                  <Box sx={{ display: "flex" }}>
                    <ListItemIcon sx={{ minWidth: "45px", paddingTop: "12px" }}>
                      <AttachMoneyIcon />
                    </ListItemIcon>
                    <Accordion
                      disableGutters
                      // paperProps={{ sx: { backgroundColor: "red" } }}
                      sx={{
                        boxShadow: "none",
                        width: "100%",
                        // minHeight: "30px",
                        "&:hover": {
                          // backgroundColor: "#f5f5f5",
                        },
                        "&:before": {
                          display: "none",
                        },
                      }}
                    >
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls='panel1a-content'
                        id='panel1a-header'
                        sx={{
                          padding: "0px 0px",
                          marginRight: "-22px",
                          // "& .MuiAccordionSummary-root": {
                          //   padding: 0,
                          // },
                        }}
                      >
                        <StyledText>FIAT</StyledText>
                      </AccordionSummary>
                      <AccordionDetails sx={{ p: 0 }}>
                        {/* <ListItem> */}
                        <ListItemButton
                          sx={{
                            pt: "5px",
                            pb: "5px",
                          }}
                          onClick={() => navigate("/depositAmount")}
                        >
                          <StyledText>Deposit FIAT</StyledText>
                        </ListItemButton>
                        <ListItemButton
                          sx={{
                            pt: "5px",
                            pb: "5px",
                          }}
                          onClick={() => navigate("/withdrawFiat")}
                        >
                          <StyledText>Withdraw FIAT</StyledText>
                        </ListItemButton>
                        {/* <ListItemButton
                          onClick={() => navigate("/depositAmount/viewDeposit")}
                          sx={{
                            pt: "5px",
                            pb: "5px",
                          }}
                        >
                          <StyledText>View FIAT</StyledText>
                        </ListItemButton> */}
                      </AccordionDetails>
                    </Accordion>
                  </Box>
                </ListItemButton>
              </ListItem>
              <ListItem
                sx={{
                  pt: 0,
                  pb: 0,
                }}
              >
                <ListItemButton
                  sx={{
                    pt: "0px",
                    pb: "0px",
                    "&:hover": {
                      backgroundColor: "white",
                    },
                  }}
                >
                  <Box sx={{ display: "flex" }}>
                    <ListItemIcon sx={{ minWidth: "45px", paddingTop: "12px" }}>
                      <AttachMoneyIcon />
                    </ListItemIcon>
                    <Accordion
                      disableGutters
                      // paperProps={{ sx: { backgroundColor: "red" } }}
                      sx={{
                        boxShadow: "none",
                        width: "100%",
                        // minHeight: "30px",
                        "&:hover": {
                          // backgroundColor: "#f5f5f5",
                        },
                        "&:before": {
                          display: "none",
                        },
                      }}
                    >
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls='panel1a-content'
                        id='panel1a-header'
                        sx={{
                          padding: "0px 0px",
                          // "& .MuiAccordionSummary-root": {
                          //   padding: 0,
                          // },
                        }}
                      >
                        <StyledText>Crypto</StyledText>
                      </AccordionSummary>
                      <AccordionDetails sx={{ p: 0 }}>
                        {/* <ListItem> */}
                        <ListItemButton
                          sx={{
                            pt: "5px",
                            pb: "5px",
                          }}
                          onClick={() => navigate("/createCrypto")}
                        >
                          <StyledText>Deposit Crypto</StyledText>
                        </ListItemButton>
                        <ListItemButton
                          onClick={() => navigate("/withdrawCrypto")}
                          sx={{
                            pt: "5px",
                            pb: "5px",
                          }}
                        >
                          <StyledText>Withdraw Crypto</StyledText>
                        </ListItemButton>
                      </AccordionDetails>
                    </Accordion>
                  </Box>
                </ListItemButton>
              </ListItem>

              {/* <ListItem>
                <ListItemButton
                  sx={{
                    pt: "0px",
                    pb: "0px",
                  }}
                  onClick={() => navigate("/createCrypto")}
                >
                  <ListItemIcon sx={{ minWidth: "45px" }}>
                    <BuyCrypto />
                  </ListItemIcon>
                  <StyledText>Deposit Crypto</StyledText>
                </ListItemButton>
              </ListItem> */}

              <ListItem sx={{ pb: 1.5, pt: 1.5 }}>
                <ListItemButton
                  sx={{
                    pt: "0px",
                    pb: "0px",
                  }}
                  onClick={() => navigate("/genWallet")}
                >
                  <ListItemIcon sx={{ minWidth: "45px" }}>
                    <Wallet />
                  </ListItemIcon>
                  <StyledText>Generate Wallet</StyledText>
                </ListItemButton>
              </ListItem>
            </>
          )}

          <ListItem sx={{ pb: 1.5, pt: 1.5 }}>
            <ListItemButton
              sx={{
                pt: "0px",
                pb: "0px",
              }}
              onClick={() => navigate("/transactions")}
            >
              <ListItemIcon sx={{ minWidth: "45px" }}>
                <TransactionMinus />
              </ListItemIcon>
              <StyledText>Transaction</StyledText>
            </ListItemButton>
          </ListItem>

          {/* <ListItem sx={{ pb: 1.5, pt: 1.5 }}>
            <ListItemButton
              sx={{
                pt: "0px",
                pb: "0px",
              }}
            >
              <ListItemIcon sx={{ minWidth: "45px" }}>
                <Coin1 />
              </ListItemIcon>
              <StyledText>Token</StyledText>
            </ListItemButton>
          </ListItem> */}
          {userResData?.users?.data?.user?.role === "user" && (
            <ListItem sx={{ pb: 1.5, pt: 1.5 }}>
              <ListItemButton
                sx={{
                  pt: "0px",
                  pb: "0px",
                }}
                onClick={() => navigate("/UpdateProfile")}
              >
                <ListItemIcon sx={{ minWidth: "45px" }}>
                  <Setting2 />
                </ListItemIcon>
                <StyledText>Settings</StyledText>
              </ListItemButton>
            </ListItem>
          )}
          {userResData?.users?.data?.user?.role === "admin" && (
            <ListItem sx={{ pb: 1.5, pt: 1.5 }}>
              <ListItemButton
                sx={{
                  pt: "0px",
                  pb: "0px",
                }}
                onClick={() => navigate("/adminSettings")}
              >
                <ListItemIcon sx={{ minWidth: "45px" }}>
                  <Setting2 />
                </ListItemIcon>
                <StyledText>Settings</StyledText>
              </ListItemButton>
            </ListItem>
          )}
        </List>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            padding: "10px",
            mt: "20px",
          }}
        >
          <Box
            sx={{
              width: "60px",
              height: "60px",
              borderRadius: "50%",
              display: "grid",
              alignContent: "center",
            }}
          >
            <img
              src={userResData?.users?.data?.user?.avatar?.url}
              width='80%'
              style={{ borderRadius: "50%" }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
              justifyContent: "center",
            }}
          >
            <Typography
              sx={{
                fontWeight: "bold",
              }}
            >
              <StyledBadge
                badgeContent={userResData?.users?.data?.user?.role}
                color='secondary'
              >
                {userResData?.users?.data?.user?.firstName}{" "}
                {userResData?.users?.data?.user?.lastName}
              </StyledBadge>
            </Typography>

            <Typography
              sx={{
                fontSize: "12px",
                color: "#7c8493",
              }}
            >
              {userResData?.users?.data?.user?.emails[0].email}
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            mt: "0px",
            textAlign: "center",
            mb: "10px",
          }}
        >
          <Button
            sx={{ width: "200px" }}
            variant='outlined'
            onClick={handleLogout}
            endIcon={<LogoutIcon />}
          >
            Logout
          </Button>
        </Box>
      </Drawer>
      <Main open={open} sx={{ mt: "5px" }}>
        <Box sx={{ mt: "60px" }}>{children}</Box>
      </Main>
      <Menu
        anchorEl={anchorEl}
        open={openMenu}
        onClose={handleClose}
        sx={{
          mt: "1px",
        }}
      >
        <MenuItem
          onClick={handleClose}
          component={Link}
          to='/profileManagement'
        >
          Profile
        </MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </Box>
  );
}
