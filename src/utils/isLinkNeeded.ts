export const isLinkNeeded = (subparam?: string | null) => {
  console.log(subparam);
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
