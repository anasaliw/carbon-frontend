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
import React from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import CloseIcon from "@mui/icons-material/Close";
import { useContext } from "react";
import { DataProvider } from "../../ContextAPI";

const DepositBankdetails = () => {
  const [open, setOpen] = React.useState(true);
  const { reference } = useContext(DataProvider);
  const [copy, setCopy] = React.useState(
    "Account Title: John \nBank Name: next bank \nAccount Number: 2642165435453248 \nSwift Code: 57546574 \nRouting No: 57546574 \nBank Address: Rue du Rhône 67 - 1204 Genève"
  );

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
                  Please use following details for wire transfer and also please
                  add the reference number (
                  <span style={{ fontWeight: 600 }}>{reference}</span>).
                </Alert>
              </Collapse>
              <Typography
                sx={{
                  color: "text.primary",
                  fontWeight: 600,
                  fontSize: "20px",
                  mb: 3,
                }}
              >
                Bank Details
              </Typography>

              <Box sx={{}}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Typography sx={{ fontWeight: 600, fontSize: "13px" }}>
                    Account Title:
                  </Typography>
                  &nbsp;&nbsp;
                  <Typography sx={{ fontSize: "14px" }}>John</Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Typography sx={{ fontWeight: 600, fontSize: "13px" }}>
                    Bank Name:
                  </Typography>
                  &nbsp;&nbsp;
                  <Typography sx={{ fontSize: "14px" }}>next bank</Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Typography sx={{ fontWeight: 600, fontSize: "13px" }}>
                    Account Number:
                  </Typography>
                  &nbsp;&nbsp;
                  <Typography sx={{ fontSize: "14px" }}>
                    2642165435453248
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Typography sx={{ fontWeight: 600, fontSize: "13px" }}>
                    Swift Code:
                  </Typography>
                  &nbsp;&nbsp;
                  <Typography sx={{ fontSize: "14px" }}>57546574</Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Typography sx={{ fontWeight: 600, fontSize: "13px" }}>
                    Routing No:
                  </Typography>
                  &nbsp;&nbsp;
                  <Typography sx={{ fontSize: "14px" }}>57546574</Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Typography sx={{ fontWeight: 600, fontSize: "14px" }}>
                    Bank Address:
                  </Typography>
                  <Typography>Rue du Rhône 67 - 1204 Genève</Typography>
                </Box>

                <Box>
                  <CopyToClipboard
                    // style={{
                    //   marginRight: "10px",
                    //   textAlign: "center",
                    //   cursor: "pointer",
                    // }}
                    text={copy}
                  >
                    <Button
                      type='submit'
                      variant='contained'
                      sx={{
                        height: "25px",
                        fontSize: "12px",
                        textTransform: "capitalize",
                        marginTop: 2,
                        // m: "20px ",
                      }}
                    >
                      Copy to clipboard
                    </Button>
                  </CopyToClipboard>
                </Box>
                {/* </Button> */}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default DepositBankdetails;
