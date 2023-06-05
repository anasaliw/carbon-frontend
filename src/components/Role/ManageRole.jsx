import { Close } from "@mui/icons-material";
import { Box, Button, styled, Typography, MenuItem, Menu } from "@mui/material";
// import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Link, useNavigate } from "react-router-dom";
// import { getAllUsersAction, getUserApprovedAction } from "../../Redux/actions";
// import getAllUserReducer from "../../Redux/reducers/getAllUsers";
// import VisibilityIcon from "@mui/icons-material/Visibility";
// import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
// import DeleteIcon from "@mui/icons-material/Delete";
// import EditIcon from "@mui/icons-material/Edit";
// import { Edit, Eye } from "iconsax-react";
// import { Delete, Publish, Visibility } from "@mui/icons-material";

function Tcell() {
  return (
    <>
      <Box
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Close sx={{ width: "25px" }} />
        <Typography sx={{ fontSize: "12px" }}>& validate*</Typography>
      </Box>
    </>
  );
}

const tableData = [
  {
    role: "View only",
    viewAllInfo: <Close />,
    creditDebit: "",
    mintBurn: "",
    modifyFees: "",
    modifyUserAccess: "",
  },
  {
    role: "Accounting",
    viewAllInfo: <Close />,
    creditDebit: <Close />,
    mintBurn: "",
    modifyFees: "",
    modifyUserAccess: "",
  },
  {
    role: "Trader",
    viewAllInfo: <Close />,
    creditDebit: "",
    mintBurn: <Close />,
    modifyFees: "",
    modifyUserAccess: "",
  },
  {
    role: "Controller",
    viewAllInfo: <Close />,
    creditDebit: "validate",
    mintBurn: "validate",
    modifyFees: "",
    modifyUserAccess: "",
  },
  {
    role: "Super User",
    viewAllInfo: <Close />,
    creditDebit: <Tcell />,
    mintBurn: <Tcell />,
    modifyFees: <Tcell />,
    modifyUserAccess: <Tcell />,
  },
];

const ManageRole = () => {
  return (
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
                fontWeight: 600,
                fontSize: "20px",
              }}
            >
              User Role
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
                        fonSize: "11px",
                        fontWeight: 600,
                      }}
                      align='center'
                    >
                      Autority Profile
                    </TableCell>
                    <TableCell
                      sx={{
                        color: "rgb(137, 138, 154)",
                        fonSize: "11px",
                        fontWeight: 600,
                      }}
                      align='center'
                    >
                      View all info
                    </TableCell>
                    <TableCell
                      sx={{
                        color: "rgb(137, 138, 154)",
                        fonSize: "11px",
                        fontWeight: 600,
                      }}
                      align='center'
                    >
                      Credit/Debit Account balance
                    </TableCell>
                    <TableCell
                      sx={{
                        color: "rgb(137, 138, 154)",
                        fonSize: "11px",
                        fontWeight: 600,
                      }}
                      align='center'
                    >
                      Mint/burn/valid/ate transfer in, out, offset/credit token.
                    </TableCell>
                    <TableCell
                      sx={{
                        color: "rgb(137, 138, 154)",
                        fonSize: "11px",
                        fontWeight: 600,
                        minWidth: "130px",
                      }}
                      align='center'
                    >
                      Modify Fees
                    </TableCell>
                    <TableCell
                      sx={{
                        color: "rgb(137, 138, 154)",
                        fonSize: "11px",
                        fontWeight: 600,
                      }}
                      align='center'
                    >
                      Modify user access
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {tableData.map((row, index) => (
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
                      <TableCell align='center' component='th' scope='row'>
                        <Typography sx={{ fontSize: "13px", fontWeight: 600 }}>
                          {row?.role}
                        </Typography>
                      </TableCell>
                      <TableCell align='center'>{row?.viewAllInfo}</TableCell>
                      <TableCell sx={{ fontSize: "12px" }} align='center'>
                        {row?.creditDebit}
                      </TableCell>
                      <TableCell sx={{ fontSize: "12px" }} align='center'>
                        {row?.mintBurn}
                      </TableCell>
                      <TableCell sx={{ fontSize: "12px" }} align='center'>
                        {row?.modifyFees}
                      </TableCell>
                      <TableCell sx={{ fontSize: "12px" }} align='center'>
                        {row?.modifyUserAccess}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ManageRole;
