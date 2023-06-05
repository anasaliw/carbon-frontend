import * as React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Profile from "../Profile/Profile";
import { styled } from "@mui/material";
import ChangeTransFee from "./ChangeTransFee";
import ChangeBuyFee from "./ChangeBuyFee";
import ProcessingFee from "./ProcessingFee";
import SellFee from "./SellFee";
import RetiredFee from "./RetiredFee";
import TokenWithdrawalFee from "./TokenWithdrawalFee";
import WalletGenFIATWithdrawalFee from "./WalletGenFIATWithdrawalFee";
import FundingFee from "./FundingFee";

const TabBox = styled(Tab)`
  font-size: 12px;
  color: black;
  text-transform: none;
`;

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function AdminSettings() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Box
      sx={{ bgcolor: "transparent", maxWidth: { xs: "100vw", sm: "100vw" } }}
    >
      {/* <AppBar position='static' sx={{ bgcolor: "transparent" }}> */}
      <Tabs
        allowScrollButtonsMobile
        value={value}
        onChange={handleChange}
        // indicatorColor='secondary'
        // textColor='black'
        // variant='fullWidth'
        // aria-label='full width tabs example'
        variant='scrollable'
        scrollButtons='auto'
        aria-label='scrollable auto tabs example'
        sx={{
          color: "black",
          overflowX: "hidden",
          "& > button": {
            // fontSize: "10px",
            color: "black",
          },
        }}
      >
        <TabBox label='Profile' {...a11yProps(0)} />
        <TabBox label='Change Transaction Fee' {...a11yProps(1)} />
        <TabBox label='Change Buy Fee' {...a11yProps(2)} />
        <TabBox label='Processing Fee' {...a11yProps(3)} />
        <TabBox label='Sell Fee' {...a11yProps(4)} />
        <TabBox label='Retired Fee' {...a11yProps(5)} />
        <TabBox label='Token Withdrawal Fee' {...a11yProps(6)} />
        <TabBox label='Wallet Gen FIAT Withdrawal Fee' {...a11yProps(7)} />
        <TabBox label='Funding Fee' {...a11yProps(8)} />
      </Tabs>
      {/* </AppBar> */}
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <Profile />
          {/* hello */}
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <ChangeTransFee />
          {/* hello */}
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <ChangeTransFee />

          {/* <ChangeBuyFee /> */}
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
          <ChangeTransFee />

          {/* <ProcessingFee /> */}
        </TabPanel>
        <TabPanel value={value} index={4} dir={theme.direction}>
          <ChangeTransFee />

          {/* <SellFee /> */}
        </TabPanel>
        <TabPanel value={value} index={5} dir={theme.direction}>
          <ChangeTransFee />

          {/* <RetiredFee /> */}
        </TabPanel>
        <TabPanel value={value} index={6} dir={theme.direction}>
          <ChangeTransFee />

          {/* <TokenWithdrawalFee /> */}
        </TabPanel>
        <TabPanel value={value} index={7} dir={theme.direction}>
          <ChangeTransFee />

          {/* <WalletGenFIATWithdrawalFee /> */}
        </TabPanel>
        <TabPanel value={value} index={8} dir={theme.direction}>
          <ChangeTransFee />

          {/* <FundingFee /> */}
        </TabPanel>
      </SwipeableViews>
    </Box>
  );
}
