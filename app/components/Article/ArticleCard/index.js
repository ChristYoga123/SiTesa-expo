import { useNavigation } from 'expo-router';
import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

const ArticleCard = ({image, title, content}) => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={() => {
            navigation.navigate("ArticleShow", {
                image: image,
                title: title,
                content: content,
            });
        }}>
            <View style={{ flexDirection: 'row', gap: 10, marginTop: 10 }}>
                <Image source={image} style={{ width: 70, height: 70, borderRadius: 10 }}/>
                <View style={{ flex: 1, gap: 2 }}>
                    <Text style={{ fontFamily: "Inter-SemiBold" }}>{title}</Text>
                    <Text style={{ fontFamily: "Inter", color: "#888686", fontSize: 10, fontStyle: "italic" }} numberOfLines={2}>{content}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({})

export default ArticleCard;
