import React from "react";
import {
  CardElement,
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";

import { PaymentElement } from "@stripe/react-stripe-js";
import axios from "axios";
import { useState } from "react";
import { Button, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { paymentAction } from "../../Redux/actions";

const CARD_OPTIONS = {
  iconStyle: "solid",
  style: {
    base: {
      iconColor: "#c4f0ff",
      color: "black",
      fontWeight: 500,
      fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
      fontSize: "16px",
      fontSmoothing: "antialiased",
      ":-webkit-autofill": { color: "#fce883" },
      "::placeholder": { color: "#87bbfd" },
    },
    invalid: {
      iconColor: "#red",
      color: "#red",
    },
  },
};

function PaymentForm() {
  const dispatch = useDispatch();
  const [success, setSuccess] = useState(false);
  const elements = useElements();
  const stripe = useStripe();
  const amount = 1000;
  // console.log(elements.getElement(CardElement));
  const handleSubmit = async (e) => {
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(
        CardNumberElement,
        CardCvcElement,
        CardExpiryElement
        // CardElement
      ),
    });
    console.log(paymentMethod);

    if (!error) {
      const { id } = paymentMethod;
      dispatch(paymentAction(amount, id));
    } else {
      console.log(error.message);
    }
  };
  const paymentResponse = useSelector((state) => state.paymentReducer);

  return (
    <>
      {!success ? (
        <>
          <fieldset style={{ marginTop: "100px" }}>
            <CardElement options={CARD_OPTIONS} />
            {/* <PaymentElement /> */}
          </fieldset>
          {/* <fieldset style={{ marginTop: "100px" }}>
            <CardNumberElement options={CARD_OPTIONS} />
          </fieldset>
          <fieldset style={{ marginTop: "100px" }}>
            <CardExpiryElement options={CARD_OPTIONS} />
          </fieldset>
          <fieldset style={{ marginTop: "100px" }}>
            <CardCvcElement options={CARD_OPTIONS} />
          </fieldset> */}

          <Button onClick={handleSubmit}>Pay</Button>
        </>
      ) : (
        <Typography variant='h2'>Thank you for buying Iphone</Typography>
      )}
    </>
  );
}

export default PaymentForm;
