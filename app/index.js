import { View } from "react-native";
import { SplashScreen } from "./pages";

export default function App()
{
    return (
        <>
            <View style={{ flex: 1, backgroundColor: "#D8F4F2" }}>
                {/* Entry Point */}
                <SplashScreen />
            </View>
        </>
    )
}