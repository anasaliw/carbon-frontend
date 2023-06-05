import React from "react";
import Login from "./components/Login/login";
import Register from "./components/Register/Register";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./Style/Style";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./components/Dashboard/Home/Home";
import Profile from "./components/Profile/Profile";
import StripeContainer from "./components/StripePayment/StripeContainer";
import Protected from "./Protected";
import ForgetPassword from "./components/ForgetPassword/ForgetPassword";
import BasketComposition from "./components/BasketComposition/BasketComposition";
import ProfileManagement from "./components/ProfileManagement/ProfileManagement";
import EditBasket from "./components/BasketComposition/EditBasket";
import PendingApproval from "./components/PendingApproval/PendingApproval";
import EditUser from "./components/ManageUsers/EditUser";
import AllUser from "./components/ManageUsers/AllUser";
import ManageSingleUser from "./components/ManageUsers/ManageSingleUser";
import DepositAmount from "./components/FIAT-USER/DepositAmount";
import ApproveDeposit from "./components/FIAT/ApproveDeposit";
import ViewDeposit from "./components/FIAT-USER/ViewDeposit";
import GenWallet from "./components/Wallet/GenWallet";
import CreateCrypto from "./components/CreateCrypto/CreateCrypto";
import ManageRole from "./components/Role/ManageRole";
import WithdrawCrypto from "./components/CreateCrypto/WithdrawCrypto";
import WithdrawFiat from "./components/FIAT-USER/WithdrawFiat";
import ApproveWithdrawFiat from "./components/FIAT/ApproveWithdrawFiat";
import Transaction from "./components/Transaction/Transaction";
import DepositBankdetails from "./components/FIAT-USER/DepositBankdetails";
import AdminSettings from "./components/AdminSettings/AdminSettings";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route
          path='/api/v1/password/reset/:token'
          element={<ForgetPassword />}
        />
        {/* <Route
          path='/dashboard'
          element={
            <Layout>
              <Home />
            </Layout>
          }
        /> */}

        <Route path='/dashboard' element={<Protected Component={Home} />} />

        <Route
          path='/UpdateProfile'
          element={<Protected Component={Profile} />}
        />
        <Route
          path='/basket'
          element={<Protected Component={BasketComposition} />}
        />
        <Route path='/EditUser' element={<Protected Component={EditUser} />} />
        <Route
          path='/payment'
          element={<Protected Component={StripeContainer} />}
        />
        <Route
          path='/profileManagement'
          element={<Protected Component={ProfileManagement} />}
        />
        <Route
          path='/editBasket'
          element={<Protected Component={EditBasket} />}
        />
        <Route path='/allUsers' element={<Protected Component={AllUser} />} />
        <Route
          path='/allUsers/singleUser/:id'
          element={<Protected Component={ManageSingleUser} />}
        />
        <Route path='/pendingReq' element={<PendingApproval />} />
        <Route
          path='/depositAmount'
          element={<Protected Component={DepositAmount} />}
        />
        <Route
          path='/depositBankDetails'
          element={<Protected Component={DepositBankdetails} />}
        />
        <Route
          path='/withdrawFiat'
          element={<Protected Component={WithdrawFiat} />}
        />
        <Route
          path='/depositAmount/viewDeposit'
          element={<Protected Component={ViewDeposit} />}
        />
        <Route
          path='/genWallet'
          element={<Protected Component={GenWallet} />}
        />
        <Route
          path='/createCrypto'
          element={<Protected Component={CreateCrypto} />}
        />
        <Route
          path='/manageRole'
          element={<Protected Component={ManageRole} />}
        />
        <Route
          path='/withdrawCrypto'
          element={<Protected Component={WithdrawCrypto} />}
        />
        <Route
          path='/approveDeposit'
          element={<Protected Component={ApproveDeposit} />}
        />
        <Route
          path='/approveWithdrawFiat'
          element={<Protected Component={ApproveWithdrawFiat} />}
        />
        <Route
          path='/transactions'
          element={<Protected Component={Transaction} />}
        />
        <Route
          path='/adminSettings'
          element={<Protected Component={AdminSettings} />}
        />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
