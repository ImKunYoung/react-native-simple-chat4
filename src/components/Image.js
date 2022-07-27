import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";

const Container = styled.View`
  align-self: center;
  margin-bottom: 30px;

`;
const StyledImage = styled.Image`
  width: 100px;
  height: 100px;
  background-color: ${({theme})=> theme.imageBackground};
  border-radius: ${({rounded}) => (rounded ? 50 : 0)}px;
`;

const Image = ({url, imageStyle, rounded}) => {
    return (
        <Container>
            <StyledImage source={{uri:url}} style={imageStyle} rounded={rounded}/>
        </Container>
    )

}
export default Image

Image.defaultProps = {
    rounded: false,
}

Image.propTypes = {
    url: PropTypes.string,
    imageStyle: PropTypes.object,
    rounded: PropTypes.bool,
}
