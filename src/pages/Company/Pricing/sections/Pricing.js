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

// import axios from "axios";

// Imags
const bgImage =
  "https://images.unsplash.com/photo-1467541473380-93479a5a3ffa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=2246&amp;q=80";

function Pricing() {
  const [activeTab, setActiveTab] = useState(0);
  const [tabType, setTabType] = useState("rial");
  const [buttonDisable, setButtonDisable] = useState(false);
  console.log(buttonDisable);
  const handleTabType = ({ currentTarget }, newValue) => {
    setActiveTab(newValue);
    setTabType(currentTarget.id);
  };

  const handlePaymentRial = ({ id }) => {
    if (id === 1) window.location = "https://zarinp.al/423697";
    else if (id === 2) window.location = "https://zarinp.al/423704";
    else if (id === 3) window.location = "https://zarinp.al/423709";
  };
  const handlePayment = ({ id }) => {
    setButtonDisable(true);
    fetch(`${process.env.REACT_APP_SERVER_PAYMENT_DEV}/create-checkout-session`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        items: [{ id }],
      }),
    })
      .then((res) => {
        if (res.ok) return res.json();
        return res.json().then((json) => Promise.reject(json));
      })
      .then(({ url }) => {
        window.location = url;
      })
      .catch((e) => {
        console.error(e.error);
      });
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
              badgeContent="دوره ها"
              variant="gradient"
              container
              color="dark"
              sx={{ mb: 1 }}
            />
            <MKTypography variant="h3" color="white" mb={2}>
              مشاهده پکیج های کوچینگ
            </MKTypography>
            <MKTypography variant="body2" color="white">
              پرداخت از طریق شبکه بانکی شتاب و همچنین پرداخت بین المللی امکان پذیر است
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
                    id="rial"
                    label={
                      <MKBox py={0.5} px={2} color="inherit">
                        پرداخت ریالی
                      </MKBox>
                    }
                  />
                  <Tab
                    id="eur"
                    label={
                      <MKBox py={0.5} px={2} color="inherit">
                        پرداخت ارزی
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
                  badge={{ color: "light", label: tabType === "rial" ? "مشاوره" : "Consultant" }}
                  price={{
                    currency: tabType === "rial" ? "تومان" : "€",
                    value: tabType === "rial" ? "۷۲۵،۰۰۰" : 25,
                    type: tabType === "rial" ? "یک جلسه" : "One-Session",
                  }}
                  specifications={[
                    {
                      label:
                        tabType === "rial"
                          ? "یک جلسه‌ی سی دقیقه‌ای تصویری با آذر"
                          : "30 minutes weekly One-by-One nutrition coaching video calls",
                      includes: true,
                    },
                    {
                      label:
                        tabType === "rial"
                          ? "مشاوره تغذیه و لایف استایل اختصاصی"
                          : "Centering on teaching you about smarter meal plan",
                      includes: true,
                    },
                    {
                      label: tabType === "rial" ? "" : "vat is not included in the price",
                      includes: true,
                    },
                  ]}
                  action={{
                    type: "external",
                    onClick:
                      tabType === "rial"
                        ? () => handlePaymentRial({ id: 1 })
                        : () => handlePayment({ id: 1 }),
                    color: "info",
                    label: tabType === "rial" ? "خرید " : "Buy",
                  }}
                />
              </Grid>
              <Grid item xs={12} lg={4}>
                <DefaultPricingCard
                  badge={{ color: "info", label: tabType === "rial" ? "دوره یک ماهه" : "Monthly" }}
                  price={{
                    currency: tabType === "rial" ? "تومان" : "€",
                    value: tabType === "rial" ? "۲،۹۰۰،۰۰۰" : 97,

                    type: tabType === "rial" ? "در ماه" : "monthly",
                  }}
                  specifications={[
                    {
                      label:
                        tabType === "rial"
                          ? "چهار جلسه‌ی سی دقیقه‌ای تصویری با آذر"
                          : "30 minutes weekly One-by-One nutrition coaching video calls",
                      includes: true,
                    },
                    {
                      label:
                        tabType === "rial"
                          ? "مشاوره تغذیه و لایف استایل اختصاصی"
                          : "Centering on teaching you about smarter meal plan",
                      includes: true,
                    },
                    {
                      label:
                        tabType === "rial"
                          ? "با توجه به نیاز و هدف متقاضی"
                          : "Supporting you to clean weight-loss, be shape and gain more muscle",
                      includes: true,
                    },

                    { label: tabType === "rial" ? "پشتیبانی" : "Chat Support", includes: true },
                    {
                      label: tabType === "rial" ? "" : "vat is not included in the price",
                      includes: true,
                    },
                  ]}
                  action={{
                    type: "external",
                    disabled: buttonDisable,
                    color: "info",
                    onClick:
                      tabType === "rial"
                        ? () => handlePaymentRial({ id: 2 })
                        : () => handlePayment({ id: 2 }),
                    label: tabType === "rial" ? "خرید " : "Buy",
                  }}
                />
              </Grid>
              <Grid item xs={12} lg={4}>
                <DefaultPricingCard
                  color="dark"
                  badge={{ color: "light", label: tabType === "rial" ? "دوره سه ماهه" : "3-Month" }}
                  price={{
                    currency: tabType === "rial" ? "تومان" : "€",
                    value: tabType === "rial" ? "۶،۹۷۵،۰۰۰" : 235,
                    oldvaluetitle: tabType === "rial" ? " ارزش دوره :" : "Value: ",
                    oldvalue: tabType === "rial" ? " ۸،۷۰۰،۰۰۰" : 291,
                    type: tabType === "rial" ? "سه ماهه" : "3-Month",
                  }}
                  specifications={[
                    {
                      label:
                        tabType === "rial"
                          ? "دوازده جلسه‌ی سی دقیقه‌ای  تصویری با آذر"
                          : "30 minutes weekly One-by-One nutrition coaching video calls",
                      includes: true,
                    },
                    {
                      label:
                        tabType === "rial"
                          ? "مشاوره تغذیه و لایف استایل اختصاصی"
                          : "Centering on teaching you about smarter meal plan",
                      includes: true,
                    },
                    {
                      label:
                        tabType === "rial"
                          ? "با توجه به نیاز و هدف متقاضی"
                          : "Supporting you to clean weight-loss, be shape and gain more muscle",
                      includes: true,
                    },

                    { label: tabType === "rial" ? "پشتیبانی" : "Chat Support", includes: true },
                    {
                      label: tabType === "rial" ? "" : "vat is not included in the price",
                      includes: true,
                    },
                  ]}
                  action={{
                    type: "external",
                    onClick:
                      tabType === "rial"
                        ? () => handlePaymentRial({ id: 3 })
                        : () => handlePayment({ id: 3 }),
                    color: "light",
                    label: tabType === "rial" ? "خرید " : "Buy",
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
