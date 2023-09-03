import { View } from "react-native";
import {useFonts} from 'expo-font';
import { NavigationContainer } from "@react-navigation/native";
import Router from "./routers";

export default function App()
{
    const [fontsLoaded] = useFonts({
        'Poppins-Bold': require("./assets/fonts/Poppins-Bold.ttf"),
        'Poppins': require("./assets/fonts/Poppins-Regular.ttf"),
        'Poppins-Medium': require("./assets/fonts/Poppins-Medium.ttf"),
        'Poppins-SemiBold': require("./assets/fonts/Poppins-SemiBold.ttf"),
    })
    if (!fontsLoaded) {
        return null;
    }
    return (
        <NavigationContainer independent={true}>
            <Router />
        </NavigationContainer>
    )
}