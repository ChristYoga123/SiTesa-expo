import React from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import { ArticlesDummy, ArticlesHero } from '../../assets';
import { ScrollView } from 'react-native-gesture-handler';

const Articles = () => {
    return (
        <ScrollView>
            <View style={{ flex: 1, backgroundColor: "#D8F4F2" }}>
                <Image source={ArticlesHero} />
                <View style={{ marginTop:30, paddingHorizontal: 30 }}>
                    <Text style={{ fontFamily: "Poppins-SemiBold",  fontSize:20 , color: "#00A195"}}>Artikel Unggulan</Text>
                    <View style={{marginTop: 20 }}>
                        {[1,2,3,4,5,6,7,8,9,10].map(() => (
                            <TouchableOpacity>
                                <View style={{ backgroundColor: 'white', flexDirection: 'row' , padding: 10, gap: 5, borderRadius: 10, marginBottom: 10}}>
                                    <Image source={ArticlesDummy} />
                                    <View style={{ flex: 1, flexDirection: 'column', gap: 2 }}>
                                        <Text style={{ fontFamily: 'Poppins-SemiBold', color:"#00A195", fontSize: 12 }}>Tips Kelola Stress Agar Hidup Lebih Bahagia </Text>
                                        <Text style={{ fontFamily: 'Poppins', fontSize: 10}} numberOfLines={2}>Stres merupakan perasaan yang wajar dialami seseorang dalam kehidupannya sehari-hari.</Text>
                                        <Text style={{ fontFamily: "Poppins", color: "gray", fontSize: 10, fontStyle:'italic' }}>View All...</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}

export default Articles;
