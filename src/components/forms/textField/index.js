import React from 'react';
import styled from 'styled-components';
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
  ...props
}) {
  const harErrors = Boolean(error);
  const isFieldInvalid = harErrors && isTouched;

  return (
    <InputWrapper>
      <Input
        type="text"
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        value={value}
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
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  error: PropTypes.string,
  isTouched: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  paddingBottom: PropTypes.string,
};

TextField.defaultProps = {
  paddingBottom: 'inherit',
  error: '',
  isTouched: false,
};
