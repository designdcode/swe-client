export const BREAKPOINT_PC = "pc";
export const BREAKPOINT_TABLET = "tablet";
export const BREAKPOINT_PHONE_MEDIUM = "phoneMedium";
export const BREAKPOINT_PHONE_SMALL = "phoneSmall";
export const BREAKPOINT_BIGGER_THAN_PC = "lpc";

export const breakpoints = {
  lpc: 1279,
  pc: 1279,
  tablet: 767,
  phoneMedium: 375,
  phoneSmall: 349,
};

export const mediaQueries = (key: keyof typeof breakpoints) => {
  switch (key) {
    case "lpc":
      return `@media only screen and (min-width: 767px)`;
    default:
      return `@media only screen and (max-width: ${breakpoints[key]}px)`;
  }
};
