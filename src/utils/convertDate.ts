export const getDate = (time: string) => {
  const itemDate = new Date(Math.floor(parseInt(time, 10) / 1000) * 1000);
  const date =
    itemDate.getFullYear() +
    "-" +
    (itemDate.getMonth() + 1 >= 10
      ? itemDate.getMonth() + 1
      : `0${itemDate.getMonth() + 1}`) +
    "-" +
    (itemDate.getDate() >= 10 ? itemDate.getDate() : `0${itemDate.getDate()}`);
  return date;
};

export const convertMonth = (name: string): string => {
  switch (name) {
    case "Jan":
      return "1";
    case "Feb":
      return "2";
    case "Mar":
      return "3";
    case "Apr":
      return "4";
    case "May":
      return "5";
    case "Jun":
      return "6";
    case "Jul":
      return "7";
    case "Aug":
      return "8";
    case "Sep":
      return "9";
    case "Oct":
      return "10";
    case "Nov":
      return "11";
    case "Dec":
      return "12";
    default:
      return name;
  }
};

export const convertDay = (name: string): string => {
  switch (name) {
    case "Sun":
      return "일";
    case "Mon":
      return "월";
    case "Tue":
      return "화";
    case "Wed":
      return "수";
    case "Thu":
      return "목";
    case "Fri":
      return "금";
    case "Sat":
      return "토";
    case "0":
      return "일";
    case "1":
      return "월";
    case "2":
      return "화";
    case "3":
      return "수";
    case "4":
      return "목";
    case "5":
      return "금";
    case "6":
      return "토";
    default:
      return name;
  }
};
