import { useState } from "react";

// @mui material components
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

import fitnessCalculatorFunctions from "fitness-calculator";

function Calculator() {
  // const [gender, setGender] = useState("male");
  const [weight, setWeight] = useState(82);
  const [height, setHeight] = useState(182);
  // const [age, setAge] = useState(39);
  // const [waist, setWaist] = useState(87);
  // const [hip, setHip] = useState(90);
  // const [neck, setNeck] = useState(37);
  // const [calorie, setCalorie] = useState(0);
  // const [activity, setActivity] = useState("active");
  const [bmi, setBmi] = useState(0);
  // const [bfp, setBfp] = useState(0);
  // console.log(gender);

  function handleSubmit(e) {
    e.preventDefault();
    setBmi(fitnessCalculatorFunctions.BMI(Number(height), Number(weight)));
    // setCalorie(
    //   fitnessCalculatorFunctions.calorieNeeds(
    //     gender,
    //     Number(age),
    //     Number(height),
    //     Number(weight),
    //     activity
    //   )
    // );
    // setBfp(
    //   fitnessCalculatorFunctions.BFP(
    //     gender,
    //     Number(height),
    //     Number(weight),
    //     Number(neck),
    //     Number(waist),
    //     Number(hip)
    //   )
    // );
  }

  return (
    <MKBox component="section" py={12}>
      <Grid container item justifyContent="center" xs={10} lg={7} mx="auto" textAlign="center">
        {bmi > 0 && (
          <MKTypography variant="h3" mb={1}>
            {bmi}
          </MKTypography>
        )}
      </Grid>
      <Grid container item xs={12} lg={7} sx={{ mx: "auto" }}>
        <form onSubmit={handleSubmit}>
          <MKBox width="100%" component="form" method="post" autocomplete="off">
            <MKBox p={3}>
              <Grid container spacing={3}>
                {/* <Grid item xs={12} md={6}>
                  <MKInput name="gender" onChange={(e) => setGender(e.target.value)} fullWidth />
                </Grid> */}
                <Grid item xs={12} md={6}>
                  <MKInput name="height" onChange={(e) => setHeight(e.target.value)} fullWidth />
                </Grid>
                <Grid item xs={12} md={6}>
                  <MKInput name="weight" onChange={(e) => setWeight(e.target.value)} fullWidth />
                </Grid>
              </Grid>
            </MKBox>
          </MKBox>
          {/* <MKInput name="waist" onChange={(e) => setWaist(e.target.value)} />
          <MKInput name="neck" onChange={(e) => setNeck(e.target.value)} />
          <MKInput name="age" onChange={(e) => setAge(e.target.value)} />
          <MKInput name="hip" onChange={(e) => setHip(e.target.value)} />
          <MKInput name="activity" onChange={(e) => setActivity(e.target.value)} /> */}

          <MKButton type="submit">Calculate</MKButton>
        </form>
      </Grid>
    </MKBox>
  );
}

export default Calculator;
