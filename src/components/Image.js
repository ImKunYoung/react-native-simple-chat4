import React from "react";
import styled from "styled-components/native";

const Container = styled.View`
  align-self: center;
  margin-bottom: 30px;

`;
const StyledImage = styled.Image`
  width: 100px;
  height: 100px;
  background-color: ${({theme})=> theme.imageBackground};
`;

const Image = ({url, imageStyle}) => {
    return (
        <Container>
            <StyledImage source={{uri:url}} style={imageStyle}/>
        </Container>
    )

}
export default Image