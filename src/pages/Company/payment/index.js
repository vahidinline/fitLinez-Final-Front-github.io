import React, { useState } from "react";
import axios from "axios";
// MUI Components
import { Button, Card, Grid, TextField } from "@mui/material/";
import { useNavigate } from "react-router-dom";

// stripe
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
// Util imports

import CardInput from "./CardInput";

function HomePage() {
  const navigate = useNavigate();

  // State
  const [email, setEmail] = useState("");
  // const [amount, setAmount] = useState("");
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmitPay = async () => {
    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    const res = await axios.post("http://localhost:8080/pay", { email });

    const clientSecret = res.data.client_secret;

    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          email,
        },
      },
    });

    if (result.error) {
      // Show error to your customer (e.g., insufficient funds)
      console.log(result.error.message);
    } else {
      // The payment has been processed!
      if (result.paymentIntent.status === "succeeded") {
        navigate(`/${email}`);
        // Show a success message to your customer
        // There's a risk of the customer closing the window before callback
        // execution. Set up a webhook or plugin to listen for the
        // payment_intent.succeeded event that handles any business critical
        // post-payment actions.
      }
    }
  };

  return (
    <Grid container p={10} margin="35vh auto">
      <Grid item xs={12} md={6}>
        <>
          <>
            <TextField
              label="Email"
              id="outlined-email-input"
              helperText={`Email you'll recive updates and receipts on`}
              margin="normal"
              variant="outlined"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              fullWidth
            />
            <CardInput />
            <Card>
              <Button variant="contained" color="primary" onClick={handleSubmitPay}>
                Pay
              </Button>
            </Card>
          </>
        </>
      </Grid>
    </Grid>
  );
}

export default HomePage;
