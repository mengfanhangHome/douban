import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en_json from "./en.json";
import zh_json from "./zh.json";

const resources = {
  en: {
    translation: en_json,
  },
  zh: {
    translation: zh_json,
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "zh", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false, // 不会为防止xxs攻击把json文件强行转为字符串，这里关闭，因为react已处理了
    },
  });

export default i18n;

/*
================================================ 
i18n的原理：
    其实是用了react的context透传
================================================
*/
