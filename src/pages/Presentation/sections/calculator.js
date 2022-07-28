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
    weight: "84",
    activity: "active",
    neck: 34,
    waist: 84,
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
  const [tdee, setTDEE] = useState(0);
  console.log(calorie);

  const genderList = [
    { id: 1, name: "male", alias: "آقا" },
    { id: 2, name: "female", alias: "خانم" },
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
  console.log(tdee);
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

    setTDEE(
      fitnessCalculatorFunctions.TDEE(
        userData.gender,
        Number(userData.age),
        Number(userData.height),
        Number(userData.weight),
        userData.activity
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
                  <MKInput label="سن" name="age" onChange={handleInput} fullWidth />
                </Grid>
                <Grid item xs={12} md={12}>
                  <MKInput label="قد" name="height" onChange={handleInput} fullWidth />
                </Grid>
                <Grid item xs={12} md={12}>
                  <MKInput label="وزن" name="weight" onChange={handleInput} fullWidth />
                </Grid>
                <Grid item xs={4} md={6}>
                  <Select
                    name="جنسیت"
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
                <Grid item xs={8} md={6}>
                  <Select
                    className="form-control"
                    name="میزان فعالیت"
                    onChange={handleInput}
                    value={userData.activity}
                    variant="standard"
                  >
                    <MenuItem value="sedentary">یک تا سه روز در هفته</MenuItem>
                    <MenuItem value="light">چهار تا پنج روز در هفته</MenuItem>
                    <MenuItem value="moderate">
                      ورزش روزانه / ورزش شدید سه تا چهار روز در هفته
                    </MenuItem>
                    <MenuItem value="active">ورزش شدید تقریبا هر روز</MenuItem>
                    <MenuItem value="extreme">ورزش شدید روزانه/ کار فیزیکی</MenuItem>
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
            Balance Calories is {tdee}
          </MKTypography>
        )}
      </Grid>
    </MKBox>
  );
}

export default Calculator;
