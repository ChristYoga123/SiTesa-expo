import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const LeftChat = ({chat}) => {
    return (
        <View style={{ alignItems: "flex-start", paddingHorizontal: 20 }}>
            <View style={{ backgroundColor: '#00A295',  marginBottom: 10, paddingVertical: 10, paddingHorizontal: 20,  width: 250, borderRadius: 10, }}>
                <Text style={{ fontFamily: "Inter", color: 'white', lineHeight: 20 }}>{chat}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({})

export default LeftChat;
