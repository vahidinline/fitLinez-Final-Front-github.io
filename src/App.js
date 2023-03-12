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
import SignUpForm from "pages/User";
import Thankyou from "pages/User/thanks";
import CallBack from "pages/Company/Pricing/sections/callback";
import PaymentForClass from "pages/Company/Pricing/sections/payment";

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

      <Routes>
        {getRoutes(routes)}
        <Route path="/" element={<Presentation />} />
        <Route path="/success" element={<SignUpForm />} />
        <Route path="/thankyou" element={<Thankyou />} />
        <Route path="/callback" element={<CallBack />} />
        <Route path="/singlepayment" element={<PaymentForClass />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </ThemeProvider>
  );
}
