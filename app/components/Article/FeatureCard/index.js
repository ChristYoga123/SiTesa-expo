import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';

const ArticleFeatureCard = ({image, title, content}) => {
    return (
        <View style={{ flexDirection: 'row', gap: 10, padding: 14, backgroundColor: "#DCF0F2", borderRadius: 10 }}>
            <Image source={image} style={{ marginTop: 2 }}/>
            <View style={{ flexDirection: 'column', width: 150 ,overflow: "hidden" }}>
                <Text style={{ fontFamily: "Inter-SemiBold", fontSize: 12, color: "#498E8D" }}>{title}</Text>
                {content}
                {/* <Text style={{ fontFamily: "Inter-Medium", fontSize: 12, color: "#498E8D" }}>Sitesa siap bikin wawasan kesehatanmu bertambah dengan <Text style={{ fontFamily: "Inter-SemiBold" }}>Fitur Artikel</Text></Text> */}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({})

export default ArticleFeatureCard;
