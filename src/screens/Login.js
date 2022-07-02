import React from "react";
import styled from 'styled-components/native';
import {Button, Text} from "react-native";

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
            <Text style={{fontSize:30}}>Login Screen</Text>
            <Button title="Signup" onPress={_handleSignup}/>
        </Container>
    )
}
export default Login
