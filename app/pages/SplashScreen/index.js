import React, { useEffect } from 'react';
import {View, StyleSheet, Image} from 'react-native';
import { SplashCircle, SplashLogo } from '../../assets';

const SplashScreen = () => {
    // useEffect(() => {
    //     setTimeout(() => {
    //         navigation.replace('Onboarding');
    //     }, 2000)
    // }, [])
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Image source={SplashCircle} style={{ position: 'absolute', top: 0, left: 0 }}/>
            <Image source={SplashLogo}/>
            <Image source={SplashCircle} style={{ position: 'absolute', bottom: 0, right: 0, transform: [{rotate: '180deg'}] }}/>
        </View>
    );
}

const styles = StyleSheet.create({})

export default SplashScreen;
