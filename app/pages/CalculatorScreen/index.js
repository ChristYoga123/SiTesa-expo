import React from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import { ImtTable, SplashCircle } from '../../assets';
import { TextInput } from 'react-native-gesture-handler';

const Calculator = () => {
    return (
        <View style={{ flex: 1, backgroundColor: "white" }}>
            <Image source={SplashCircle} style={{ position: 'absolute', opacity: 0.5 }} />
            <View style={{ marginTop: 50, paddingHorizontal: 30 }}>
                <Text style={{ fontFamily: "Inter-SemiBold", fontSize: 16, color: "#00A295" }}>Kalkulator Sehat</Text>

                <View style={{ marginTop: 20, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', justifyContent: 'space-around', gap:10 }}>
                    <View style={{ borderWidth: 1, width: 140, padding: 10, borderColor: "#00A295", borderRadius: 10 }}>
                        <Text style={{ fontFamily: "Inter" }}>Tinggi Badan</Text>
                        <View style={{ flexDirection: 'row', gap: 10 }}>
                            <TextInput style={{ paddingVertical: 10 }} />
                            <Text style={{ fontFamily: "Inter-SemiBold", color: "#00A295", marginTop: 15 }}>CM</Text>
                        </View>
                    </View>

                    <View style={{ borderWidth: 1, width: 140, padding: 10, borderColor: "#00A295", borderRadius: 10 }}>
                        <Text style={{ fontFamily: "Inter" }}>Berat Badan</Text>
                        <View style={{ flexDirection: 'row', gap: 10 }}>
                            <TextInput style={{ paddingVertical: 10 }} />
                            <Text style={{ fontFamily: "Inter-SemiBold", color: "#00A295", marginTop: 15 }}>KG</Text>
                        </View>
                    </View>

                    <View style={{ borderWidth: 1, width: 140, padding: 10, borderColor: "#00A295", borderRadius: 10 }}>
                        <Text style={{ fontFamily: "Inter" }}>LILA</Text>
                        <View style={{ flexDirection: 'row', gap: 10 }}>
                            <TextInput style={{ paddingVertical: 10 }} />
                            <Text style={{ fontFamily: "Inter-SemiBold", color: "#00A295", marginTop: 15 }}>CM</Text>
                        </View>
                    </View>

                    <View style={{ borderWidth: 1, width: 140, padding: 10, borderColor: "#00A295", borderRadius: 10 }}>
                        <Text style={{ fontFamily: "Inter" }}>Tensi</Text>
                        <View style={{ flexDirection: 'row', gap: 10 }}>
                            <TextInput style={{ paddingVertical: 10 }} />
                            <Text style={{ fontFamily: "Inter-SemiBold", color: "#00A295", marginTop: 15 }}>mmHg</Text>
                        </View>
                    </View>
                </View>

                <TouchableOpacity>
                    <View style={{ alignItems: "center", backgroundColor: "#00A295", borderRadius: 10, paddingVertical: 10, marginTop:20 }}>
                        <Text style={{ fontFamily: "Inter", color: "white" }}>Hitung Hasil</Text>
                    </View>
                </TouchableOpacity>

                <View style={{ marginTop: 20 }}>
                    <Text style={{ fontFamily: "Inter-SemiBold", color: "#00A295", fontSize: 16, marginBottom: 10 }}>Hasil Akhir</Text>
                    <Text style={{ fontFamily: "Inter", textAlign: 'justify', lineHeight: 20 }}>Hasil IMT anda adalah <Text style={{ fontFamily: "Inter-SemiBold", color: "#00A295" }}>0</Text>, Kategori <Text style={{ fontFamily: "Inter-SemiBold", color: "#00A295" }}>Normal</Text>, Berat Badan Ideal anda <Text style={{ fontFamily: "Inter-SemiBold", color: "#00A295" }}>60</Text>, Tensi anda <Text style={{ fontFamily: "Inter-SemiBold", color: "#00A295" }}>Normal</Text></Text>
                </View>

                <View style={{ marginTop: 20 }}>
                    <Text style={{ fontFamily: "Inter-SemiBold", color: "#00A295", fontSize: 16, marginBottom: 10 }}>Tabel IMT</Text>
                    <Image source={ImtTable}/>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({})

export default Calculator;
