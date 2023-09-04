import React from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity, ScrollView} from 'react-native';
import {  SplashCircle } from '../../assets';
import { AntDesign } from '@expo/vector-icons';
import RenderHTML from 'react-native-render-html';
const ProductShow = ({navigation, title, heroImage, content}) => {
    const tagStyle = {
        p: {
            color: "#434343",
        },
        h3: {
            color: "#00A195",
        }
    }
    return (
        <ScrollView>
            <View style={{ flex: 1, backgroundColor: "#D8F4F2" }}>
                <Image source={SplashCircle} style={{ position: 'absolute', zIndex: -1, top: 0, left: 0 }} />
                <TouchableOpacity onPress={() => {
                    navigation.navigate("Products");
                }}>
                    <View style={{ flexDirection: 'row', gap: 10, marginTop: 30, marginLeft: 10 }}>
                        <AntDesign name="arrowleft" size={24} color="#888686" />
                        <Text style={{ fontFamily: 'Poppins', fontSize: 15, marginTop: 3 }}>Kembali</Text>
                    </View>
                </TouchableOpacity>
                    <View style={{ paddingHorizontal: 20, marginTop: 50 }}>
                        <Text style={{ fontFamily: "Poppins-SemiBold", fontSize: 20, color: "#00A295" }}>{title}</Text>
                        <Image source={heroImage} style={{ marginVertical: 20, marginHorizontal: 20 }}/>
                        <RenderHTML contentWidth={100} source={content} tagsStyles={tagStyle} />
                    </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({})

export default ProductShow;
