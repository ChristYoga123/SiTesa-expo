import { View } from "react-native";
import {useFonts} from 'expo-font';
import { NavigationContainer } from "@react-navigation/native";
import Router from "./routers";
import { SplashScreen } from "./pages";

export default function App()
{
    const [fontsLoaded] = useFonts({
        'Inter': require("./assets/fonts/Inter-Regular.ttf"),
        'Inter-Medium': require("./assets/fonts/Inter-Medium.ttf"),
        'Inter-SemiBold': require("./assets/fonts/Inter-SemiBold.ttf")
    })
    if (!fontsLoaded) {
        return null;
    }
    return (
        <SplashScreen />
        // <NavigationContainer independent={true}>
        //     <Router />
        // </NavigationContainer>
    )
}