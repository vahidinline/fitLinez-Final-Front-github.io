import { useState } from "react";
// import validator from "validator";

// @mui material components
import { Grid, Select, MenuItem } from "@mui/material";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
import axios from "axios";

function Calculator() {
  const [userData, setUserData] = useState({
    age: 39,
    height: 189,
    gender: "male",
    weight: "84",
    activity: "active",
    neck: 34,
    waist: 84,
    hip: 90,
    name: "",
    email: "",
  });

  // const [calorie, setCalorie] = useState();

  const genderList = [
    { id: 1, name: "male", alias: "آقا" },
    { id: 2, name: "female", alias: "خانم" },
  ];
  const activities = [
    { id: 1, name: "sedentary", alias: "تحرک کم یا عدم تحرک" },
    { id: 2, name: "light", alias: "یک تا سه روز ورزش در هفته" },
    { id: 3, name: "moderate", alias: "چهار تا پنج روز ورزش در هفته" },
    {
      id: 4,
      name: "active",
      alias: "میزان فعالیت",
    },
    { id: 5, name: "extreme", alias: "تمرین شدید در تمام روز های هفته" },
  ];

  function handleSubmit(e) {
    e.preventDefault();
  }

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSubmitUserInfo = () => {
    axios
      .post(`${process.env.REACT_APP_SERVER_PAYMENT}/cta`, userData)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <MKBox component="section" py={12} alignItems="center" justifyContent="center">
      <Grid container item justifyContent="center" xs={10} lg={7} mx="auto" textAlign="center">
        <MKTypography variant="h3" mb={1}>
          محاسبه کالری
        </MKTypography>
      </Grid>
      <Grid
        container
        item
        xs={12}
        md={12}
        sx={{ mx: "auto" }}
        alignItems="center"
        justifyContent="center"
      >
        <form onSubmit={handleSubmit}>
          <MKBox width="100%" center>
            <MKBox p={3}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={12}>
                  <MKInput label="سن" name="age" onChange={handleInput} fullWidth />
                </Grid>
                <Grid item xs={12} md={12}>
                  <MKInput label="قد" name="height" onChange={handleInput} fullWidth />
                </Grid>
                <Grid item xs={12} md={12}>
                  <MKInput label="وزن" name="weight" onChange={handleInput} fullWidth />
                </Grid>
                <Grid item xs={12} md={6}>
                  <MKTypography variant="caption">جنسیت</MKTypography>

                  <Select name="جنسیت" onChange={handleInput} variant="standard">
                    {genderList.map((genders) => (
                      <MenuItem key={genders.id} value={genders.name}>
                        {genders.alias}
                      </MenuItem>
                    ))}
                  </Select>
                </Grid>
                <Grid item xs={12} md={6}>
                  <MKTypography variant="caption">میزان فعالیت</MKTypography>

                  <Select name="فعالیت" onChange={handleInput} variant="standard">
                    {activities.map((activity) => (
                      <MenuItem key={activity.id} value={activity.name}>
                        {activity.alias}
                      </MenuItem>
                    ))}
                  </Select>
                </Grid>

                <Grid item xs={12} md={12}>
                  <MKInput label="دور کمر" name="waist" onChange={handleInput} fullWidth />
                </Grid>
                <Grid item xs={12} md={12}>
                  <MKInput label="دور گردن" name="neck" onChange={handleInput} fullWidth />
                </Grid>
                <Grid item xs={12} md={12}>
                  <MKInput label="دور باسن" name="hip" onChange={handleInput} fullWidth />
                </Grid>
                <Grid item xs={12} md={12}>
                  <MKInput label="نام" name="name" onChange={handleInput} fullWidth required />
                </Grid>
                <Grid item xs={12} md={12}>
                  <MKInput label="ایمیل" name="email" onChange={handleInput} fullWidth required />
                </Grid>
                {/* <Grid>
                  <Checkbox disabled />
                </Grid> */}
                <Grid item xs={12} md={12}>
                  <MKButton
                    variant="gradient"
                    color="info"
                    type="submit"
                    onClick={handleSubmitUserInfo}
                    fullWidth
                  >
                    محاسبه
                  </MKButton>
                </Grid>
              </Grid>
            </MKBox>
          </MKBox>
        </form>
      </Grid>
      <Grid
        container
        item
        xs={12}
        md={12}
        sx={{ mx: "auto" }}
        alignItems="center"
        justifyContent="center"
      ></Grid>
    </MKBox>
  );
}

export default Calculator;
