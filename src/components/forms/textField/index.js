import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Text from '../../foundations/text';
import propToStyle from '../../../theme/utils/propToStyled';

const InputWrapper = styled.div`
 margin: 4px 0;

`;

const Input = styled(Text)`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.primary.main.color};
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
}) {
  return (
    <InputWrapper>
      <Input
        type="text"
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        value={value}
        paddingBottom={paddingBottom}
      />
    </InputWrapper>
  );
}

TextField.propTypes = {
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  paddingBottom: PropTypes.string,
};

TextField.defaultProps = {
  paddingBottom: 'inherit',
};
