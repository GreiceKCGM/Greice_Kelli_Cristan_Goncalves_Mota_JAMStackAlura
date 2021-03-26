import styled from 'styled-components';
import propToStyle from '../../../../theme/utils/propToStyled';

const Box = styled.div`
    ${propToStyle('flex')}
    ${propToStyle('display')}
    ${propToStyle('flexDirection')}
    ${propToStyle('justifyContent')}
    ${propToStyle('flexWrap')}
    ${propToStyle('backgroundColor')}
    ${propToStyle('backgroundImage')}
    ${propToStyle('backgroundRepeat')}
    ${propToStyle('backgroundPosition')}
    ${propToStyle('borderRadius')}
    ${propToStyle('height')}
    ${propToStyle('boxShadow')}
    ${propToStyle('padding')}
    ${propToStyle('paddingRight')}
    ${propToStyle('alignSelf')}
    ${propToStyle('marginBottom')}
    ${propToStyle('listStyle')}
    ${propToStyle('fontSize')}
    ${propToStyle('position')}
`;

export default Box;
