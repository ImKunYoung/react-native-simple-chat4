import React, {useRef, useState} from "react";
import styled from 'styled-components/native';
import {Button, Keyboard, TouchableWithoutFeedback} from "react-native";
import {images} from "../utils/images";
import {Image, Input} from "../components";
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({theme}) => theme.background};
  padding: 20px;

`

const Login = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const passwordRef = useRef(null);

    const _handleSignup = () => {navigation.navigate('Signup')}
    return (
        /*TouchableWithoutFeedback -> 클릭에 대해 상호작용, Keyboard api (dismiss) -> 활성화된 키보들르 닫음*/
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

            {/*포커스가 있는 TextInput 컴포넌트 위치로 자동 스크롤*/}
            <KeyboardAwareScrollView
                contentContainerStyle={{flex:1}}
                extraScrollHeight={20}
            >

                <Container>
                    <Image url={images.logo} imageStyle={{borderRadius:8}}/>
                    <Input
                        label="Email"
                        value={email}
                        onChangeText={text=>setEmail(text)}
                        onSubmitEditing={() => {passwordRef.current.focus()}}
                        placeholder="Email"
                        returnKeyType="next"
                    />
                    <Input
                        ref={passwordRef}
                        label="Password"
                        value={password}
                        onChangeText={text=>setPassword(text)}
                        onSubmitEditing={() => {}}
                        placeholder="Password"
                        returnKeyType="done"
                        isPassword
                    />
                    <Button title="Signup" onPress={_handleSignup}/>
                </Container>

            </KeyboardAwareScrollView>

        </TouchableWithoutFeedback>
    )
}
export default Login
