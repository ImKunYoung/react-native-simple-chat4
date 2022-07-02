import React, {useEffect, useState} from "react";
import {ThemeProvider} from "styled-components";
import {StatusBar} from "react-native";
import {Asset as Font, Asset} from "expo-asset";
import {theme} from "./theme";
import * as SplashScreen from "expo-splash-screen";

const useCachedResources = () => {
    const [isLoadingComplete, setLoadingComplete] = useState(false);
    useEffect(() => {
        async function loadResourcesAndDataAsync() {
            try {
                await SplashScreen.preventAutoHideAsync();
                const images = [require('../assets/splash.png')];
                images.map(async image =>
                    await Asset.fromModule(image).downloadAsync());
            } catch (e) {console.warn(e);}
             finally {
                setLoadingComplete(true);
                await SplashScreen.hideAsync();
            }
        }
        loadResourcesAndDataAsync();
    }, []);
    return isLoadingComplete;
}

const App = () => {
    const isLoadingComplete = useCachedResources();
    if (!isLoadingComplete) {
        return null;
    }
    return (
        <ThemeProvider theme={theme}>
            <StatusBar barStyle="dark-content"/>
        </ThemeProvider>
    )
}
export default App;