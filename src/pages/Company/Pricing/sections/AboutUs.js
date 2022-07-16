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
import MKTypography from "components/MKTypography";
import bgImage from "assets/images/bg-presentation.jpg";

function AboutUs() {
  const data = [
    {
      icon: "credit_card",
      title: "Global payments in a single integration",
      items: ["120+ global currenices", "Global payment"],
    },
    {
      icon: "support_agent",
      title: "Daily email, phone and chat support",
      items: ["Daily support", "Fast responses"],
    },
  ];

  return (
    <MKBox
      component="section"
      py={12}
      px={1}
      sx={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "top",
        display: "grid",
        placeItems: "center",
      }}
    >
      <Container>
        <Grid container item xs={12} lg={8}>
          <MKTypography variant="h3">Read More About FitLinez</MKTypography>
          <MKTypography variant="body2" fontWeight="regular" color="text">
            Pain is what we go through as we become older. We get insulted by others, lose trust for
            those others. We get back stabbed by friends. It becomes harder for us to give others a
            hand.
          </MKTypography>
        </Grid>
        <Grid container sx={{ mt: 6 }}>
          {data.map(({ icon, title, items }) => (
            <Grid key={icon} item xs={12} md={4}>
              <MKBox py={2} pr={2}>
                <MKTypography variant="h3" color="info">
                  <Icon>{icon}</Icon>
                </MKTypography>
                <MKTypography variant="h5" mt={2} mb={3}>
                  {title}
                </MKTypography>
                {items.map((item) => (
                  <MKBox key={item} display="flex" lineHeight={1.25}>
                    <MKTypography variant="body1" color="info">
                      <Icon sx={{ fontWeight: "bold" }}>done</Icon>
                    </MKTypography>
                    <MKBox pl={2}>
                      <MKTypography variant="button" color="text" fontWeight="bold">
                        {item}
                      </MKTypography>
                    </MKBox>
                  </MKBox>
                ))}
              </MKBox>
            </Grid>
          ))}
        </Grid>
      </Container>
    </MKBox>
  );
}

export default AboutUs;
