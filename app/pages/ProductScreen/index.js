import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import {View, StyleSheet, ScrollView, Text} from 'react-native';
import { ProductStore, ProductsDummy } from '../../assets';

const Products = () => {
    return (
        <ScrollView>
            <View style={{ flex: 1, backgroundColor: "#D8F4F2",  paddingHorizontal: 30 }}>
                <Text style={{ marginTop: 80, fontFamily: "Poppins-SemiBold",  fontSize:20 , color: "#00A195"}}>Produk Unggulan</Text>

                <View style={{ marginTop: 10, flexDirection: 'row', flexWrap: 'wrap', gap: 10, justifyContent: 'center' }}>
                    {[1,2,3,4,5,6,7,8,9,10].map(() => (
                        <TouchableOpacity>
                            <View style={{ flexDirection: 'column', padding: 10, backgroundColor: 'white', borderRadius: 10 }}>
                                <Image source={ProductsDummy} style={{ width: 125, height: 125, borderRadius: 10 }}/>
                                <View style={{ marginTop: 5, flexDirection: 'row', gap: 10 }}>
                                    <View style={{ flex: 1, flexDirection: 'column' }}>
                                        <Text style={{ fontFamily: 'Poppins-SemiBold', color: '#00A295', fontSize: 10 }}>Brownies Biji Karet</Text>
                                        <Text style={{ fontFamily: 'Poppins-SemiBold', color: 'black', fontSize: 10 }}>Rp 25.000</Text>
                                    </View>
                                    <View style={{ backgroundColor: "#D8F4F2",padding: 5, height: 20, borderRadius: 20, marginTop: 5}}>
                                        <Image source={ProductStore} />
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({})

export default Products;
