import React from 'react';
import {View, StyleSheet, ScrollView, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import {ProductDummy } from '../../assets';
import { ProductCard } from '../../components';

const Products = ({navigation}) => {
    return (
        <View style={{ flex: 1, backgroundColor: "white" }}>
            <View style={{ alignItems: 'center' }}>
                <TextInput placeholder='Cari Produk...' style={{ borderWidth: 1, padding: 10, width: 300, borderRadius: 10, fontFamily: "Inter", marginVertical: 50, borderColor: "#D9D9D9" }}/>
            </View>
            <ScrollView>
                <View style={{flexDirection: "row", justifyContent: "center", flexWrap: "wrap", justifyContent: 'space-around', gap: 10 }}>
                    {[1,2,3,4,5,6,7,8,9,10].map(() => (
                        <ProductCard image={ProductDummy} title={"Keripik Bayam Original"}/>
                    ))}
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({})

export default Products;
