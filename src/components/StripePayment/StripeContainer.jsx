import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import PaymentForm from "./PaymentForm";

const PUBLIC_KEY =
  "pk_test_51Mh79fSEDbDyx76VmRzTfjMCZ35jkX6Ddss7mc7uI1zQo9G8ibHfa3UihftJCMT5csQfsuzEaTktAfidbWNA0Drd00VaIOGE1f";

const loadTestStripe = loadStripe(PUBLIC_KEY);

function StripeContainer() {
  const option = {
    clientSecret: "",
  };
  return (
    <>
      <Elements sx={{ marginTop: "20px" }} stripe={loadTestStripe}>
        <PaymentForm />
      </Elements>
    </>
  );
}

export default StripeContainer;
