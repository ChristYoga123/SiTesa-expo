import { View } from "react-native";
import { SplashScreen } from "./pages";
import Onboarding from "./pages/Onboarding";
import {useFonts} from 'expo-font';

export default function App()
{
    const [fontsLoaded] = useFonts({
        'Poppins-Bold': require("./assets/fonts/Poppins-Bold.ttf"),
        'Poppins': require("./assets/fonts/Poppins-Regular.ttf"),
    })
    if (!fontsLoaded) {
        return null;
    }
    return (
        <>
            <View style={{ flex: 1, backgroundColor: "#D8F4F2" }}>
                {/* Entry Point */}
                {/* <SplashScreen /> */}
                <Onboarding />
            </View>
        </>
    )
}