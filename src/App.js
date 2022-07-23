import { useEffect } from "react";

// react-router components
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

// @mui material components
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// Material Kit 2 PRO React themes
import theme from "assets/theme";
import Presentation from "layouts/pages/presentation";

// Material Kit 2 PRO React routes
import routes from "routes";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import SignUpForm from "pages/User";

const stripePromise = loadStripe(
  "pk_test_51JSLBhAB6MVrXxqzX3ZVALadRmlc7jrW9yiykDmjKJfnPMjVQg0xtIiBqvOPcwz2r1t8VEiC7dCwQromfRjRak8W00raQ8oyLK"
);

export default function App() {
  const { pathname } = useLocation();

  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }

      if (route.route) {
        return <Route exact path={route.route} element={route.component} key={route.key} />;
      }

      return null;
    });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Elements stripe={stripePromise}>
        <Routes>
          {getRoutes(routes)}
          <Route path="/" element={<Presentation />} />
          <Route path="/success" element={<SignUpForm />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Elements>
    </ThemeProvider>
  );
}
