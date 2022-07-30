import { useState, useEffect } from "react";

// @mui material components
import { Grid, Select, MenuItem } from "@mui/material";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
import fitnessCalculatorFunctions from "fitness-calculator";
import axios from "axios";

function Calculator() {
  const [show, setShow] = useState(false);
  const [showForm1, setShowform1] = useState(true);
  const [showResult, setShowResult] = useState(false);
  const handleCTA = () => {
    setShow(true);
  };
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
  const activities = [
    { id: 1, name: "sedentary", alias: "Little or no exercise" },
    { id: 2, name: "light", alias: "Exercise 1-3 times/week" },
    { id: 3, name: "moderate", alias: "Exercise 4-5 times/week" },
    {
      id: 4,
      name: "active",
      alias: "Daily exercise or intense exercise 3-4 times/week",
    },
    { id: 5, name: "extreme", alias: "ntense exercise 6-7 times/week" },
  ];
  console.log(bmi);
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
    setShowform1(false);
  }

  const CTA = () => {
    const [userInfo, setUserInfo] = useState({
      name: "",
      email: "",
    });
    const [showButton, setShowButton] = useState(true);
    const checkinput = () => {
      if (userInfo.name !== "" && userInfo.email !== "") {
        setShowButton(false);
      }
    };
    useEffect(() => {
      checkinput();
    }, [userInfo]);
    console.log(showButton);
    const handleInput = (e) => {
      const { name, value } = e.target;
      setUserInfo({
        ...userInfo,
        [name]: value,
      });
    };
    const handleSubmitUserInfo = () => {
      axios.post("http://localhost:8080/cta", userInfo).then((res) => {
        if (res.data.status === "OK200") setShowResult(true);
      });
    };

    return (
      <MKBox width="50%" center>
        <MKTypography>Please enter your name and email address</MKTypography>
        <MKBox p={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={12}>
              <MKInput label="name" name="name" onChange={handleInput} fullWidth required />
            </Grid>
            <Grid item xs={12} md={12}>
              <MKInput label="email" name="email" onChange={handleInput} fullWidth required />
            </Grid>

            <Grid item xs={12} md={12}>
              <MKButton
                variant="gradient"
                color="info"
                onClick={handleSubmitUserInfo}
                fullWidth
                disabled={showButton}
              >
                Result
              </MKButton>
            </Grid>
          </Grid>
        </MKBox>
      </MKBox>
    );
  };
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
          {showForm1 ? (
            <MKBox width="50%" center>
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
                    <Select name="جنسیت" onChange={handleInput} variant="standard">
                      {genderList.map((genders) => (
                        <MenuItem key={genders.id} value={genders.name}>
                          {genders.alias}
                        </MenuItem>
                      ))}
                    </Select>
                  </Grid>
                  <Grid item xs={8} md={6}>
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
                    <MKButton
                      variant="gradient"
                      color="info"
                      type="submit"
                      onClick={handleCTA}
                      fullWidth
                    >
                      next Step
                    </MKButton>
                  </Grid>
                </Grid>
              </MKBox>
            </MKBox>
          ) : null}
        </form>
        {show ? <CTA /> : null}
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
        {showResult > 0 && (
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
