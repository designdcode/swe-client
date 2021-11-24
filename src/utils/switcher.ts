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
  // return true

  if (subparam?.includes("storage")) return true;
  else return false;
};

export const contentSwitcher = (subparam?: string | null) => {
  if (subparam?.includes("introduce")) return false;
  else return true;
};
