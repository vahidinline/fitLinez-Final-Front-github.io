import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const fallbackLng = ["fa"];
const availableLanguages = ["en", "fa"];

i18next
  .use(initReactI18next) // pass the i18n instance to react-i18next.
  .use(LanguageDetector)
  .init({
    fallbackLng, // fallback language is english.
    resources: {
      en: {
        translation: {
          about: "about us",
          courses: "courses",
          homeH1: "FitLinez",
          homeH2: "Start the new LifeStyle, healthy and effective",
          pricingtitle: "See our pricing",
          pricingheadline: "you can pay trough Stripe payment solution",
          homebutton1: "Get started",
          homebutton2: "Calculator",
          calctitle: "Calculator",
          calctitle2: "Please enter your name and email address",
          calcLabelAge: "Age",
          calcLabelHeight: "Height",
          calcLabelWeight: "Weight",
          calcLabelWaist: "Waist",
          calcLabelNeck: "Neck",
          calcLabelHip: "Hip",
          calcButton1: "Next Step",
          calcLabelName: "Your Name",
          calcLabelEmail: "Your Email",
          calcButton2: "Show Result",
          bmi: "your BMI is: ",
          BFP: "Your Body Fat Percentage is: ",
          calorieDeficit: "your Calorie Deficit is: ",
          male: "male",
          female: "female",
          sedentary: "Little or no exercise",
          light: "Exercise 1-3 times/week",
          moderate: "Exercise 4-5 times/week",
          active: "Daily exercise or intense exercise 3-4 times/week",
          extreme: "ntense exercise 6-7 times/week",
          gender: "Gender",
          activity: "Activity",
        },
      },
      fa: {
        translation: {
          about: "درباره ما",
          courses: "دوره‌ها",
          homeH1: "فیت‌لاینز",
          homeH2: "شروع یک لایف استایل جدید، سالم و موثر",
          pricingtitle: "مشاهده پکیج های کوچینگ",
          pricingheadline:
            "پرداخت از طریق شبکه بانکی شتاب و همچنین پرداخت بین المللی امکان پذیر است",
          homebutton1: "شروع دوره",
          homebutton2: "محاسبه کالری",
          calctitle: "محاسبه کالری",
          calctitle2: "لطفا نام و ایمیل خود را وارد کنید",
          calcLabelAge: "سن",
          calcLabelHeight: "قد",
          calcLabelWeight: "وزن",
          calcLabelWaist: "دور کمر",
          calcLabelNeck: "دور گردن",
          calcLabelHip: "دور باسن",
          calcButton1: "مرحله بعد",
          calcLabelName: "نام شما",
          calcLabelEmail: "ایمیل شما",
          calcButton2: "مشاهده نتیجه",
          bmi: "شاخص توده بدنی شما:(BMI) ",
          BFP: "درصد تقریبی چربی بدن شما: ",
          calorieDeficit: "کالری نقصان :",
          male: "آقا",
          female: "خانم",
          sedentary: "تحرک کم یا عدم تحرک",
          light: "یک تا سه روز ورزش در هفته",
          moderate: "چهار تا پنج روز ورزش در هفته",
          active: "ورزش روزانه یا تمرین قدرتی سه تا چهار روز در هفته",
          extreme: "تمرین شدید در تمام روز های هفته",
          gender: "جنسیت",
          activity: "میزان فعالیت",
        },
      },
    },

    debug: false,

    whitelist: availableLanguages,

    interpolation: {
      escapeValue: false, // no need for react. it escapes by default
    },
  });

export default i18next;
