import { useState } from "react";

// @mui material components
import { Grid, Select, MenuItem } from "@mui/material";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

import fitnessCalculatorFunctions from "fitness-calculator";

function Calculator() {
  const [userData, setUserData] = useState({
    age: 39,
    height: 189,
    gender: "male",
    weight: "82",
    activity: "active",
    neck: 34,
    waist: 78,
    hip: 90,
  });
  const handleInput = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };
  const [calorie, setCalorie] = useState();
  const [bmi, setBmi] = useState(0);
  const [bfp, setBfp] = useState(0);
  console.log(calorie);

  const genderList = [
    { id: 1, name: "male", alias: "Male" },
    { id: 2, name: "female", alias: "Female" },
  ];
  // const activity = [
  //   { id: 1, name: "sedentary", alias: "Little or no exercise" },
  //   { id: 2, name: "light", alias: "Exercise 1-3 times/week" },
  //   { id: 3, name: "moderate", alias: "Exercise 4-5 times/week" },
  //   {
  //     id: 4,
  //     name: "active",
  //     alias: "Daily exercise or intense exercise 3-4 times/week",
  //   },
  //   { id: 5, name: "extreme", alias: "ntense exercise 6-7 times/week" },
  // ];
  function handleSubmit(e) {
    e.preventDefault();
    setBmi(fitnessCalculatorFunctions.BMI(Number(userData.height), Number(userData.weight)));
    setCalorie(
      fitnessCalculatorFunctions.calorieNeeds(
        userData.gender,
        Number(userData.age),
        Number(userData.height),
        Number(userData.weight),
        userData.activity
      )
    );

    setBfp(
      fitnessCalculatorFunctions.BFP(
        userData.gender,
        Number(userData.height),
        Number(userData.weight),
        Number(userData.neck),
        Number(userData.waist),
        Number(userData.hip)
      )
    );
  }
  return (
    <MKBox component="section" py={12} alignItems="center" justifyContent="center">
      <Grid container item justifyContent="center" xs={10} lg={7} mx="auto" textAlign="center">
        <MKTypography variant="h3" mb={1}>
          Calculator
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
          <MKBox width="100%">
            <MKBox p={3}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={12}>
                  <MKInput label="Age" name="age" onChange={handleInput} fullWidth />
                </Grid>
                <Grid item xs={12} md={12}>
                  <MKInput label="Height" name="height" onChange={handleInput} fullWidth />
                </Grid>
                <Grid item xs={12} md={12}>
                  <MKInput label="Weight" name="weight" onChange={handleInput} fullWidth />
                </Grid>
                <Grid item xs={12} md={12}>
                  <Select
                    name="gender"
                    onChange={handleInput}
                    variant="standard"
                    value={userData.gender}
                  >
                    {genderList.map((genders) => (
                      <MenuItem key={genders.id} value={genders.name}>
                        {genders.alias}
                      </MenuItem>
                    ))}
                  </Select>
                </Grid>
                <Grid item xs={12} md={12}>
                  <MKInput label="Activity" name="activity" onChange={handleInput} fullWidth />
                </Grid>
                <Grid item xs={12} md={12}>
                  <MKInput label="Waist" name="waist" onChange={handleInput} fullWidth />
                </Grid>
                <Grid item xs={12} md={12}>
                  <MKInput label="Neck" name="neck" onChange={handleInput} fullWidth />
                </Grid>
                <Grid item xs={12} md={12}>
                  <MKInput label="Hip" name="hip" onChange={handleInput} fullWidth />
                </Grid>
                <Grid item xs={12} md={12}>
                  <MKButton variant="gradient" color="info" type="submit" fullWidth>
                    Calculate
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
      >
        {bmi > 0 && (
          <MKTypography variant="h3" mb={1}>
            BMI is {bmi}
            <br />
            BFP is {bfp}
            <br />
            Balance Calories is
          </MKTypography>
        )}
      </Grid>
    </MKBox>
  );
}

export default Calculator;
