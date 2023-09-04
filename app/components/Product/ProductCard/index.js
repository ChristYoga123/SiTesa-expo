import { useNavigation } from 'expo-router';
import React from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';

const ProductCard = ({image, title, content}) => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={() => {
            navigation.navigate("ProductShow", {
                image: image,
                title: title, 
                content: content
            });
        }}>
            <View style={{ padding: 10, borderRadius: 10, backgroundColor: "white", shadowColor: 'black', shadowOffset: {width: 1, height: 1}, shadowOpacity: 0.1, elevation: 2, gap: 5, width: 170 }}>
                <Image source={image} style={{ width: 150, height: 150, borderRadius: 10 }} />
                <Text style={{ fontFamily: "Inter-SemiBold" }}>{title}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({})

export default ProductCard;
