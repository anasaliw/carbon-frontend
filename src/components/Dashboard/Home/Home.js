import { Box, Typography, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import bgImage from "./black.jpg";
import { useTheme } from "@mui/material/styles";
import { TheGraph, Trade, TransmitSqaure2, Ontology } from "iconsax-react";
import { useSelector } from "react-redux";

const Home = () => {
  let theme = useTheme();

  const userResData = useSelector((state) => state.getUserReducer);

  const [borderClr, setBorderClr] = useState("none");
  const [borderClr2, setBorderClr2] = useState("none");
  const [borderClr3, setBorderClr3] = useState("none");

  console.log("ResposneFromHome", userResData);
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  return (
    <Box
      sx={{
        width: "100%",
        height: "50vh",
        backgroundImage: `url(${bgImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* <Box>
        <Box
          sx={{
            border: "1px solid red",
          }}
        >
          <Typography sx={{ color: "white" }}>Welcome On Board</Typography>
        </Box>
      </Box> */}
      <Box
        sx={{
          width: "100%",
          // border: "1px solid white",
          height: "65vh",
          display: "flex",
          flexDirection: "row",
          alignItems: "end",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: "30%",
            height: "35vh",
            border: `2px solid ${borderClr}`,
            backgroundColor: "white",
            boxShadow: 4,
            cursor: "pointer",
            borderRadius: "10px 50px",
          }}
          onMouseEnter={() => setBorderClr(theme.palette.primary.main)}
          onMouseLeave={() => setBorderClr("none")}
        >
          <Box
            sx={{
              height: "35vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box>
              <Trade color={theme.palette.primary.main} size={50} />
            </Box>
            <Box>
              <Typography sx={{ fontSize: "18px" }}>Total Minted</Typography>
            </Box>
            <Box>
              <Typography sx={{ fontSize: "14px" }}>
                {formatter.format(3000)} USD
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            width: "30%",
            height: "35vh",
            border: `2px solid ${borderClr2}`,
            backgroundColor: "white",
            boxShadow: 4,
            cursor: "pointer",
            ml: "10px",
            mr: "10px",
            borderRadius: "10px 50px",
          }}
          onMouseEnter={() => setBorderClr2(theme.palette.primary.main)}
          onMouseLeave={() => setBorderClr2("none")}
        >
          <Box
            sx={{
              height: "35vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box>
              <TransmitSqaure2 color={theme.palette.primary.main} size={50} />
            </Box>
            <Box>
              <Typography sx={{ fontSize: "18px" }}>Transfer out</Typography>
            </Box>
            <Box>
              <Typography sx={{ fontSize: "14px" }}>
                {formatter.format(2500)} USD
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            width: "30%",
            height: "35vh",
            border: `2px solid ${borderClr3}`,
            boxShadow: 4,
            backgroundColor: "white",
            cursor: "pointer",
            borderRadius: "10px 50px",
          }}
          onMouseEnter={() => setBorderClr3(theme.palette.primary.main)}
          onMouseLeave={() => setBorderClr3("none")}
        >
          <Box
            sx={{
              height: "35vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box>
              <Ontology color={theme.palette.primary.main} size={50} />
            </Box>
            <Box>
              <Typography sx={{ fontSize: "18px" }}>Retired</Typography>
            </Box>
            <Box>
              <Typography sx={{ fontSize: "14px" }}>
                {formatter.format(2000)} USD
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
