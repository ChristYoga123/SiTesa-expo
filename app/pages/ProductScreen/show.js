import React from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity, ScrollView} from 'react-native';
import {  ProductDummy } from '../../assets';
const ProductShow = () => {
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
            <View style={{ flex: 1, backgroundColor: "white" }}>
                <View style={{ alignItems: "center" }}>
                    <Image source={ProductDummy} style={{ marginTop: 50 }} />
                </View>
                <View style={{ paddingHorizontal: 15, marginTop: 15 }}>
                    <Text style={{ fontFamily: "Inter-SemiBold", fontSize: 16 }}>Keripik Bayam Original</Text>
                    <Text style={{ fontFamily: "Inter", fontSize: 12, marginTop: 10 }}>
                        Keripik Bayam Segar adalah cemilan sehat yang dibuat dengan teliti dari bayam segar berkualitas tinggi yang dipanen secara selektif. Produk ini merupakan pilihan sempurna bagi mereka yang mencari camilan yang lezat dan bernutrisi, serta cocok untuk semua usia. Keripik bayam kami dibuat dengan menggunakan metode penggorengan rendam yang hati-hati sehingga menghasilkan rasa renyah yang menggugah selera.

                        {'\n\n'}
                        Keripik Bayam Segar adalah cemilan sehat yang dibuat dengan teliti dari bayam segar berkualitas tinggi yang dipanen secara selektif. Produk ini merupakan pilihan sempurna bagi mereka yang mencari camilan yang lezat dan bernutrisi, serta cocok untuk semua usia. Keripik bayam kami dibuat dengan menggunakan metode penggorengan rendam yang hati-hati sehingga menghasilkan rasa renyah yang menggugah selera.

                        {'\n\n'}
                        Keripik Bayam Segar adalah cemilan sehat yang dibuat dengan teliti dari bayam segar berkualitas tinggi yang dipanen secara selektif. Produk ini merupakan pilihan sempurna bagi mereka yang mencari camilan yang lezat dan bernutrisi, serta cocok untuk semua usia. Keripik bayam kami dibuat dengan menggunakan metode penggorengan rendam yang hati-hati sehingga menghasilkan rasa renyah yang menggugah selera.
                    </Text>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({})

export default ProductShow;
