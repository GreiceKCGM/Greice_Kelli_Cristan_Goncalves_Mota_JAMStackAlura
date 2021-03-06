import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import styled, { css } from 'styled-components';
import propToStyle from '../../../theme/utils/propToStyle/propToStyled';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';
import Link from '../../commons/link';

export const TextStyleVariantsMap = {
  paragraph1: css`
    font-size: ${({ theme }) => theme.typographyVariants.paragraph1.fontSize};
    font-weight: ${({ theme }) => theme.typographyVariants.paragraph1.fontWeight};
    line-height: ${({ theme }) => theme.typographyVariants.paragraph1.lineHeight};
  `,
  smallestException: css`
    font-size: ${({ theme }) => theme.typographyVariants.smallestException.fontSize};
    font-weight: ${({ theme }) => theme.typographyVariants.smallestException.fontWeight};
    line-height: ${({ theme }) => theme.typographyVariants.smallestException.lineHeight};
  `,
  titleXS: css`
    font-size: ${({ theme }) => theme.typographyVariants.titleXS.fontSize};
    font-weight: ${({ theme }) => theme.typographyVariants.titleXS.fontWeight};
    line-height: ${({ theme }) => theme.typographyVariants.titleXS.lineHeight};
  `,
  title: css`
    ${({ theme }) => css`
      font-size: ${theme.typographyVariants.titleXS.fontSize};
      font-weight: ${theme.typographyVariants.titleXS.fontWeight};
      line-height: ${theme.typographyVariants.titleXS.lineHeight};
    `}
    ${breakpointsMedia({
    md: css`
        ${({ theme }) => css`
          font-size: ${theme.typographyVariants.title.fontSize};
          font-weight: ${theme.typographyVariants.title.fontWeight};
          line-height: ${theme.typographyVariants.title.lineHeight};
        `}
      `,
  })}
  `,
};

// const paragraph1 = css`
//   ${({ theme }) => css`
//     font-size: ${theme.typographyVariants.paragraph1.fontSize};
//     font-weight: ${theme.typographyVariants.paragraph1.fontWeight};
//     line-height: ${theme.typographyVariants.paragraph1.lineHeight};
//   `}
// `;

// const smallestException = css`
//   ${({ theme }) => css`
//     font-size: ${theme.typographyVariants.smallestException.fontSize};
//     font-weight: ${theme.typographyVariants.smallestException.fontWeight};
//     line-height: ${theme.typographyVariants.smallestException.lineHeight};
//   `}
// `;
// const titleXS = css`
//   ${({ theme }) => css`
//     font-size: ${theme.typographyVariants.smallestException.fontSize};
//     font-weight: ${theme.typographyVariants.smallestException.fontWeight};
//     line-height: ${theme.typographyVariants.smallestException.lineHeight};
//   `}
// `;

// export const TextStyleVariants = {
//   smallestException,
//   paragraph1,
//   titleXS,
//   title: css`
//     ${({ theme }) => css`
//       font-size: ${theme.typographyVariants.titleXS.fontSize};
//       font-weight: ${theme.typographyVariants.titleXS.fontWeight};
//       line-height: ${theme.typographyVariants.titleXS.lineHeight};
//     `}
//     ${breakpointsMedia({
//     md: css`
//         ${({ theme }) => css`
//           font-size: ${theme.typographyVariants.title.fontSize};
//           font-weight: ${theme.typographyVariants.title.fontWeight};
//           line-height: ${theme.typographyVariants.title.lineHeight};
//         `}
//       `,
//   })}
//   `,
// };

const TextBase = styled.span`
   ${(props) => TextStyleVariantsMap[props.variants]}
   color: ${(props) => get(props.theme, `colors.${props.color}.color`)};

  ${propToStyle('textAlign')}
   ${propToStyle('marginBottom')}
   ${propToStyle('margin')}
   ${propToStyle('marginTop')}
   ${propToStyle('paddingBottom')}
   ${propToStyle('paddingRight')}
   ${propToStyle('position')}
`;

// eslint-disable-next-line object-curly-newline
export default function Text({ tag, variant, children, href, ...props }) {
  return (
    <TextBase
      as={href ? Link : tag}
      variant={variant}
    // eslint-disable-next-line react/jsx-props-no-spreading
      {...{ ...props, href }}
    >
      {children}
    </TextBase>
  );
}

Text.propTypes = {
  children: PropTypes.node,
  tag: PropTypes.string,
  variant: PropTypes.string,
  href: PropTypes.string,
};

Text.defaultProps = {
  tag: 'span',
  variant: 'paragraph1',
  children: null,
  href: '',
};

// Text.propTypes = {
//   children: PropTypes.node,
//   href: PropTypes.string,
//   tag: PropTypes.oneOf([
//     'h1',
//     'h2',
//     'h3',
//     'h4',
//     'h5',
//     'h6',
//     'p',
//     'li',
//     'a',
//     'span',
//     'input',
//   ]),
// eslint-disable-next-line max-len
//   variant: PropTypes.oneOf(['paragraph1', 'smallestException', 'title', 'titleXS', 'paragraph2']),
// };

// Text.defaultProps = {
//   tag: 'span',
//   variant: 'paragraph1',
//   children: null,
//   href: '',
// };
