export const CHANGELANG = "CHANGE_LANG";
export const ADDNEWLANG = "ADD_NEWLANG";

export const changeLanguageCreator = (key: "en" | "zh") => {
  return {
    type: CHANGELANG,
    payload: key,
  };
};
