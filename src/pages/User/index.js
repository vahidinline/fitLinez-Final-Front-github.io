// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
import MKAlert from "components/MKAlert";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { FormControl, InputLabel } from "@mui/material";
import { useState } from "react";
import axios from "axios";

function SignUpForm() {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    age: "",
    height: "",
    target: "",
    refer: "",
    gender: "",
    weight: "",
    activity: "",
  });
  const handleInput = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://fitlinez-backend.herokuapp.com/updateProfile", userData)
      .then((res) => {
        console.log(res.data);
        setUserData(res);
        alert("اطلاعات شما ثبت شد.");
      })
      .catch((e) => {
        alert(e.message);
      });
  };
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
              {" "}
              Dear user; your payment has been succesful. Please fill the below form to complete
              your registration
            </MKAlert>
          </Grid>
        </Grid>
        <Grid container item xs={12} lg={8} sx={{ mx: "auto" }}>
          <form onSubmit={handleSubmit}>
            <MKBox width="100%" autocomplete="off">
              <MKBox p={3}>
                <Grid container spacing={3} mt={1}>
                  <Grid item xs={12} md={6}>
                    <MKInput
                      name="name"
                      label="Full Name"
                      fullWidth
                      value={userData.name}
                      onChange={handleInput}
                      requierd
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <MKInput
                      name="email"
                      type="email"
                      label="Email"
                      value={userData.email}
                      onChange={handleInput}
                      fullWidth
                      requierd
                    />
                  </Grid>
                </Grid>
                <Grid container spacing={3} mt={1}>
                  <Grid item xs={12} md={4}>
                    <MKInput
                      name="age"
                      type="number"
                      label="Age"
                      fullWidth
                      value={userData.age}
                      onChange={handleInput}
                      requierd
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <MKInput
                      name="weight"
                      type="number"
                      label="Weight"
                      value={userData.weight}
                      onChange={handleInput}
                      fullWidth
                      requierd
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <MKInput
                      name="height"
                      type="text"
                      label="Height"
                      value={userData.height}
                      onChange={handleInput}
                      fullWidth
                      requierd
                    />
                  </Grid>
                </Grid>
                <Grid container spacing={3} mt={1}>
                  <Grid item xs={12} md={6}>
                    <MKInput
                      name="target"
                      type="text"
                      label="target"
                      value={userData.target}
                      onChange={handleInput}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <MKInput
                      name="refer"
                      type="text"
                      label="Refer"
                      value={userData.refer}
                      onChange={handleInput}
                      fullWidth
                    />
                  </Grid>
                </Grid>
                <Grid container spacing={3} mt={1}>
                  <Grid item xs={12} md={6}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">Activity</InputLabel>

                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={userData.activity}
                        name="activity"
                        onChange={handleInput}
                      >
                        <MenuItem value="sedentary">sedentary</MenuItem>
                        <MenuItem value="light">light</MenuItem>
                        <MenuItem value="moderate">moderate</MenuItem>
                        <MenuItem value="active">active</MenuItem>
                        <MenuItem value="extreme">extreme</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">Gender</InputLabel>

                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={userData.gender}
                        name="gender"
                        onChange={handleInput}
                      >
                        <MenuItem value="female">Female</MenuItem>
                        <MenuItem value="male">Male</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>
                <Grid container item justifyContent="center" xs={12} my={6}>
                  <MKButton type="submit" variant="gradient" color="info">
                    Complete Registration
                  </MKButton>
                </Grid>
              </MKBox>
            </MKBox>
          </form>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default SignUpForm;
