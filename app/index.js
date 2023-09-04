import { View } from "react-native";
import {useFonts} from 'expo-font';
import { NavigationContainer } from "@react-navigation/native";
import Router from "./routers";
import { Onboarding, SplashScreen } from "./pages";

export default function App()
{
    const [fontsLoaded] = useFonts({
        'Inter': require("./assets/fonts/Inter-Regular.ttf"),
        'Inter-Medium': require("./assets/fonts/Inter-Medium.ttf"),
        'Inter-SemiBold': require("./assets/fonts/Inter-SemiBold.ttf"),
        'Poppins': require("./assets/fonts/Poppins-Regular.ttf"),
        'Poppins-Medium': require("./assets/fonts/Poppins-Medium.ttf"),
        'Poppins-SemiBold': require("./assets/fonts/Poppins-SemiBold.ttf"),
        'Poppins-Bold': require("./assets/fonts/Poppins-Bold.ttf"),
    })
    if (!fontsLoaded) {
        return null;
    }
    return (
        <Onboarding />
        // <NavigationContainer independent={true}>
        //     <Router />
        // </NavigationContainer>
    )
}