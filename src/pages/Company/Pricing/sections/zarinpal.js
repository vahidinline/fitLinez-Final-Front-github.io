import Container from "@mui/material/Container";
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
import Grid from "@mui/material/Grid";

function PaymentZarinPal() {
  const handlePayment = async () => {
    const response = await fetch("https://jobitta.com/payment/rial", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: "user@example.com", amount: 1000 }),
    });

    const data = await response.json();

    if (data.success) {
      window.location = data.url;
    }
  };

  return (
    <MKBox>
      <Container
        sx={{
          pb: { xs: 12, lg: 22 },
          pt: 12,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <Grid
          container
          item
          flexDirection="column"
          alignItems="center"
          xs={12}
          md={8}
          sx={{ mx: "auto", textAlign: "center" }}
        >
          <MKTypography variant="h2" fontWeight="700" mb={2}>
            پرداخت هزینه ماهیانه اپلیکیشن فیتلاینز
          </MKTypography>
          <MKButton variant="contained" color="primary" onClick={handlePayment}>
            پرداخت ۳۰۰ هزار تومان
          </MKButton>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default PaymentZarinPal;
