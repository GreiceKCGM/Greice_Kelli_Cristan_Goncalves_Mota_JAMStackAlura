import typographyVariants from './typographyVariants';

export const colors = {
  background: {
    light: {
      color: '#FFFFFF',
    },
    main: {
      color: '#ffd5ce',
      contrastText: '#fff',
    },
  },
  borders: {
    main: {
      color: '#b6b6b6',
    },
  },
  primary: {
    main: {
      color: '#ffd5ce',
      contrastText: '#fff',
    },
  },
  secondary: {
    main: {
      color: '#d2a69f',
      contrastText: '#fff',
    },
  },
  tertiary: {
    main: {
      color: '#8B3E2F',
      contrastText: '#fff',
    },
    light: {
      color: '#88989E',
      contrastText: '#fff',
    },
  },
  modes: {
    dark: {},
  },
};

export default {
  colors,
  typographyVariants,
  breakpoints: {
    xs: 0, // extra small
    sm: 480, // small
    md: 768, // medium
    lg: 992, // large
    xl: 1200, // extra large
  },
  borderRadius: '8px',
  fontFamily: "'Fira Sans Condensed', sans-serif",
  transition: '200ms ease-in-out',
};
