import React from "react";
import styled from 'styled-components/native';
import {Button} from "react-native";
import {images} from "../utils/images";
import {Image} from "../components";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({theme}) => theme.background};

`

const Login = ({navigation}) => {
    const _handleSignup = () => {navigation.navigate('Signup')}
    return (
        <Container>
            <Image url={images.logo} imageStyle={{borderRadius:8}}/>
            <Button title="Signup" onPress={_handleSignup}/>
        </Container>
    )
}
export default Login
