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
const FIATWidthdraw = () => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          mt: "20px",
          // pl: { lg: "50px", md: "40px", sm: "20px", xs: "10px" },
          // pr: { lg: "36px", md: "30px", sm: "10px", xs: "5px" },
        }}
      >
        <Typography
          sx={{
            color: "text.primary",
            fontWeight: 600,
            fontSize: "20px",
            mb: 3,
          }}
        >
          FIAT Withdraw
        </Typography>
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
    </>
  );
};

export default FIATWidthdraw;
