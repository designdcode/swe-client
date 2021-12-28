export const linkSwitcher = (subparam?: string | null) => {
  const sub = subparam?.toString().split("-")[0];
  switch (sub) {
    case "storage":
      return true;
    case "community":
      return false;
    default:
      return false;
  }
};

export const imageSwitcher = (subparam: string) => {
  const sub = subparam?.toString().split("-")[0];
  const subp = subparam?.toString().split("-")[1];
  switch (sub) {
    case "community":
      if (subp === "notice") {
        return true;
      } else if (subp === "administration") {
        return true;
      } else if (subp === "storage") {
        return true;
      } else {
        return false;
      }
    case "storage":
      return true;
    case "achievement":
      return true;
    default:
      return false;
  }
};

export const typeSwitcher = (subparam: string) => {
  const sub = subparam?.toString().split("-")[1];
  switch (sub) {
    case "aidnews":
      return true;
    case "valuenews":
      return true;
    case "coopnews":
      return true;
    default:
      return false;
  }
};

export const fileSwitcher = (subparam?: string | null) => {
  const sub = subparam?.toString().split("-")[0];
  const subp = subparam?.toString().split("-")[1];
  switch (sub) {
    case "community":
      if (subp === "notice") {
        return true;
      } else if (subp === "administration") {
        return true;
      } else if (subp === "storage") {
        return true;
      } else {
        return false;
      }
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

export const replySwitcher = (subparam?: string | null) => {
  const sub = subparam?.toString().split("-")[1];
  switch (sub) {
    case "help":
      return true;
    case "request":
      return true;
    default:
      return false;
  }
};
