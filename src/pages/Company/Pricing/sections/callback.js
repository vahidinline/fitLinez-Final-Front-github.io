import Container from "@mui/material/Container";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import Grid from "@mui/material/Grid";
import { useEffect, useState } from "react";

function CallBack() {
  const [status, setStatus] = useState("");
  const [authority, setAuthority] = useState("");
  const sendData = async () => {
    await fetch("http://localhost:8080/payment/callback", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status, authority }),
    });
  };
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const status = urlParams.get("Status");
    const authority = urlParams.get("Authority");
    setStatus(status);
    setAuthority(authority);
    sendData();
  }, [status, authority]);

  console.log(status, authority);
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
          {status === "OK" ? (
            <MKTypography variant="h2" fontWeight="700" mb={2}>
              پرداخت شما با موفقیت انجام شد
            </MKTypography>
          ) : (
            <MKTypography variant="h2" fontWeight="700" mb={2}>
              پرداخت انجام نشد
            </MKTypography>
          )}
        </Grid>
      </Container>
    </MKBox>
  );
}

export default CallBack;
