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

const viewDepositData = [
  { date: "29/3/2023", reference: 536621, amount: 4500 },
  { date: "29/3/2023", reference: 536621, amount: 4500 },
  { date: "29/3/2023", reference: 536621, amount: 4500 },
  { date: "29/3/2023", reference: 536621, amount: 4500 },
  { date: "29/3/2023", reference: 536621, amount: 4500 },
];

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});
const ViewDeposit = () => {
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
              View Deposits
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
                      sx={{
                        color: "rgb(137, 138, 154)",
                        fonSize: "12px",
                        fontWeight: 600,
                      }}
                      align='center'
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
                      Amount
                    </TableCell>
                    <TableCell
                      sx={{
                        color: "rgb(137, 138, 154)",
                        fonSize: "12px",
                        fontWeight: 600,
                      }}
                      align='center'
                    ></TableCell>
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
                  </TableRow>
                </TableHead>
                <TableBody>
                  {viewDepositData.map((row, index) => (
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
                      <TableCell
                        align='center'
                        sx={{ fontSize: "12px" }}
                        component='th'
                        scope='row'
                      >
                        {row?.reference}
                      </TableCell>

                      <TableCell sx={{ fontSize: "12px" }} align='center'>
                        {formatter.format(row?.amount)}
                      </TableCell>
                      <TableCell align='center'>
                        <Button
                          variant='contained'
                          sx={{
                            textTransform: "none",
                            height: "25px",
                            fontSize: "12px",
                          }}
                        >
                          View
                        </Button>
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

export default ViewDeposit;
