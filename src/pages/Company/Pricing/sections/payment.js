// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import { useLocation } from "react-router-dom";

// Material Kit 2 PRO React examples
import DefaultPricingCard from "examples/Cards/PricingCards/DefaultPricingCard";

// import axios from "axios";
// Imags

function PaymentForClass() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const stripeId = searchParams.get("stripe_id");
  console.log(stripeId);

  const handleOnePayment = () => {
    fetch(`${process.env.REACT_APP_SERVER_PAYMENT}/subscription`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        items: [{ stripeId: stripeId, priceId: "price_1Ls4UvAB6MVrXxqzI5vvNVDZ" }],
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
        console.log(e);
      });
  };
  return (
    <MKBox component="section" py={{ xs: 0, lg: 7 }}>
      <MKBox
        borderRadius="xl"
        shadow="lg"
        sx={{
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
            <MKTypography variant="h3" color="white" mb={2}></MKTypography>
          </Grid>
        </Container>
      </MKBox>
      <MKBox mt={-16}>
        <Container>
          <Grid container sx={{ mb: 6 }}>
            <Grid item xs={7} md={6} lg={4} sx={{ mx: "auto", textAlign: "center" }}></Grid>
          </Grid>
          <MKBox position="relative" zIndex={10} px={{ xs: 1, sm: 0 }}>
            <Grid container spacing={3} justifyContent="center">
              <Grid item xs={12} lg={4}>
                <DefaultPricingCard
                  badge={{ color: "light", label: "دوره کوچینگ" }}
                  price={{
                    currency: "€",
                    value: 97,
                    type: "ماهیانه",
                  }}
                  specifications={[
                    {
                      label: " چهار جلسه‌ی سی دقیقه‌ای تصویری با آذر",
                      includes: true,
                    },
                    {
                      label: "مشاوره تغذیه و لایف استایل اختصاصی",
                      includes: true,
                    },
                    {
                      label: "مالیات بر ارزش افزوده ممکن است به مبلغ اضافه شود",
                      includes: true,
                    },
                  ]}
                  action={{
                    type: "external",
                    onClick: () => handleOnePayment(),
                    color: "info",
                    label: "پرداخت",
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

export default PaymentForClass;
