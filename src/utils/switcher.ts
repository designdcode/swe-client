export const linkSwitcher = (subparam?: string | null) => {
  switch (subparam) {
    case "sw-value":
      return true;
    case "sw-platform":
      return true;
    case "news-press":
      return true;
    case "sitemap":
      return true;
    default:
      return false;
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
