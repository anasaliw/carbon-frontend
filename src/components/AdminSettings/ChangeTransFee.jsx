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
import { Percent } from "@mui/icons-material";

const ChangeTransFee = () => {
  const [open, setOpen] = React.useState(null);
  const [reference, setReference] = React.useState("");
  const [fee, setFee] = React.useState("0.00");

  const handleClick = () => {
    setOpen(true);
  };

  return (
    <>
      <Box
        sx={{
          width: { lg: "100%", md: "100%", sm: "98%", xs: "98%" },
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
                Fee Updated Successfully
              </Alert>
            </Collapse>
            <Typography
              sx={{
                color: "text.primary",
                fontWeight: 600,
                fontSize: "20px",
                mb: 4,
              }}
            >
              Change Transaction Fee
            </Typography>

            <InputLabel sx={{ mb: "1px", fontSize: "11px" }}>
              Fee to change
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
                  <Percent sx={{ width: "20px", fontSize: "18px" }} />
                </InputAdornment>
              }
              sx={{
                fontSize: "12px",
                height: "30px",
                width: { lg: "20%", md: "30%", sm: "30%", xs: "67%" },
                mr: "5px",
                "& input::placeholder": {
                  fontSize: "12px",
                },
              }}
              // fullWidth
              placeholder='Amount'
              type='number'
              margin='normal'
              value={fee}
              onChange={(e) => setFee(e.target.value)}
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
              mt: 2,
              mb: 10,
              // m: "20px ",
            }}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default ChangeTransFee;
