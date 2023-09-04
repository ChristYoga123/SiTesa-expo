import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const RightChat = ({chat}) => {
    return (
        <View style={{ alignItems: "flex-end", paddingHorizontal: 20 }}>
            <View style={{ marginBottom: 10, paddingVertical: 10, paddingHorizontal: 20,  width: 250, borderRadius: 10, borderWidth: 1, borderColor: "#00A295" }}>
                <Text style={{ fontFamily: "Inter", color: 'white', lineHeight: 20, color: "#434343" }}>{chat}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({})

export default RightChat;
