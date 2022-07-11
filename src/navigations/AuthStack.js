import React, {useContext} from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {ThemeContext} from "styled-components/native";
import {Login, Signup} from "../screens";

const Stack = createStackNavigator();

const AuthStack = () => {
    const theme = useContext(ThemeContext);
    return (
        <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{
                headerTitleAlign:'center',
                cardStyle:{backgroundColor:theme.background},
                headerTintColor: theme.headerTintColor, /*헤더색 변경 - 버튼과 타이틀 색이 일치되도록*/
            }}
        >
            {/*헤더 가림*/}
            <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
            {/*헤더 뒤로가기 버튼에 타이틀 가림*/}
            <Stack.Screen name="Signup" component={Signup} options={{headerBackTitleVisible: false}}/>
        </Stack.Navigator>

    )
}
export default AuthStack