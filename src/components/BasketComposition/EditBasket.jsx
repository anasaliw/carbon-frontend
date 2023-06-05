import * as React from "react";
import {
  Box,
  Typography,
  Button,
  MenuItem,
  Menu,
  OutlinedInput,
} from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link, useNavigate } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Edit, Eye } from "iconsax-react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Delete, Publish, Visibility } from "@mui/icons-material";
import CurrencyInput from "react-currency-input-field";

function createData(name, component, amount, target) {
  return { name, component, amount, target };
}

const rows = [
  createData("Versal", 1, 10000, 34500),
  createData("Heroku", 2, 20000, 34500),
  createData("React", 3, 30000, 34500),
  createData("Javascript", 4, 40000, 34500),
  createData("Software", 10, 40000, 34500),
];

function EditBasket() {
  const navigate = useNavigate();
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  const [value, setValue] = React.useState(null);
  console.log(value);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const HandleZero = (value) => {
    if (Number(value) < 10) {
      const appendZero = `0${value}`;
      return appendZero;
    } else {
      return value;
    }
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
              Edit Basket
            </Typography>
            <Button
              variant='contained'
              sx={{
                marginRight: "35px",
                // color: "text.primary",
                fontWeight: 300,
                height: "30px",
                fontSize: "11px",
              }}
              onClick={() => navigate("/basket")}
            >
              Compose Basket
            </Button>
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
                      Name of basket
                    </TableCell>
                    <TableCell
                      sx={{
                        color: "rgb(137, 138, 154)",
                        fonSize: "12px",
                        fontWeight: 600,
                      }}
                      align='center'
                    >
                      Number of component
                    </TableCell>
                    <TableCell
                      sx={{
                        color: "rgb(137, 138, 154)",
                        fonSize: "12px",
                        fontWeight: 600,
                      }}
                      align='center'
                    >
                      Amount of 1 ton carbon
                    </TableCell>
                    <TableCell
                      sx={{
                        color: "rgb(137, 138, 154)",
                        fonSize: "12px",
                        fontWeight: 600,
                      }}
                      align='center'
                    >
                      Total Target
                    </TableCell>
                    <TableCell align='center'></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row, index) => (
                    <TableRow
                      key={index}
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
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
                        {row.name}
                      </TableCell>
                      <TableCell sx={{ fontSize: "12px" }} align='center'>
                        {HandleZero(row.component)}
                      </TableCell>
                      <TableCell sx={{ fontSize: "12px" }} align='center'>
                        {formatter.format(row.amount)} USD
                      </TableCell>
                      <TableCell sx={{ fontSize: "12px" }} align='center'>
                        {row.target}
                      </TableCell>

                      <TableCell
                        align='right'
                        // sx={{ border: "1px solid black" }}
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
                          <MoreHorizIcon sx={{ fontSize: "16px" }} />
                        </Box>
                      </TableCell>
                      <Menu
                        anchorEl={anchorEl}
                        id='account-menu'
                        open={open}
                        onClose={handleClose}
                        onClick={handleClose}
                        PaperProps={{
                          elevation: 0,
                          sx: {
                            overflow: "visible",
                            filter:
                              "drop-shadow(0px 2px 2px rgba(116, 116, 116, 0.32))",
                            mt: 1.8,
                            minHeight: 10,
                            // height: 55,

                            // marginLeft: "40px",

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
                        >
                          <Box
                            sx={{
                              padding: "0px 5px",
                              display: "flex",
                              alignItems: "center",
                            }}
                          >
                            <Publish
                              sx={{
                                fontSize: "18px",
                                color: "#7c7c7c",
                              }}
                            />
                            <Typography
                              sx={{ padding: "0 5px", fontSize: "12px" }}
                            >
                              Publish
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
                            <Visibility
                              sx={{
                                fontSize: "18px",
                                color: "#7c7c7c",
                              }}
                            />
                            <Typography
                              sx={{ padding: "0 5px", fontSize: "12px" }}
                            >
                              View
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
                            <EditIcon
                              sx={{
                                fontSize: "18px",
                                color: "#7c7c7c",
                              }}
                            />
                            <Typography
                              sx={{ padding: "0 5px", fontSize: "12px" }}
                            >
                              Edit
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
                            <Delete
                              sx={{ fontSize: "18px", color: "#7c7c7c" }}
                            />
                            <Typography
                              sx={{ padding: "0 5px", fontSize: "12px" }}
                            >
                              Delete
                            </Typography>
                          </Box>
                        </MenuItem>
                      </Menu>
                    </TableRow>
                  ))}
                  {/* <TableCell><Button>Delete</Button></TableCell> */}
                  {/* <TableCell align='right'>
                    <Button
                      variant='contained'
                      startIcon={<DeleteIcon />}
                      sx={{
                        marginRight: "20px",
                        height: "30px",
                        fontSize: "12px",
                      }}
                    >
                      Delete
                    </Button>
                    <Button
                      endIcon={<EditIcon />}
                      variant='contained'
                      sx={{ height: "30px", fontSize: "12px" }}
                    >
                      Edit
                    </Button>
                  </TableCell> */}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default EditBasket;
