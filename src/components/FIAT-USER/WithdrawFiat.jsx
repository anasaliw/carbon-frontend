import React from "react";
import {
  Box,
  Typography,
  OutlinedInput,
  InputAdornment,
  InputLabel,
  Alert,
  Collapse,
  IconButton,
  Button,
  Grid,
} from "@mui/material";
import { DollarCircle } from "iconsax-react";
import CloseIcon from "@mui/icons-material/Close";

const WithdrawFiat = () => {
  const [open, setOpen] = React.useState(null);
  const [reference, setReference] = React.useState("");
  const [amount, setAmount] = React.useState("0.00");

  const handleClick = () => {
    setOpen(true);
    const random = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
    // console.log(random);
    setTimeout(() => {
      setReference(random);
      console.log(reference);
    }, 500);
  };
  console.log(reference);
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
            <Collapse in={open}>
              <Alert
                action={
                  <IconButton
                    aria-label='close'
                    color='inherit'
                    size='small'
                    onClick={() => {
                      setOpen(false);
                    }}
                  >
                    <CloseIcon fontSize='inherit' />
                  </IconButton>
                }
                sx={{ mb: 2, backgroundColor: "#8eb3ff" }}
              >
                Your Request has been sent to admin.
                {/* (<span style={{ fontWeight: 600 }}>{reference}</span>). */}
              </Alert>
            </Collapse>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                mr: "5px",
              }}
            >
              <Typography
                sx={{
                  color: "text.primary",
                  fontWeight: 600,
                  fontSize: "20px",
                  mb: 4,
                }}
              >
                Withdraw FIAT
              </Typography>
              <>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: {
                      lg: "row",
                      md: "row",
                      sm: "columns",
                      xs: "column",
                    },
                  }}
                >
                  <Box
                    sx={{
                      mr: {
                        lg: 2,
                        md: 2,
                        sm: 0,
                        xs: 0,
                      },
                    }}
                  >
                    <InputLabel sx={{ mb: "1px", fontSize: "11px" }}>
                      Amount
                    </InputLabel>
                    <OutlinedInput
                      required
                      // startAdornment={
                      //   <InputAdornment
                      //     position='end'
                      //     sx={{
                      //       width: "18px",
                      //       marginRight: "8px",
                      //       marginLeft: "-4px",
                      //     }}
                      //   >
                      //     <DollarCircle sx={{ width: "20px" }} />
                      //   </InputAdornment>
                      // }
                      sx={{
                        fontSize: "12px",
                        height: "30px",
                        // width: { lg: "30%", md: "60%", sm: "75%", xs: "97%" },
                        mr: "5px",
                        "& input::placeholder": {
                          fontSize: "12px",
                        },
                      }}
                      fullWidth
                      placeholder='Amount'
                      type='number'
                      margin='normal'
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                    />
                  </Box>
                  <Box>
                    <InputLabel sx={{ mb: "1px", fontSize: "11px" }}>
                      Account Title
                    </InputLabel>
                    <OutlinedInput
                      required
                      sx={{
                        fontSize: "12px",
                        height: "30px",
                        // width: { lg: "30%", md: "60%", sm: "75%", xs: "97%" },
                        mr: "5px",
                        "& input::placeholder": {
                          fontSize: "12px",
                        },
                      }}
                      fullWidth
                      placeholder='Title'
                      type='text'
                      margin='normal'
                    />
                  </Box>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: {
                      lg: "row",
                      md: "row",
                      sm: "columns",
                      xs: "column",
                    },
                  }}
                >
                  <Box
                    sx={{
                      mr: {
                        lg: 2,
                        md: 2,
                        sm: 0,
                        xs: 0,
                      },
                    }}
                  >
                    <InputLabel sx={{ mb: "1px", fontSize: "11px" }}>
                      Name of Bank
                    </InputLabel>
                    <OutlinedInput
                      required
                      fullWidth
                      sx={{
                        fontSize: "12px",
                        height: "30px",
                        // width: { lg: "30%", md: "60%", sm: "75%", xs: "97%" },
                        mr: "5px",
                        "& input::placeholder": {
                          fontSize: "12px",
                        },
                      }}
                      placeholder='Name'
                      type='text'
                      margin='normal'
                    />
                  </Box>
                  <Box>
                    <InputLabel sx={{ mb: "1px", fontSize: "11px" }}>
                      Account Number
                    </InputLabel>
                    <OutlinedInput
                      required
                      fullWidth
                      sx={{
                        fontSize: "12px",
                        height: "30px",
                        // width: { lg: "30%", md: "60%", sm: "75%", xs: "97%" },
                        mr: "5px",
                        "& input::placeholder": {
                          fontSize: "12px",
                        },
                      }}
                      placeholder='Number'
                      type='number'
                      margin='normal'
                    />
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: {
                      lg: "row",
                      md: "row",
                      sm: "columns",
                      xs: "column",
                    },
                  }}
                >
                  <Box
                    sx={{
                      mr: {
                        lg: 2,
                        md: 2,
                        sm: 0,
                        xs: 0,
                      },
                    }}
                  >
                    <InputLabel sx={{ mb: "1px", fontSize: "11px" }}>
                      Swift Code
                    </InputLabel>
                    <OutlinedInput
                      fullWidth
                      required
                      sx={{
                        fontSize: "12px",
                        height: "30px",
                        // width: { lg: "30%", md: "60%", sm: "75%", xs: "97%" },
                        mr: "5px",
                        "& input::placeholder": {
                          fontSize: "12px",
                        },
                      }}
                      placeholder='Code'
                      type='number'
                      margin='normal'
                    />
                  </Box>
                  <Box>
                    <InputLabel sx={{ mb: "1px", fontSize: "11px" }}>
                      Routing number
                    </InputLabel>
                    <OutlinedInput
                      required
                      sx={{
                        fontSize: "12px",
                        height: "30px",
                        // width: { lg: "30%", md: "60%", sm: "75%", xs: "97%" },
                        mr: "5px",
                        "& input::placeholder": {
                          fontSize: "12px",
                        },
                      }}
                      fullWidth
                      placeholder='Number'
                      type='number'
                      margin='normal'
                    />
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: {
                      lg: "row",
                      md: "row",
                      sm: "columns",
                      xs: "column",
                    },
                  }}
                >
                  <Box
                    sx={{
                      mr: {
                        lg: 2,
                        md: 2,
                        sm: 0,
                        xs: 0,
                      },
                    }}
                  >
                    <InputLabel sx={{ mb: "1px", fontSize: "11px" }}>
                      Bank Address
                    </InputLabel>
                    <OutlinedInput
                      required
                      fullWidth
                      sx={{
                        fontSize: "12px",
                        height: "30px",
                        // width: { lg: "30%", md: "60%", sm: "75%", xs: "97%" },
                        mr: "5px",
                        "& input::placeholder": {
                          fontSize: "12px",
                        },
                      }}
                      placeholder='Address'
                      type='text'
                      margin='normal'
                    />
                  </Box>
                  <Box></Box>
                </Box>
              </>

              <Button
                type='submit'
                variant='contained'
                onClick={handleClick}
                sx={{
                  height: "25px",
                  fontSize: "12px",
                  textTransform: "capitalize",
                  width: "120px",
                  marginTop: 2,
                  mb: 10,
                  // m: "20px ",
                }}
              >
                Withdraw
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default WithdrawFiat;
