export const linkSwitcher = (subparam?: string | null) => {
  const sub = subparam?.toString().split("-")[0];
  switch (sub) {
    case "storage":
      return true;
    case "link":
      return true;
    case "community":
      return false;
    default:
      return false;
  }
};

export const imageSwitcher = (subparam: string) => {
  const sub = subparam?.toString().split("-")[0];
  switch (sub) {
    case "storage":
      return true;
    case "achievement":
      return true;
    default:
      return false;
  }
};

export const fileSwitcher = (subparam?: string | null) => {
  const sub = subparam?.toString().split("-")[0];
  switch (sub) {
    case "storage":
      return true;
    case "achievement":
      return true;
    default:
      return false;
  }
};

export const contentSwitcher = (subparam?: string | null) => {
  const sub = subparam?.toString().split("-")[0];
  if (sub === "introduce") return false;
  else return true;
};
