import React, {useEffect, useRef, useState} from "react";
import styled from "styled-components/native";
import {removeWhitespace, validateEmail} from "../utils/common";
import PropTypes from "prop-types";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";
import {Image, Input} from "../components";
import Button from "../components/Button";
import {images} from "../utils/images";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({theme}) => theme.background};
  padding: 40px 20px;
`;

const ErrorText = styled.Text`
  align-items: flex-start;
  width: 100%;
  height: 20px;
  margin-bottom: 10px;
  line-height: 20px;
  color: ${({theme}) => theme.errorText};
`

export const ErrorMessage = ({names, email, password, passwordConfirm}) => {
    let _errorMessage;
    if(!names) {
        _errorMessage = 'Please verify your name.'
    } else if (!validateEmail(email)) {
        _errorMessage = 'Please verify your email.'
    } else if (password.length < 6) {
        _errorMessage = 'The password must contain 6 characters at least.'
    } else if (password !== passwordConfirm) {
        _errorMessage = 'Passwords need to match.'
    } else {
        _errorMessage = ''
    }
    return _errorMessage
}
ErrorMessage.propTypes = {
    password: PropTypes.string,
}

const Signup = () => {
    console.log(`Signup.js`)
    /*default 사진*/
    const [photoUrl, setPhotoUrl] = useState(images.photo);
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
    /*에러 메시지 마운트*/
    const didMountRef = useRef(false)
    /*버튼 Disabled*/
    const [disabled, setDisabled] = useState(true)


    /*useRef - 특정 Dom 선택 (when keyboard..)*/
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();

    /*[name, email, password, passwordConfirm] 리렌더링 될 때마다 실행*/
    useEffect(() => {
        console.log('useEffect - ErrorMessage-- [name, email, password, passwordConfirm] 리렌더링 될 때마다 실행');
        if (didMountRef.current) { // 처음 렌더링될 때 오류 메시지는 렌더링에서 제외
            setErrorMessage(ErrorMessage({names: name, email, password, passwordConfirm}))
        } else {
            didMountRef.current = true;
        }


    }, [name, email, password, passwordConfirm]);

    useEffect(() => {
        console.log('useEffect - setDisabled -- [name, email, password, passwordConfirm] 리렌더링 될 때마다 실행');
        setDisabled(
            !(name && email && password && passwordConfirm && !errorMessage)
        );
    }, [name, email, password, passwordConfirm, errorMessage])

    const _handleSignupButtonPress = () => {
        console.log(`_handleSignupButtonPress`)
    };

    return(
        <KeyboardAwareScrollView
            enableOnAndroid={true}
            scrollForExtraHeightOnAndroid={20}
            extraScrollHeight={20}
        >
            <Container>

                {/*프로필 이미지*/}
                <Image rounded url={photoUrl} showButton/>

                {/*이름 입력창*/}
                <Input
                    label="Name"
                    value={name}
                    onChangeText={text => setName(text)}
                    onSubmitEditing={()=>{
                        setName(name.trim());
                        emailRef.current?.focus();
                    }}
                    onBlur={()=>setName(name.trim())}
                    placeholder="Name"
                    returnKeyType="next"
                />

                {/*이메일 입력창*/}
                <Input
                    ref={emailRef}
                    label="Email"
                    value={email}
                    onChangeText={text => setEmail(removeWhitespace(text))}
                    onSubmitEditing={()=>{passwordRef.current?.focus()}}
                    placeholder="Email"
                    returnKeyType="next"
                />

                {/*비밀번호 입력창*/}
                <Input
                    ref={passwordRef}
                    label="Password"
                    value={password}
                    onChangeText={text => setPassword(removeWhitespace(text))}
                    onSubmitEditing={() => passwordRef.current?.focus()}
                    placeholder="Password"
                    returnKeyType="done"
                    isPassword
                />

                {/*비밀번호 확인 입력창*/}
                <Input  ref={passwordConfirmRef}
                        label="Password Confirm"
                        value={passwordConfirm}
                        onChangeText={text => setPasswordConfirm(removeWhitespace(text))}
                        onSubmitEditing={_handleSignupButtonPress}
                        placeholder="Password Confirm"
                        returnKeyType="done"
                        isPassword
                />

                <ErrorText>{errorMessage}</ErrorText>

                <Button title="Signup" onPress={_handleSignupButtonPress} disabled={disabled}/>
            </Container>
        </KeyboardAwareScrollView>
    )
}

export default Signup;
