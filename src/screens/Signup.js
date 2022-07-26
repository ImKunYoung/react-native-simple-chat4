import React, {useEffect, useRef, useState} from "react";
import styled from "styled-components/native";
import {Text} from "react-native";
import {validateEmail} from "../utils/common";
import PropTypes from "prop-types";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";
import {Input} from "../components";


const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({theme}) => theme.background};

`;
const ErrorText = styled.Text`

`

export const ErrorMessage = ({names, email, password, passwordConfirm}) => {
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
    console.log(`Signup.js`)
    /*이름*/
    const [name, setName] = useState('')
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

    /*useRef - 특정 Dom 선택 (when keyboard..)*/
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();

    useEffect(() => {
        ErrorMessage({names: name, email, password, passwordConfirm});
    }, [name, email, password, passwordConfirm]);


    return(
        <KeyboardAwareScrollView>
            {/*이름 입력창*/}
            <Input
                label="Name"
                value={name}
                onChangeText={text => setName(text)}
                onSubmitEditing={()=>{
                    setName(name.trim());
                    emailRef.current.focus();
                }}
                onBlur={()=>setName(name.trim())}
                placeholder="Name"
                returnKeyType="next"
            />


        </KeyboardAwareScrollView>
    )
}

export default Signup;