import React, {useEffect, useState} from "react";
import styled from "styled-components/native";
import {Text} from "react-native";
import {validateEmail} from "../utils/common";
import PropTypes from "prop-types";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({theme}) => theme.background};

`;
const ErrorText = styled.Text`

`
const ErrorMessage = ({names, email, password, passwordConfirm}) => {
    let _errorMessage = ' ';
    if(!names) {
        _errorMessage = 'Please verify your name.'
    } else if (!validateEmail(email)) {
        _errorMessage = 'Please verify your email.'
    } else if (password.length < 6) {
        _errorMessage = 'The password must contain 6 characters at least.'
    } else if (password !== passwordConfirm) {
        _errorMessage = 'Passwords need to match.'
    } else {
        _errorMessage = ' '
    }
    return _errorMessage
}

ErrorMessage.propTypes = {
    password: PropTypes.string,
}

const Signup = () => {
    /*이름*/
    const [names, setName] = useState('')
    /*이메일*/
    const [email, setEmail] = useState('')
    /*비밀번호*/
    const [password, setPassword] = useState('')
    /*비밀번호 확인*/
    const [passwordConfirm, setPasswordConfirm] = useState('')
    /*에러 메시지*/
    const [errorMessage, setErrorMessage] = useState('')
    /*버튼 Disabled*/
    const [disabled, setDisabled] = useState(true)

    useEffect(() => {
        ErrorMessage({names, email, password, passwordConfirm});
    }, [names, email, password, passwordConfirm]);


    return(
        <Container>
            <Text style={{fontSize: 30}}>Signup Screen</Text>
        </Container>
    )
}

export default Signup;