export const linkSwitcher = (subparam?: string | null) => {
  switch (subparam) {
    case subparam?.includes("storage"):
      return false;
    default:
      return true;
  }
};

export const imageSwitcher = (
  subparam: string,
  setValue: React.Dispatch<React.SetStateAction<boolean>>
) => {
  switch (subparam?.toString().split("-")[0]) {
    case "storage":
      setValue(true);
      break;
    case "achievement":
      setValue(true);
      break;
    default:
      break;
  }
};

export const fileSwitcher = (subparam?: string | null) => {
  switch (subparam) {
    case subparam?.includes("storage"):
      return true;
    case subparam?.includes("achievement"):
      return true;
    default:
      return false;
  }
};

export const contentSwitcher = (subparam?: string | null) => {
  if (subparam?.includes("introduce")) return false;
  else return true;
};
