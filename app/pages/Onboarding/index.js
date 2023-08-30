import React from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';
import { OnboardingLogo } from '../../assets';
import { useNavigation } from '@react-navigation/core';

const Onboarding = ({navigation}) => {
    return (
        <View style={{ flex: 1, backgroundColor: "#D8F4F2" }}>
            <Image source={OnboardingLogo} />
            <View style={{ paddingHorizontal: 40, marginVertical: 40}}>
                <Text style={{ fontFamily: 'Poppins', textAlign: 'center', lineHeight: 24 , color: '#00A195'}}>
                    Selamat Datang di Si-TeSa {'\n'}
                    <Text style={{ fontFamily: 'Poppins-Bold' }}>(Sistem Informasi Tempurejo Sehat)</Text> {'\n'}
                    Yuk! Gali informasi lebih dalam mengenai kesehatan diri
                </Text>
            </View>
            <TouchableOpacity onPress={() => {
                navigation.replace("MainApp")
            }}>
                <View style={{ backgroundColor: "#00A295", width: 150, borderRadius: 20, padding: 5, marginLeft: 'auto', marginRight: 'auto' }}>
                    <Text style={{ fontFamily: 'Poppins', color: 'white', textAlign: 'center' }}>Mulai Sekarang</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({})

export default Onboarding;
