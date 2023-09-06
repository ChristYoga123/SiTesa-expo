import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { ArticleShow, Articles, Calculator, Chat, Onboarding, ProductShow, Products, SplashScreen } from '../pages';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
    return (
        <Tab.Navigator initialRouteName='Articles'>
            <Tab.Screen name="Artikel" component={Articles} options={{ headerShown: false }}/>
            <Tab.Screen name="Kalkulator" component={Calculator} options={{ headerShown: false }}/>
            <Tab.Screen name="Produk" component={Products} options={{ headerShown: false }}/>
        </Tab.Navigator>
    )
}

const Router = () => {
    return (
        <Stack.Navigator initialRouteName='SplashScreen'>
            <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Onboarding" component={Onboarding} options={{ headerShown: false }} />    
            <Stack.Screen name="MainApp" component={MainApp} options={{ headerShown: false }} />
            <Stack.Screen name='ArticleShow' component={ArticleShow} options={{ title: "Detail Artikel", headerTitleAlign: "center" }} />
            <Stack.Screen name='ProductShow' component={ProductShow} options={{ title: "Produk Unggulan", headerTitleAlign: "center" }} />
            <Stack.Screen name='Chat' component={Chat} options={{ title: "Chat SiTesa", headerTitleAlign: "center" }}/>
        </Stack.Navigator>
    );
}

export default Router;
