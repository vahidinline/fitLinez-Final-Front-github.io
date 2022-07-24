import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const fallbackLng = ["en"];
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
