import { AdminNavData } from "../assets/AdminNavData";

export const getTitle = (param: string): string => {
  const found = AdminNavData.find((item) => item.title === param);
  if (found) {
    return found.ko_title;
  } else {
    return "";
  }
};

export const getSubTitle = (param: string, subparam: string): string => {
  let res = "";
  for (let i = 0; i < AdminNavData.length; i++) {
    if (AdminNavData[i].title === param) {
      for (let j = 0; j < AdminNavData[i].subMenu.length; j++) {
        if (AdminNavData[i].subMenu[j].title === subparam) {
          res = AdminNavData[i].subMenu[j].ko_title;
          break;
        }
      }
      break;
    }
  }
  return res;
};
