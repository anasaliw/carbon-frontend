import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "./components/Layout/Layout";

function Protected(props) {
  const { Component } = props;
  const navigate = useNavigate();

  const loggedIn = localStorage.getItem("Id");
  useEffect(() => {
    console.log("Protected", loggedIn);
    if (!loggedIn) {
      navigate("/");
    } else {
      console.log("not logged in");
    }
  }, [loggedIn]);

  return (
    <>
      <Layout>
        <Component />
      </Layout>
    </>
  );
}

export default Protected;
