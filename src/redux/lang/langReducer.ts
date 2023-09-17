import { CHANGELANG, ADDNEWLANG } from "./langAction";
import i18n from "i18next";
export interface ILang {
  lang: "en" | "zh";
  langList: { label: string; code: string }[];
}

const defaultState: ILang = {
  lang: "zh",
  langList: [
    {
      label: "中文",
      code: "zh",
    },
    {
      label: "English",
      code: "en",
    },
  ],
};

export default (state = defaultState, action: any): ILang => {
  switch (action.type) {
    case CHANGELANG:
      //  调用i18n的切换语种。传入key，en/zh
      i18n.changeLanguage(action.payload);
      return {
        ...state,
        lang: action.payload,
      };
    default:
      return state;
  }
};
