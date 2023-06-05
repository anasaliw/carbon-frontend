import {
  Box,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TableBody,
  Button,
  Typography,
} from "@mui/material";
import React from "react";

const depositData = [
  {
    date: "29/3/2023",
    firstName: "Testing",
    lastName: "User",
    amount: 4500,
    reference: 356246,
  },
  {
    date: "29/3/2023",
    firstName: "Testing10",
    lastName: "User10",
    amount: 4000,
    reference: 356246,
  },
  {
    date: "29/3/2023",
    firstName: "Testing20",
    lastName: "User20",
    amount: 5500,
    reference: 356246,
  },
  {
    date: "29/3/2023",
    firstName: "Testing30",
    lastName: "User30",
    amount: 7600,
    reference: 356246,
  },
  {
    date: "29/3/2023",
    firstName: "Testing40",
    lastName: "User40",
    amount: 6700,
    reference: 356246,
  },
];

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});
const ApproveDeposit = () => {
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
              Amount Deposit Approval
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
                      Date
                    </TableCell>
                    <TableCell
                      align='center'
                      sx={{
                        color: "rgb(137, 138, 154)",
                        fonSize: "12px",
                        fontWeight: 600,
                      }}
                    >
                      Reference Number
                    </TableCell>
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
                      Amount
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
                  {depositData.map((row, index) => (
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
                        {row?.date}
                      </TableCell>
                      <TableCell sx={{ fontSize: "12px" }} align='center'>
                        {row?.reference}
                      </TableCell>
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
                        {formatter.format(row?.amount)}
                      </TableCell>

                      {/* <TableCell sx={{ fontSize: "12px" }} align='center'>
                              {row.approveByAdmin === true ? "True" : "False"}
                            </TableCell> */}

                      <TableCell align='center'>
                        {/* <LightTooltip
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
                              </LightTooltip> */}
                        <Button
                          variant='contained'
                          sx={{
                            textTransform: "none",
                            height: "25px",
                            fontSize: "12px",
                          }}
                        >
                          Approve
                        </Button>

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
    </>
  );
};

export default ApproveDeposit;
