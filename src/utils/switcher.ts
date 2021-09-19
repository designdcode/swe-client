export const linkSwitcher = (subparam?: string | null) => {
  switch (subparam) {
    case subparam?.includes("storage"):
      return false;
    default:
      return true;
  }
};

export const imageSwitcher = (subparam?: string | null) => {
  switch (subparam) {
    case subparam?.includes("storage"):
      return true;
    default:
      return false;
  }
};

export const fileSwitcher = (subparam?: string | null) => {
  if (subparam?.includes("storage")) return true;
  else if (subparam?.includes("value-") && subparam !== "value-introduce")
    return true;
  else if (
    subparam?.includes("edu-") &&
    subparam !== "edu-introduce" &&
    subparam !== "edu-platform"
  )
    return true;
  else return false;
};

export const contentSwitcher = (subparam?: string | null) => {
  if (subparam?.includes("introduce")) return false;
  else return true;
};
