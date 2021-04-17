import propToStyle from './propToStyled';

describe('propToStyle()', () => {
  describe('when receives an simple argument', () => {
    test('and it is a string', () => {
      const propToStyleResult = propToStyle('justifyContent');
      const componentProps = { justifyContent: 'center' }; // string
      const styleResult = propToStyleResult(componentProps);
      expect(styleResult).toEqual({ justifyContent: 'center' });
    });
    test('and it is a number', () => {
      const propToStyleResult = propToStyle('flex');
      const componentProps = { flex: 1 }; // number
      const styleResult = propToStyleResult(componentProps);
      expect(styleResult).toEqual({ flex: 1 });
    });
  });
  describe('when receives an argument with breakpoints', () => {
    test('renders only one breakpoint resolution', () => {
      const propToStyleResult = propToStyle('display');
      const componentProps = { display: { xs: 'flex' } };
      const styleResult = propToStyleResult(componentProps);

      expect(styleResult).toMatchSnapshot();
    });
    test('renders two or more breakpoint resolutions', () => {
      const propToStyleResult = propToStyle('textAlign');
      const componentProps = { textAlign: { xs: 'center', md: 'right' } };
      const styleResult = propToStyleResult(componentProps);

      expect(styleResult).toMatchSnapshot();
    });
  });
});
