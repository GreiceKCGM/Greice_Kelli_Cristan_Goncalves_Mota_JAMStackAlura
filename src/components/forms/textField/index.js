import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import Text from '../../foundations/text';
import propToStyle from '../../../theme/utils/propToStyle/propToStyled';

const InputWrapper = styled.div`
 margin: 4px 0;

`;

const Input = styled(Text)`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.borders.main.color};
  padding: 12px 16px;
  margin: 4px 0;
  ${propToStyle('paddingBottom')}


  outline: 0;
  border-radius: ${({ theme }) => theme.borderRadius};
   ${({ theme, isFieldInvalid }) => isFieldInvalid && css`
    border-color: ${theme.colors.error.main.color};
    & + span {
      color: ${theme.colors.error.main.color};
      font-size: 11px;
    }
  `}
`;

Input.defaultProps = {
  tag: 'input',
  variant: 'paragraph1',
  paddingBottom: 'inherit',
};

export default function TextField({
  placeholder,
  name,
  onChange,
  value,
  paddingBottom,
  error,
  isTouched,
  type,
  ...props
}) {
  const harErrors = Boolean(error);
  const isFieldInvalid = harErrors && isTouched;

  return (
    <InputWrapper>
      <Input
        type={type}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        value={value}
        isFieldInvalid={isFieldInvalid}
        paddingBottom={paddingBottom}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
      />
      {isFieldInvalid && (
        <Text
          variant="smallestException"
          color="error.main"
          role="alert"
        >
          {error}
        </Text>
      )}
    </InputWrapper>
  );
}

TextField.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  error: PropTypes.string,
  isTouched: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  paddingBottom: PropTypes.string,
};

TextField.defaultProps = {
  type: 'text',
  paddingBottom: 'inherit',
  error: '',
  isTouched: false,
};
