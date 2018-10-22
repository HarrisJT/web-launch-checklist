const colors = {
  background: `#F6F9FC`,
  backgroundDark: `#DDE0E2`,
  backgroundDarker: `#B8BABC`,
  border: `#DE9A83`,
  headingText: `#424770`,
  bodyText: `#333756`,
  textLight: `#8388A4`,
  textDark: `#32343E`,
  accent: `#6A7CD8`,
  accentDark: `#555abf`,
  accentLight: `#7795f8`,
};

const fonts = {
  heading: `
        font-family: "Rubik", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
        font-weight: 400;
        color: ${colors.headingText};
    `,
  body: `
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
        font-weight: 400;
        color: ${colors.bodyText};
    `,
  mono: `
        font-family: Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
        font-weight: 400;
        color: ${colors.bodyText};
    `,
};

const sizes = {
  extraLarge: `13vw`,
  large: `10vw`,
  medium: `6vw`,
  small: `3vw`,
};

const breakpoints = {
  mobile: `only screen and (max-width: 736px)`,
  desktop: `only screen and (min-width: 1051px)`,
  retina: `only screen and (-webkit-min-device-pixel-ratio: 1.5), only screen and (min-device-pixel-ratio: 1.5)`,
  print: `print`,
};

export {colors, fonts, sizes, breakpoints};
