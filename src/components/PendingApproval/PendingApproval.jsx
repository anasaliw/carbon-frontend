import { Button } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { logoutAction } from "../../Redux/actions";
import LogoutIcon from "@mui/icons-material/Logout";

const PendingApproval = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("Id");
    localStorage.removeItem("authToken");
    dispatch(logoutAction());
    // setAnchorEl(null);
    setTimeout(() => {
      navigate("/");
    }, 500);
  };
  return (
    <>
      <div>Please wait till admin accepts your request</div>
      <Button
        sx={{ width: "200px" }}
        variant='outlined'
        onClick={handleLogout}
        endIcon={<LogoutIcon />}
      >
        Logout
      </Button>
    </>
  );
};

export default PendingApproval;
