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
                  price={{
                    currency: tabType === "rial" ? "ریال" : "€",
                    value: tabType === "rial" ? "5,000,000" : 17,
                    type: "mo",
                  }}
                  specifications={[
                    {
                      label: "30-minute nutrition and lifeStyle consultation session with Azar",
                      includes: true,
                    },
                    {
                      label: "Centering on teaching you about smarter meal plan",
                      includes: true,
                    },
                  ]}
                  action={{
                    type: "external",
                    route:
                      tabType === "eur"
                        ? "https://buy.stripe.com/dR6aFU0N62h0aMU8wB"
                        : "https://zarinp.al/423697",
                    color: "dark",
                    label: tabType === "eur" ? "join" : "ثبت نام",
                  }}
                />
              </Grid>
              <Grid item xs={12} lg={4}>
                <DefaultPricingCard
                  color="dark"
                  badge={{ color: "info", label: "premium" }}
                  price={{
                    currency: tabType === "rial" ? "ریال" : "€",
                    value: tabType === "rial" ? "29,000,000" : 97,
                    type: "mo",
                  }}
                  specifications={[
                    {
                      label: "30 minutes weekly One-by-One nutrition coaching video calls",
                      includes: true,
                    },
                    { label: "Centering on teaching you about smarter meal plan", includes: true },
                    {
                      label: "Supporting you to clean weight-loss, be shape and gain more muscle",
                      includes: true,
                    },

                    { label: "Chat Support", includes: true },
                  ]}
                  action={{
                    type: "external",
                    route:
                      tabType === "eur"
                        ? "https://buy.stripe.com/dR64hw1Ra9Js4owcMQ"
                        : "https://zarinp.al/423704",
                    color: "info",
                    label: tabType === "eur" ? "join" : "ثبت نام",
                  }}
                />
              </Grid>
              <Grid item xs={12} lg={4}>
                <DefaultPricingCard
                  badge={{ color: "light", label: "enterprise" }}
                  price={{
                    currency: tabType === "rial" ? "ریال" : "€",
                    value: tabType === "rial" ? "69,750,000" : 235,
                    type: "mo",
                  }}
                  specifications={[
                    {
                      label: "30 minutes weekly One-by-One nutrition coaching video calls",
                      includes: true,
                    },
                    { label: "Centering on teaching you about smarter meal plan", includes: true },
                    {
                      label: "Supporting you to clean weight-loss, be shape and gain more muscle",
                      includes: true,
                    },
                  ]}
                  action={{
                    type: "external",
                    route:
                      tabType === "eur"
                        ? "https://buy.stripe.com/4gwaFU3ZicVE3ks6ou"
                        : "https://zarinp.al/423709",
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
