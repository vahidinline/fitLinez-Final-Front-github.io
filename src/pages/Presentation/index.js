import React from "react";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
// import MKBadge from "components/MKBadge";
import MKTypography from "components/MKTypography";
import MKSocialButton from "components/MKSocialButton";
// import MKButton from "components/MKButton";

// Material Kit 2 PRO React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
// import DefaultFooter from "examples/Footers/DefaultFooter";
import FilledInfoCard from "examples/Cards/InfoCards/FilledInfoCard";

// Presentation page sections
// import Counters from "pages/Presentation/sections/Counters";
// import Information from "pages/Presentation/sections/Information";
// import DesignBlocks from "pages/Presentation/sections/DesignBlocks";
// import AuthPages from "pages/Presentation/sections/AuthPages";
// import Pages from "pages/Presentation/sections/Pages";
// import Testimonials from "pages/Presentation/sections/Testimonials";
import Pricing from "pages/Company/Pricing/sections/Pricing";
import { useTranslation, Trans } from "react-i18next";

// Presentation page components
import BuiltByDevelopers from "pages/Presentation/components/BuiltByDevelopers";

// Routes
import routes from "routes";
// import footerRoutes from "footer.routes";

// Images
import bgImage from "assets/images/bg-presentation.jpg";
import MKButton from "components/MKButton";
import { Stack } from "@mui/material";

function Presentation(props) {
  const { email } = props;
  console.log(email);

  const { t } = useTranslation();

  return (
    <>
      <DefaultNavbar
        routes={routes}
        action={{
          type: "internal",
          route: "/pricing",
          label: <Trans i18nKey="courses">Courses</Trans>,
          color: "info",
        }}
        sticky
      />
      <MKBox
        minHeight="75vh"
        width="100%"
        sx={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container>
          <Grid
            container
            item
            xs={12}
            md={7}
            justifyContent={{ xs: "center", md: "start" }}
            sx={{ textAlign: { xs: "center", md: "left" } }}
          >
            <MKTypography
              variant="h1"
              color="white"
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              {t("homeH1")}
            </MKTypography>
            <MKTypography
              variant="body1"
              color="white"
              mt={1}
              pr={{ md: 12, lg: 24, xl: 32 }}
              opacity={0.8}
            >
              {t("homeH2")}
            </MKTypography>
            <Stack direction="row" spacing={1} mt={6} mb={3}>
              <MKButton variant="gradient" color="info" href="/pricing">
                {t("homebutton1")}
              </MKButton>
              <MKButton
                variant="gradient"
                color="white"
                href="https://fitlinez-front.vercel.app/calories"
              >
                <MKTypography variant="h3">{t("homebutton2")} </MKTypography>
              </MKButton>
            </Stack>
          </Grid>
        </Container>
      </MKBox>
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
          backdropFilter: "saturate(200%) blur(30px)",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        {/* <Counters /> */}
        {/* <Information /> */}
        {/* <DesignBlocks /> */}
        {/* <AuthPages />
        <Pages /> */}
        <Container sx={{ mt: 6 }}>
          <BuiltByDevelopers />
        </Container>

        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={4}>
              <FilledInfoCard
                variant="gradient"
                color="info"
                icon="flag"
                title="Getting Started"
                description="Check the possible ways of working with your body, Make it hqarder, every Day"
              />
            </Grid>
            <Grid item xs={12} lg={4}>
              <FilledInfoCard
                color="info"
                icon="precision_manufacturing"
                title="Learning More"
                description="Get ingormation and have an overview about the macros and nuritions."
              />
            </Grid>
            <Grid item xs={12} lg={4}>
              <FilledInfoCard
                color="info"
                icon="apps"
                title="New Habbit"
                description="Continue the new way to make better version of your self."
              />
            </Grid>
          </Grid>
        </Container>
        {/* <Testimonials /> */}
        <Pricing />
        <MKBox pt={18} pb={6}>
          <Container>
            <Grid container spacing={3}>
              <Grid item xs={12} lg={5} ml="auto" sx={{ textAlign: { xs: "center", lg: "left" } }}>
                <MKTypography variant="h4" fontWeight="bold" mb={0.5}>
                  Thank you for your support!
                </MKTypography>
              </Grid>
              <Grid
                item
                xs={12}
                lg={5}
                my={{ xs: 5, lg: "auto" }}
                mr={{ xs: 0, lg: "auto" }}
                sx={{ textAlign: { xs: "center", lg: "right" } }}
              >
                <MKSocialButton
                  component="a"
                  href="https://twitter.com/intent/tweet?text=Check%20Material%20Design%20System%20made%20by%20%40CreativeTim%20%23webdesign%20%23designsystem%20%23bootstrap5&amp;url=https%3A%2F%2Fwww.creative-tim.com%2Fproduct%2Fmaterial-design-system-pro"
                  target="_blank"
                  color="twitter"
                  sx={{ mr: 1 }}
                >
                  <i className="fab fa-twitter" />
                  &nbsp;Tweet
                </MKSocialButton>
                <MKSocialButton
                  component="a"
                  href="https://www.facebook.com/sharer/sharer.php?u=https://www.creative-tim.com/product/material-design-system-pro"
                  target="_blank"
                  color="facebook"
                  sx={{ mr: 1 }}
                >
                  <i className="fab fa-facebook" />
                  &nbsp;Share
                </MKSocialButton>
                <MKSocialButton
                  component="a"
                  href="https://www.pinterest.com/pin/create/button/?url=https://www.creative-tim.com/product/material-design-system-pro"
                  target="_blank"
                  color="pinterest"
                >
                  <i className="fab fa-pinterest" />
                  &nbsp;Pin it
                </MKSocialButton>
              </Grid>
            </Grid>
          </Container>
        </MKBox>
      </Card>
      {/* <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox> */}
    </>
  );
}

export default Presentation;
