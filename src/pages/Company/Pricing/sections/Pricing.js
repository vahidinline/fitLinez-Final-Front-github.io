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

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKBadge from "components/MKBadge";
import MKTypography from "components/MKTypography";

// Material Kit 2 PRO React examples
import SimplePricingCard from "examples/Cards/PricingCards/SimplePricingCard";

// Images
import bgPattern from "assets/images/shapes/pattern-lines.svg";

function Pricing() {
  return (
    <>
      <MKBox position="relative" variant="gradient" bgColor="info" mt={{ xs: 0, lg: 12 }} mx={-2}>
        <MKBox
          component="img"
          src={bgPattern}
          alt="background-pattern"
          position="absolute"
          top={0}
          left={0}
          width={{ xs: "auto", lg: "100%" }}
          height={{ xs: "100%", lg: "auto" }}
          opacity={0.6}
        />
        <Container>
          <Grid container justifyContent="center" sx={{ pt: 6, pb: 18 }}>
            <Grid item xs={12} md={7} sx={{ textAlign: "center" }}>
              <MKBadge badgeContent="pricing" color="dark" size="sm" container sx={{ mb: 1 }} />
              <MKTypography variant="h3" color="white" mb={1}>
                Ready to get FIT?
              </MKTypography>
              <MKTypography variant="body2" color="white">
                Based on the your need, we will have several options for you.
              </MKTypography>
            </Grid>
          </Grid>
        </Container>
      </MKBox>
      <MKBox mt={-19}>
        <Container>
          <Grid container spacing={3} sx={{ mt: 6 }}>
            <Grid item xs={12} sm={4} lg={4}>
              <div id="pricing" />
              <SimplePricingCard
                color="dark"
                title="Nutrition Consultantion"
                description="30-minute Session"
                price={{ value: "€17" }}
                action={{
                  type: "external",
                  route: "https://buy.stripe.com/dR6aFU0N62h0aMU8wB",
                  label: "buy now",
                }}
                specifications={[
                  "30-minute nutrition and lifeStyle consultation session with Azar",
                ]}
              />
            </Grid>
            <Grid item xs={12} sm={4} lg={4}>
              <SimplePricingCard
                color="dark"
                title="Nutrition Coaching, One-Month"
                description="Monthly"
                price={{ value: "€97" }}
                action={{
                  type: "external",
                  route: "https://buy.stripe.com/dR64hw1Ra9Js4owcMQ",
                  label: "buy now",
                }}
                specifications={[
                  "30 minutes weekly One-by-One nutrition coaching video calls",
                  "Centering on teaching you about smarter meal plan",
                  "Supporting you to clean weight-loss, be shape and gain more muscle",
                  "Chat support",
                ]}
              />
            </Grid>
            <Grid item xs={12} sm={4} lg={4}>
              <SimplePricingCard
                variant="gradient"
                color="dark"
                title="Nutrition Coaching, Three-Month"
                description="quarterly"
                price={{ value: "€235" }}
                action={{
                  type: "external",
                  route: "https://buy.stripe.com/4gwaFU3ZicVE3ks6ou",
                  label: "buy now",
                }}
                specifications={[
                  "30 minutes weekly One-by-One nutrition coaching video calls",
                  "Centering on teaching you about smarter meal plan",
                  "Supporting you to clean weight-loss, be shape and gain more muscle",
                  "Chat support",
                ]}
              />
            </Grid>
          </Grid>
          <Grid
            container
            item
            xs={12}
            flexDirection="column"
            sx={{ alignItems: "center", paddingTop: "30px" }}
          >
            <Grid container item xs={12} flexDirection="column" sx={{ textAlign: "center" }}>
              <MKTypography variant="body2" color="text" mt={6} mb={3} mx="auto">
                <Icon>lock</Icon> Secured Payment by <b>Stripe</b> with:
              </MKTypography>
              <MKTypography variant="body2" color="text" mb={2} mx="auto">
                <i className="fa fa-cc-paypal fa-2x" />
                &nbsp;
                <i className="fa fa-cc-visa fa-2x" />
                &nbsp;
                <i className="fa fa-cc-mastercard fa-2x" />
                &nbsp;
                <i className="fa fa-cc-amex fa-2x" />
              </MKTypography>
            </Grid>
          </Grid>
        </Container>
      </MKBox>
    </>
  );
}

export default Pricing;
