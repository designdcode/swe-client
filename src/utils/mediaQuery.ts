export const BREAKPOINT_PC = "pc";
export const BREAKPOINT_TABLET = "tablet";
export const BREAKPOINT_PHONE_MEDIUM = "phoneMedium";
export const BREAKPOINT_PHONE_SMALL = "phoneSmall";

export const breakpoints = {
  pc: 1280,
  tablet: 768,
  phoneMedium: 376,
  phoneSmall: 350,
};

export const mediaQueries = (key: keyof typeof breakpoints) => {
  return `@media (min-width: ${breakpoints[key]}px)`;
};

/**

 ${mediaQueries(BREAKPOINT_TABLET)} {
    ${(props) => (props.theme.width )};
  }

 * */
