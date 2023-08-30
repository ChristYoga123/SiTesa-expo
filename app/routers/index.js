import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Articles, Calculator, Onboarding, Products, SplashScreen } from '../pages';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
    return (
        <Tab.Navigator initialRouteName='Articles'>
            <Tab.Screen name="Articles" component={Articles} options={{ headerShown: false }}/>
            <Tab.Screen name="Calculator" component={Calculator} options={{ headerShown: false }}/>
            <Tab.Screen name="Products" component={Products} options={{ headerShown: false }}/>
        </Tab.Navigator>
    )
}

const Router = () => {
    return (
        <Stack.Navigator initialRouteName='SplashScreen'>
            <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Onboarding" component={Onboarding} options={{ headerShown: false }} />    
            <Stack.Screen name="MainApp" component={MainApp} options={{ headerShown: false }} />    
        </Stack.Navigator>
    );
}

export default Router;
