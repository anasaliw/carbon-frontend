import React from "react";
import {
  Box,
  Button,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Slide,
  Snackbar,
  Typography,
} from "@mui/material";
import { DollarCircle } from "iconsax-react";
import QRCode from "react-qr-code";
import { useContext } from "react";
import { DataProvider } from "../../ContextAPI";

const CreateCrypto = () => {
  const { address } = useContext(DataProvider);
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
                  mb: 7,
                }}
              >
                Deposit CXT
              </Typography>
              {address ? (
                <>
                  <Box>
                    <Typography sx={{ fontWeight: 600 }} component={"span"}>
                      Address :{" "}
                    </Typography>
                    <Typography component={"span"}>{address}</Typography>
                  </Box>
                  <Box sx={{ background: "white", padding: "16px 0" }}>
                    <QRCode value={address} size={150} />
                  </Box>
                </>
              ) : (
                <Typography>Please Generate Wallet First</Typography>
              )}
            </Box>

            {/* <Button
          type='submit'
          variant='contained'
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
        </Button> */}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default CreateCrypto;
