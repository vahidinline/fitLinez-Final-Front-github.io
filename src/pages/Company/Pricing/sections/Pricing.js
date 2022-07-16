// /*
// =========================================================
// * Material Kit 2 PRO React - v2.0.0
// =========================================================

// * Product Page: https://www.creative-tim.com/product/material-kit-pro-react
// * Copyright 2021 Creative Tim (https://www.creative-tim.com)

// Coded by www.creative-tim.com

//  =========================================================

// * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
// */

// // @mui material components
// import Container from "@mui/material/Container";
// import Grid from "@mui/material/Grid";
// import Icon from "@mui/material/Icon";

// // Material Kit 2 PRO React components
// import MKBox from "components/MKBox";
// import MKBadge from "components/MKBadge";
// import MKTypography from "components/MKTypography";

// // Material Kit 2 PRO React examples
// import SimplePricingCard from "examples/Cards/PricingCards/SimplePricingCard";

// // Images
// import bgPattern from "assets/images/shapes/pattern-lines.svg";

// function Pricing() {
//   return (
//     <>
//       <MKBox position="relative" variant="gradient" bgColor="info" mt={{ xs: 0, lg: 12 }} mx={-2}>
//         <MKBox
//           component="img"
//           src={bgPattern}
//           alt="background-pattern"
//           position="absolute"
//           top={0}
//           left={0}
//           width={{ xs: "auto", lg: "100%" }}
//           height={{ xs: "100%", lg: "auto" }}
//           opacity={0.6}
//         />
//         <Container>
//           <Grid container justifyContent="center" sx={{ pt: 6, pb: 18 }}>
//             <Grid item xs={12} md={7} sx={{ textAlign: "center" }}>
//               <MKBadge badgeContent="pricing" color="dark" size="sm" container sx={{ mb: 1 }} />
//               <MKTypography variant="h3" color="white" mb={1}>
//                 Ready to get FIT?
//               </MKTypography>
//               <MKTypography variant="body2" color="white">
//                 Based on the your need, we will have several options for you.
//               </MKTypography>
//             </Grid>
//           </Grid>
//         </Container>
//       </MKBox>
//       <MKBox mt={-19}>
//         <Container>
//           <Grid container spacing={3} sx={{ mt: 6 }}>
//             <Grid item xs={12} sm={4} lg={4}>
//               <div id="pricing" />
//               <SimplePricingCard
//                 color="dark"
//                 title="Nutrition Consultantion"
//                 description="30-minute Session"
//                 price={{ value: "€17" }}
//                 action={{
//                   type: "external",
//                   route: "https://buy.stripe.com/dR6aFU0N62h0aMU8wB",
//                   label: "buy now",
//                 }}
//                 specifications={[
//                   "30-minute nutrition and lifeStyle consultation session with Azar",
//                 ]}
//               />
//             </Grid>
//             <Grid item xs={12} sm={4} lg={4}>
//               <SimplePricingCard
//                 color="dark"
//                 title="Nutrition Coaching, One-Month"
//                 description="Monthly"
//                 price={{ value: "€97" }}
//                 action={{
//                   type: "external",
//                   route: "https://buy.stripe.com/dR64hw1Ra9Js4owcMQ",
//                   label: "buy now",
//                 }}
//                 specifications={[
//                   "30 minutes weekly One-by-One nutrition coaching video calls",
//                   "Centering on teaching you about smarter meal plan",
//                   "Supporting you to clean weight-loss, be shape and gain more muscle",
//                   "Chat support",
//                 ]}
//               />
//             </Grid>
//             <Grid item xs={12} sm={4} lg={4}>
//               <SimplePricingCard
//                 variant="gradient"
//                 color="dark"
//                 title="Nutrition Coaching, Three-Month"
//                 description="quarterly"
//                 price={{ value: "€235" }}
//                 action={{
//                   type: "external",
//                   route: "https://buy.stripe.com/4gwaFU3ZicVE3ks6ou",
//                   label: "buy now",
//                 }}
//                 specifications={[
//                   "30 minutes weekly One-by-One nutrition coaching video calls",
//                   "Centering on teaching you about smarter meal plan",
//                   "Supporting you to clean weight-loss, be shape and gain more muscle",
//                   "Chat support",
//                 ]}
//               />
//             </Grid>
//           </Grid>
//           <Grid
//             container
//             item
//             xs={12}
//             flexDirection="column"
//             sx={{ alignItems: "center", paddingTop: "30px" }}
//           >
//             <Grid container item xs={12} flexDirection="column" sx={{ textAlign: "center" }}>
//               <MKTypography variant="body2" color="text" mt={6} mb={3} mx="auto">
//                 <Icon>lock</Icon> Secured Payment by <b>Stripe</b> with:
//               </MKTypography>
//               <MKTypography variant="body2" color="text" mb={2} mx="auto">
//                 <i className="fa fa-cc-paypal fa-2x" />
//                 &nbsp;
//                 <i className="fa fa-cc-visa fa-2x" />
//                 &nbsp;
//                 <i className="fa fa-cc-mastercard fa-2x" />
//                 &nbsp;
//                 <i className="fa fa-cc-amex fa-2x" />
//               </MKTypography>
//             </Grid>
//           </Grid>
//         </Container>
//       </MKBox>
//     </>
//   );
// }

// export default Pricing;

/*
=========================================================
* Material Kit 2 PRO React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-pro-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useState } from "react";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKBadge from "components/MKBadge";
import MKTypography from "components/MKTypography";

// Material Kit 2 PRO React examples
import DefaultPricingCard from "examples/Cards/PricingCards/DefaultPricingCard";

// Imags
const bgImage =
  "https://images.unsplash.com/photo-1467541473380-93479a5a3ffa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=2246&amp;q=80";

function Pricing() {
  const [activeTab, setActiveTab] = useState(0);
  const [tabType, setTabType] = useState("monthly");

  const handleTabType = ({ currentTarget }, newValue) => {
    setActiveTab(newValue);
    setTabType(currentTarget.id);
  };

  return (
    <MKBox component="section" py={{ xs: 0, lg: 7 }}>
      <MKBox
        borderRadius="xl"
        shadow="lg"
        sx={{
          backgroundImage: ({ palette: { gradients }, functions: { linearGradient, rgba } }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.6),
              rgba(gradients.dark.state, 0.6)
            )}, url(${bgImage})`,
          backgroundSize: "cover",
        }}
      >
        <Container sx={{ pb: { xs: 12, lg: 22 }, pt: 12 }}>
          <Grid
            container
            item
            flexDirection="column"
            alignItems="center"
            xs={12}
            md={8}
            sx={{ mx: "auto", textAlign: "center" }}
          >
            <MKBadge
              badgeContent="pricing"
              variant="gradient"
              container
              color="dark"
              sx={{ mb: 1 }}
            />
            <MKTypography variant="h3" color="white" mb={2}>
              See our pricing
            </MKTypography>
            <MKTypography variant="body2" color="white">
              You have Free Unlimited Updates and Premium Support on each package.
            </MKTypography>
          </Grid>
        </Container>
      </MKBox>
      <MKBox mt={-16}>
        <Container>
          <Grid container sx={{ mb: 6 }}>
            <Grid item xs={7} md={6} lg={4} sx={{ mx: "auto", textAlign: "center" }}>
              <AppBar position="static">
                <Tabs value={activeTab} onChange={handleTabType}>
                  <Tab
                    id="eur"
                    label={
                      <MKBox py={0.5} px={2} color="inherit">
                        EUR
                      </MKBox>
                    }
                  />
                  <Tab
                    id="rial"
                    label={
                      <MKBox py={0.5} px={2} color="inherit">
                        Rial
                      </MKBox>
                    }
                  />
                </Tabs>
              </AppBar>
            </Grid>
          </Grid>
          <MKBox position="relative" zIndex={10} px={{ xs: 1, sm: 0 }}>
            <Grid container spacing={3} justifyContent="center">
              <Grid item xs={12} lg={4}>
                <DefaultPricingCard
                  badge={{ color: "light", label: "starter" }}
                  price={{ currency: "$", value: tabType === "rial" ? 119 : 59, type: "mo" }}
                  specifications={[
                    { label: "2 team members", includes: true },
                    { label: "20GB Cloud storage", includes: true },
                    { label: "Integration help", includes: false },
                    { label: "Sketch Files", includes: false },
                    { label: "API Access", includes: false },
                    { label: "Complete documentation", includes: false },
                  ]}
                  action={{
                    type: tabType === "eur" ? "internal" : "external",
                    route: tabType === "eur" ? "join" : "ثبت نام",
                    color: "dark",
                    label: tabType === "eur" ? "join" : "ثبت نام",
                  }}
                />
              </Grid>
              <Grid item xs={12} lg={4}>
                <DefaultPricingCard
                  color="dark"
                  badge={{ color: "info", label: "premium" }}
                  price={{ currency: "$", value: tabType === "rial" ? 159 : 89, type: "mo" }}
                  specifications={[
                    { label: "10 team members", includes: true },
                    { label: "40GB Cloud storage", includes: true },
                    { label: "Integration help", includes: true },
                    { label: "Sketch Files", includes: true },
                    { label: "API Access", includes: false },
                    { label: "Complete documentation", includes: false },
                  ]}
                  action={{
                    type: "external",
                    route:
                      tabType === "eur"
                        ? "https://buy.stripe.com/dR6aFU0N62h0aMU8wB"
                        : "https://zarinp.al/423697",
                    color: "info",
                    label: tabType === "eur" ? "join" : "ثبت نام",
                  }}
                />
              </Grid>
              <Grid item xs={12} lg={4}>
                <DefaultPricingCard
                  badge={{ color: "light", label: "enterprise" }}
                  price={{ currency: "$", value: tabType === "rial" ? 99 : 399, type: "mo" }}
                  specifications={[
                    { label: "Unlimited team members", includes: true },
                    { label: "100GB Cloud storage", includes: true },
                    { label: "Integration help", includes: true },
                    { label: "Sketch Files", includes: true },
                    { label: "API Access", includes: true },
                    { label: "Complete documentation", includes: true },
                  ]}
                  action={{
                    type: "internal",
                    route: tabType === "eur" ? "join" : "ثبت نام",
                    color: "dark",
                    label: tabType === "eur" ? "join" : "ثبت نام",
                  }}
                />
              </Grid>
            </Grid>
          </MKBox>
        </Container>
      </MKBox>
    </MKBox>
  );
}

export default Pricing;
