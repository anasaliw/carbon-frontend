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
import CopyToClipboard from "react-copy-to-clipboard";
import CloseIcon from "@mui/icons-material/Close";
import { DataProvider } from "../../ContextAPI";
import { useNavigate } from "react-router-dom";

const DepositAmount = () => {
  const navigate = useNavigate();

  const { reference, setReference } = useContext(DataProvider);
  const [amount, setAmount] = React.useState("0.00");
  const [open, setOpen] = React.useState(null);
  const [dialog, setDialog] = React.useState(false);
  const [copy, setCopy] = React.useState(
    "Account Title: John \nBank Name: next bank \nAccount Number: 2642165435453248 \nSwift Code: 57546574 \nRouting No: 57546574 \nBank Address: Rue du Rhône 67 - 1204 Genève"
  );

  const handleClick = () => {
    setOpen(true);
    const random =
      Math.floor(Math.random() * (999999999 - 100000000 + 1)) + 100000000;
    // console.log(random);
    setTimeout(() => {
      setReference(random);
      setDialog(true);
      console.log(reference);
      navigate("/depositBankDetails");
    }, 500);
  };
  console.log(reference);

  const handleClose = () => {
    setOpen(false);
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
                Deposit FIAT
              </Typography>

              <InputLabel sx={{ mb: "1px", fontSize: "11px" }}>
                Amount
              </InputLabel>
              <OutlinedInput
                required
                startAdornment={
                  <InputAdornment
                    position='end'
                    sx={{
                      width: "18px",
                      marginRight: "8px",
                      marginLeft: "-4px",
                    }}
                  >
                    <DollarCircle sx={{ width: "20px" }} />
                  </InputAdornment>
                }
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
              />
            </Box>
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
              Submit
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default DepositAmount;
