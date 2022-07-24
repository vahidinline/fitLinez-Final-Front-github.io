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
// import Tooltip from "@mui/material/Tooltip";
// import Icon from "@mui/material/Icon";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
// import MKButton from "components/MKButton";
// import MKAvatar from "components/MKAvatar";
import MKTypography from "components/MKTypography";

// Material Kit 2 PRO React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
// import DefaultFooter from "examples/Footers/DefaultFooter";

// VirtualReality page components
// import TodoList from "pages/Extra/VirtualReality/components/TodoList";
// import TodoCard from "pages/Extra/VirtualReality/components/TodoCard";
// import Emails from "pages/Extra/VirtualReality/components/Emails";
// import MediaPlayer from "pages/Extra/VirtualReality/components/MediaPlayer";
// import Messages from "pages/Extra/VirtualReality/components/Messages";

// Routes
import routes from "routes";
// import footerRoutes from "footer.routes";

// Images
// import bgImage from "assets/images/vr-bg.jpg";
// import team1 from "assets/images/team-1.jpg";
// import sunCloud from "assets/images/small-logos/icon-sun-cloud.png";
import Calculator from "pages/Presentation/sections/calculator";

function VirtualReality() {
  return (
    <>
      <DefaultNavbar routes={routes} />
      <MKBox
        component="header"
        minHeight="100vh"
        width="100%"
        // sx={{
        //   backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
        //     `${linearGradient(
        //       rgba(gradients.dark.main, 0.6),
        //       rgba(gradients.dark.state, 0.1)
        //     )}, url(${bgImage})`,
        //   backgroundSize: "cover",
        //   backgroundPosition: "center",
        //   display: "grid",
        //   placeItems: "center",
        // }}
      >
        <Container>
          <Grid container spacing={3} justifyContent="center" pt={{ xs: 16, lg: 6 }}>
            <Grid item xs={12} md={12}>
              <Calculator />
            </Grid>
            <Grid item xs={12} lg={11} xl={8}>
              <MKBox
                display="flex"
                justifyContent="space-between"
                alignItems={{ xs: "center", md: "flex-start" }}
                ml={{ xs: 1, md: 4 }}
                mt={-1}
              >
                <MKBox>
                  <MKTypography
                    variant="h1"
                    sx={{
                      fontSize: ({ typography: { d1, h2 } }) => ({
                        xs: h2.fontSize,
                        lg: d1.fontSize,
                      }),
                    }}
                    color="white"
                    lineHeight={1}
                  ></MKTypography>
                </MKBox>
              </MKBox>
              <MKBox mt={3} mb={8} ml={{ xs: 1, md: 4 }} mr={{ xs: 1, md: 0 }}>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={4}>
                    {/* <TodoList /> */}
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <MKBox mb={3}>{/* <TodoCard /> */}</MKBox>
                    {/* <Emails /> */}
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <MKBox mb={3}>{/* <MediaPlayer /> */}</MKBox>
                    {/* <Messages /> */}
                  </Grid>
                </Grid>
              </MKBox>
            </Grid>
          </Grid>
        </Container>
      </MKBox>
      <MKBox pt={6} px={1} mt={6}>
        {/* <DefaultFooter content={footerRoutes} /> */}
      </MKBox>
    </>
  );
}

export default VirtualReality;
