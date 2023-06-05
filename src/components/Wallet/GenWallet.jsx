import {
  Box,
  Button,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Slide,
  Snackbar,
  Typography,
  Alert,
  Collapse,
  IconButton,
} from "@mui/material";
import { DollarCircle } from "iconsax-react";
import React, { useContext } from "react";
// import ethers from "ethers";
import { Wallet } from "ethers";
import { DataProvider } from "../../ContextAPI";
import CloseIcon from "@mui/icons-material/Close";

const GenWallet = () => {
  const [amount, setAmount] = React.useState("0.00");
  const [open, setOpen] = React.useState(false);
  const { address, setAddress } = useContext(DataProvider);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const handleGenRandom = () => {
    var acc = Wallet.createRandom();
    console.log(acc.address);
    setOpen(true);
    setAddress(acc.address);
    setTimeout(() => {
      setOpen(false);
    }, 4000);
  };
  console.log(address);

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
              <Typography
                sx={{
                  color: "text.primary",
                  fontWeight: 600,
                  fontSize: "20px",
                  mb: 3,
                }}
              >
                Create Your Wallet
              </Typography>

              {/* <InputLabel sx={{ mb: "1px", fontSize: "11px" }}>
                Enter Amount
              </InputLabel>
              <OutlinedInput
                required
                //   startAdornment={
                //     <InputAdornment
                //       position='end'
                //       sx={{
                //         width: "18px",
                //         marginRight: "8px",
                //         marginLeft: "-4px",
                //       }}
                //     >
                //       <DollarCircle sx={{ width: "20px" }} />
                //     </InputAdornment>
                //   }
                sx={{
                  fontSize: "12px",
                  height: "30px",
                  width: { lg: "30%", md: "60%", sm: "75%", xs: "97%" },
                  mr: "5px",
                  "& input::placeholder": {
                    fontSize: "12px",
                  },
                }}
                // fullWidth
                placeholder='Amount'
                type='number'
                margin='normal'
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              /> */}
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
                  Wallet Generated Successfully
                </Alert>
              </Collapse>
            </Box>
            <Button
              type='submit'
              variant='contained'
              // onClick={handleClick(TransitionLeft)}
              onClick={handleGenRandom}
              sx={{
                height: "25px",
                fontSize: "12px",
                textTransform: "capitalize",
                width: "130px",
                marginTop: 2,
                // m: "20px ",
              }}
            >
              Generate Wallet
            </Button>
          </Box>
        </Box>
      </Box>
      {/* <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
        <Alert onClose={handleClose} severity='success' sx={{ width: "100%" }}>
          Wallet Generated Successfully
        </Alert>
      </Snackbar> */}
    </>
  );
};

export default GenWallet;
