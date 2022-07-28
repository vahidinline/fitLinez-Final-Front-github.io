// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";

import MKTypography from "components/MKTypography";
import MKAlert from "components/MKAlert";

function Thankyou() {
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid
          container
          item
          justifyContent="center"
          xs={10}
          lg={7}
          mx="auto"
          mb={{ xs: 0, md: 6 }}
          textAlign="center"
        >
          <MKTypography variant="h3" mb={1}>
            Register form
          </MKTypography>
          <Grid item xs={12}>
            <MKAlert color="success">
              Thank you for submit your information. we will contact you
            </MKAlert>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Thankyou;
