import { useState, useEffect } from "react";
import validator from "validator";

// @mui material components
import { Grid, Select, MenuItem } from "@mui/material";
import { useTranslation } from "react-i18next";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
import fitnessCalculatorFunctions from "fitness-calculator";
import axios from "axios";
import MKAlert from "components/MKAlert";

function Calculator() {
  const { t } = useTranslation();

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
  // const [calorie, setCalorie] = useState();
  const [bmi, setBmi] = useState(0);
  const [bfp, setBfp] = useState(0);
  const [bmr, setBmr] = useState(0);

  const genderList = [
    { id: 1, name: "male", alias: t("male") },
    { id: 2, name: "female", alias: t("female") },
  ];
  const activities = [
    { id: 1, name: "sedentary", alias: t("sedentary") },
    { id: 2, name: "light", alias: t("light") },
    { id: 3, name: "moderate", alias: t("moderate") },
    {
      id: 4,
      name: "active",
      alias: t("active"),
    },
    { id: 5, name: "extreme", alias: t("extreme") },
  ];
  function handleSubmit(e) {
    e.preventDefault();
    setBmi(fitnessCalculatorFunctions.BMI(Number(userData.height), Number(userData.weight)));
    // setCalorie(
    //   fitnessCalculatorFunctions.calorieNeeds(
    //     userData.gender,
    //     Number(userData.age),
    //     Number(userData.height),
    //     Number(userData.weight),
    //     userData.activity
    //   )
    // );

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

    setBmr(
      fitnessCalculatorFunctions.BMR(
        userData.gender,
        Number(userData.age),
        Number(userData.height),
        Number(userData.weight)
      )
    );
    setShowform1(false);
  }

  const CTA = () => {
    const [userInfo, setUserInfo] = useState({
      name: "",
      email: "",
      bmi,
      bfp,
      bmr,
    });
    const [showButton, setShowButton] = useState(true);
    const checkinput = () => {
      if (userInfo.name !== "" && validator.isEmail(userInfo.email)) {
        setShowButton(false);
      }
    };
    useEffect(() => {
      checkinput();
    }, [userInfo]);
    const handleInput = (e) => {
      const { name, value } = e.target;
      setUserInfo({
        ...userInfo,
        [name]: value,
      });
    };
    const handleSubmitUserInfo = () => {
      axios.post(`${process.env.REACT_APP_SERVER_PAYMENT_DEV}/cta`, userInfo).then((res) => {
        if (res.data.status === "OK200") setShowResult(true);
      });
    };

    return (
      <MKBox width="100%">
        <Grid spacing={3} m={4} item justifyContent="center" textAlign="center">
          <MKTypography sx={{ align: "center" }}>{t("calctitle2")}</MKTypography>
        </Grid>

        <MKBox p={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={12}>
              <MKInput
                label={t("calcLabelName")}
                name="name"
                onChange={handleInput}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <MKInput
                label={t("calcLabelEmail")}
                name="email"
                onChange={handleInput}
                fullWidth
                required
              />
              <span
                style={{
                  fontWeight: "bold",
                  color: "red",
                }}
              ></span>
            </Grid>

            <Grid item xs={12} md={12}>
              <MKButton
                variant="gradient"
                color="info"
                onClick={handleSubmitUserInfo}
                fullWidth
                disabled={showButton}
              >
                {t("calcButton2")}
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
          {t("calctitle")}
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
            <MKBox width="100%" center>
              <MKBox p={3}>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={12}>
                    <MKInput
                      label={t("calcLabelAge")}
                      name="age"
                      onChange={handleInput}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <MKInput
                      label={t("calcLabelHeight")}
                      name="height"
                      onChange={handleInput}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <MKInput
                      label={t("calcLabelWeight")}
                      name="weight"
                      onChange={handleInput}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <MKTypography variant="caption">{t("gender")}</MKTypography>

                    <Select name="جنسیت" onChange={handleInput} variant="standard">
                      {genderList.map((genders) => (
                        <MenuItem key={genders.id} value={genders.name}>
                          {genders.alias}
                        </MenuItem>
                      ))}
                    </Select>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <MKTypography variant="caption">{t("activity")}</MKTypography>

                    <Select name="فعالیت" onChange={handleInput} variant="standard">
                      {activities.map((activity) => (
                        <MenuItem key={activity.id} value={activity.name}>
                          {activity.alias}
                        </MenuItem>
                      ))}
                    </Select>
                  </Grid>

                  <Grid item xs={12} md={12}>
                    <MKInput
                      label={t("calcLabelWaist")}
                      name="waist"
                      onChange={handleInput}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <MKInput
                      label={t("calcLabelNeck")}
                      name="neck"
                      onChange={handleInput}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <MKInput
                      label={t("calcLabelHip")}
                      name="hip"
                      onChange={handleInput}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <MKButton
                      variant="gradient"
                      color="info"
                      type="submit"
                      onClick={handleCTA}
                      fullWidth
                    >
                      {t("calcButton1")}
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
            <MKAlert color={bmi > 25 || bmi < 19 ? "error" : "success"}>
              {t("bmi")} {bmi}
            </MKAlert>
            <MKAlert color={bfp > 30 ? "error" : "success"}>
              {t("BFP")} {bfp}
            </MKAlert>
            <MKAlert color="info">
              {t("calorieDeficit")} {bmr}
            </MKAlert>
          </MKTypography>
        )}
      </Grid>
    </MKBox>
  );
}

export default Calculator;
