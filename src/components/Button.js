import React from "react";
import styled from "styled-components/native";
import PropTypes from 'prop-types';

/*바튼*/
const Container = styled.TouchableOpacity`
  background-color: ${({theme, isFilled}) => isFilled ? theme.buttonBackground : 'TRANSPARENT'}; /*isFilled 면 theme.buttonBackground 아니면 반전,,,*/
  align-items: center;
  border-radius: 4px;
  width: 100%;
  padding: 10px;
  opacity: ${({disabled})=>(disabled ? 0.5 : 1)};
`

/*버튼 Text*/
const Title = styled.Text`
  height: 30px;
  line-height: 30px; /*줄 간 간격(세로)*/
  font-size: 16px;
  color: ${({theme, isFilled}) => isFilled ? theme.buttonTitle : theme.buttonUnfilledTitle};
`

const Button = ({containerStyle, title, onPress, isFilled, disabled}) => {
    return (
        <Container style={containerStyle} onPress={onPress} isFilled={isFilled} disabled={disabled}>
            <Title isFilled={isFilled}>{title}</Title>
        </Container>
    )
}

Button.defaultProps = {
    isFilled: true,
}

Button.propTypes = {
    containerStyle: PropTypes.object,
    title: PropTypes.string,
    onPress: PropTypes.func.isRequired,
    isFilled: PropTypes.bool,
    disabled: PropTypes.bool,
}

export default Button;