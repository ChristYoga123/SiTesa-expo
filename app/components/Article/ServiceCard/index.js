import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';

const ArticleServiceCard = ({image, text}) => {
    return (
        <View style={{ flexDirection: 'column', alignItems: 'center' }}>
            <Image source={image}/>
            <Text style={{ fontFamily: "Inter-Medium", fontSize: 10, textAlign: 'center' }}>{text}</Text>
        </View>
    );
}

const styles = StyleSheet.create({})

export default ArticleServiceCard;
