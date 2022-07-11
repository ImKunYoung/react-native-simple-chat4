import React, {useEffect, useRef, useState} from "react";
import styled from 'styled-components/native';
import {Keyboard, TouchableWithoutFeedback} from "react-native";
import {images} from "../utils/images";
import {Image, Input} from "../components";
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {removeWhitespace, validateEmail} from "../utils/common";
import Button from "../components/Button";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({theme}) => theme.background};
  padding: 20px;
`

const ErrorText = styled.Text`
  align-items: flex-start;
  width: 100%;
  height: 20px;
  margin-bottom: 10px;
  line-height: 20px;
  color: ${({theme}) => theme.errorText};
`

const Login = ({navigation}) => {
    /*이메일*/
    const [email, setEmail] = useState('');
    /*비밀번호*/
    const [password, setPassword] = useState('');
    const passwordRef = useRef(null);
    /*오루 메시지*/
    const [errorMessage, setErrorMessage] = useState('');


    /*이메일 입력창 이벤트 처리*/
    const _handleEmailChange = email => {

        /*공백 제거*/
        const changeEmail = removeWhitespace(email);
        setEmail(changeEmail);

        /*이메일 형식 확인, ErrorMessage 세팅*/
        setErrorMessage(validateEmail(changeEmail) ? '':'Please verify your email.')

    }

    /*비밀번호 입력창 이벤트 처리*/
    const _handlePasswordChange = password => {
        /*공백 제거*/
        setPassword(removeWhitespace(password))
    }

    /*로그인 버튼 이벤트 처리*/
    const _handleLoginButtonPress = () => {
        console.log("로그인 버튼 이벤트 처리")
    }

    /*Sign up 버튼 이벤트 처리*/
    const _handleSignUpButtonPress = () => {
        navigation.navigate('Signup')
    }

    /*버튼 Disabled Effect*/
    const [disabled, setDisabled] = useState(true);

    useEffect(()=>{
        setDisabled(!(email && password && !errorMessage))
    }, [email, password, errorMessage])


    return (
        /*TouchableWithoutFeedback -> 클릭에 대해 상호작용, Keyboard api (dismiss) -> 활성화된 키보들르 닫음*/
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

            {/*포커스가 있는 TextInput 컴포넌트 위치로 자동 스크롤*/}
            <KeyboardAwareScrollView
                contentContainerStyle={{flex:1}}
                extraScrollHeight={20}
            >

                <Container>

                    {/*로고*/}
                    <Image url={images.logo} imageStyle={{borderRadius:8}}/>

                    {/*email 입력창*/}
                    <Input
                        label="Email"
                        value={email}
                        onChangeText={_handleEmailChange}
                        onSubmitEditing={() => {passwordRef.current.focus()}}
                        placeholder="Email"
                        returnKeyType="next"
                    />

                    {/*패스워드 입력창*/}
                    <Input
                        ref={passwordRef}
                        label="Password"
                        value={password}
                        onChangeText={_handlePasswordChange}
                        onSubmitEditing={_handleLoginButtonPress}
                        placeholder="Password"
                        returnKeyType="done"
                        isPassword
                    />

                    {/*error 발생시 메시지 출력*/}
                    <ErrorText>{errorMessage}</ErrorText>

                    {/*로그인 버튼*/}
                    <Button title="Login" onPress={_handleLoginButtonPress} disabled={disabled}/>

                    {/*Sign up 버튼*/}
                    <Button title="Sign up with email" onPress={_handleSignUpButtonPress} isFilled={false}/>

                </Container>

            </KeyboardAwareScrollView>

        </TouchableWithoutFeedback>
    )
}
export default Login
