import { Box, TextField, Typography } from "@mui/material";
import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import FIATWithdraw from "./FIATWithdraw";
import CXTWithdraw from "./CXTWithdraw";
import { ArrowDown, Filter } from "iconsax-react";
import FIATDeposits from "./FIATDeposit";
import CXTDeposits from "./CXTDeposits";
import dayjs from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const Transaction = () => {
  const [age, setAge] = React.useState(10);
  const [FIATDeposit, setFIATDeposit] = React.useState(true);
  const [FIAT, setFIAT] = React.useState(false);
  const [CXT, setCXT] = React.useState(false);
  const [CXTDeposit, setCXTDeposit] = React.useState(false);
  const [toDate, setToDate] = React.useState(dayjs("2022-04-17"));
  const [fromDate, setFromDate] = React.useState(dayjs("2022-04-17"));

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const handleFIAT = () => {
    setCXT(false);
    setCXTDeposit(false);
    setFIATDeposit(false);
    setFIAT(true);
  };
  const handleFIATDeposit = () => {
    setCXTDeposit(false);
    setFIAT(false);
    setCXT(false);
    setFIATDeposit(true);
  };
  const handleCXT = () => {
    setFIAT(false);
    setCXTDeposit(false);
    setFIATDeposit(false);
    setCXT(true);
  };
  const handleCXTDeposit = () => {
    setFIAT(false);
    setCXT(false);
    setFIATDeposit(false);
    setCXTDeposit(true);
  };

  console.log(toDate);

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
            paddingRight: "40px",
            // justifyContent: "center",
          }}
        >
          <Box
            sx={{
              mt: "20px",
              pl: { lg: "50px", md: "70px", sm: "40px", xs: "20px" },
              display: "flex",
              flexDirection: "column",
              //   justifyContent: "space-between",
              width: "100%",
              //   alignItems: "center",
              //   textAlign: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                mr: "5px",
              }}
            >
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography
                  sx={{
                    color: "text.primary",
                    fontWeight: 600,
                    fontSize: "20px",
                    mb: 3,
                  }}
                >
                  Transactions
                </Typography>
                <Box
                  sx={{
                    position: "absolute",
                    right: 110,
                    top: 180,
                    display: "flex",
                  }}
                >
                  <Filter style={{ marginRight: 10, cursor: "pointer" }} />
                  <FormControl
                  // fullWidth
                  >
                    <Select
                      labelId='demo-simple-select-label'
                      id='demo-simple-select'
                      placeholder='Select'
                      value={age}
                      onChange={handleChange}
                      sx={{
                        fontSize: "12px",
                        height: "30px",
                        width: "130px",
                        mr: 1,
                      }}
                      displayEmpty
                      inputProps={{ "aria-label": "Without label" }}
                    >
                      <MenuItem value=''>
                        <em>Select</em>
                      </MenuItem>
                      <MenuItem
                        sx={{
                          fontSize: "13px",
                        }}
                        onClick={handleFIATDeposit}
                        value={10}
                      >
                        FIAT Deposit
                      </MenuItem>
                      <MenuItem
                        sx={{
                          fontSize: "13px",
                        }}
                        onClick={handleFIAT}
                        value={20}
                      >
                        FIAT Withdraw
                      </MenuItem>
                      <MenuItem
                        sx={{
                          fontSize: "13px",
                        }}
                        onClick={handleCXTDeposit}
                        value={30}
                      >
                        CXT Deposit
                      </MenuItem>
                      <MenuItem
                        sx={{
                          fontSize: "13px",
                        }}
                        onClick={handleCXT}
                        value={40}
                      >
                        CXT Withdraw
                      </MenuItem>
                    </Select>
                  </FormControl>
                  {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker />
                  </LocalizationProvider> */}
                  {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={["DatePicker", "DatePicker"]}>
                      <DatePicker
                        label='Controlled picker'
                        value={toDate}
                        onChange={(newValue) => setToDate(newValue)}
                      />
                    </DemoContainer>
                  </LocalizationProvider> */}

                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      sx={{
                        height: "30px",
                        fontSize: "10px",
                        padding: 0,
                        mr: 1,
                      }}
                      label='From'
                      slotProps={{
                        textField: {
                          size: "small",
                        },
                      }}
                      value={fromDate}
                      onChange={(newValue) => setFromDate(newValue)}
                    />
                  </LocalizationProvider>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      sx={{
                        height: "30px",
                        fontSize: "10px",
                        padding: 0,
                      }}
                      label='To'
                      slotProps={{
                        textField: {
                          size: "small",
                        },
                      }}
                      value={toDate}
                      onChange={(newValue) => setToDate(newValue)}
                    />
                  </LocalizationProvider>
                </Box>
              </Box>
              {FIATDeposit && <FIATDeposits />}
              {FIAT && <FIATWithdraw />}
              {CXT && <CXTWithdraw />}
              {CXTDeposit && <CXTDeposits />}
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Transaction;
