import breakpointsMedia from '../breakpointsMedia';

function propToStyle(propName) {
  return function PropToStyle(props) {
    const propValue = props[propName];

    if (typeof propValue === 'string' || typeof propValue === 'number') {
      return {
        [propName]: propValue,
      };
    }

    if (typeof propValue === 'object') {
    //    return breakpointsMedia({
    //     xs: {
    //       [propName]: propValue.xs,
    //     },
    //     sm: {
    //       [propName]: propValue.sm,
    //     },
    //     md: {
    //       [propName]: propValue.md,
    //     },
    //     lg: {
    //       [propName]: propValue.lg,
    //     },
    //     xl: {
    //       [propName]: propValue.xl,
    //     },
    //   });
    // }
      const breakpoints = {};

      if (propValue.xs) breakpoints.xs = { [propName]: propValue.xs };
      if (propValue.sm) breakpoints.sm = { [propName]: propValue.sm };
      if (propValue.md) breakpoints.md = { [propName]: propValue.md };
      if (propValue.lg) breakpoints.lg = { [propName]: propValue.lg };
      if (propValue.xl) breakpoints.xl = { [propName]: propValue.xl };

      return breakpointsMedia(breakpoints);
    }
    return {};
  };
}

export default propToStyle;
