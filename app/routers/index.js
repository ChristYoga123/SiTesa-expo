import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Onboarding, SplashScreen } from '../pages';

const Stack = createNativeStackNavigator();
const Router = () => {
    return (
        <Stack.Navigator initialRouteName='SplashScreen'>
            <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Onboarding" component={Onboarding} options={{ headerShown: false }} />    
        </Stack.Navigator>
    );
}

export default Router;
