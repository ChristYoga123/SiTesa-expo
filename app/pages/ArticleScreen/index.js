import React from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import { ArticleDummy, ArticleFeature, ArticleHero, ArticleService, CalculatorFeature, CalculatorService, Call, ChatService, ConsultationFeature, ProductService,  } from '../../assets';
import { ArticleCard, ArticleFeatureCard, ArticleServiceCard } from '../../components';
import { useNavigation } from 'expo-router';

const Articles = () => {
    const navigation = useNavigation();
    const articleFeatureCards = [
        {
            id: 1,
            image: ArticleFeature,
            title: "Tambah Wawasan",
            content: 
                <>
                    <Text style={{ fontFamily: "Inter-Medium", fontSize: 12, color: "#498E8D" }}>Sitesa siap bikin wawasan kesehatanmu bertambah dengan <Text style={{ fontFamily: "Inter-SemiBold" }}>Fitur Artikel</Text></Text>
                </>
        },

        {
            id: 2,
            image: ConsultationFeature,
            title: "Konsultasi",
            content: 
                <>
                    <Text style={{ fontFamily: "Inter-Medium", fontSize: 12, color: "#498E8D" }}>Hubungi pihak puskesmas terdekat untuk bantu pantau kesehatanmu</Text>
                </>
        },

        {
            id: 3,
            image: CalculatorFeature,
            title: "Kalkulator",
            content: 
                <>
                    <Text style={{ fontFamily: "Inter-Medium", fontSize: 12, color: "#498E8D" }}>Bantu kamu mengetahui kategori kesehatanmu sekarang</Text>
                </>
        },
    ];

    const services = [
        {
            id: 1,
            image: ArticleService,
            text: "Artikel"
        },

        {
            id: 2,
            image: CalculatorService,
            text: "Kalkulator\nSehat"
        },

        {
            id: 3,
            image: ProductService,
            text: "Produk\nUnggulan"
        },

        {
            id: 4,
            image: ChatService,
            text: "Chat Bot"
        },
    ]
    return (
        <ScrollView>
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <Image source={ArticleHero} style={{ position: 'absolute', zIndex: -1 }} />
                <View  style={{ marginTop: 50, paddingHorizontal: 20 }}>
                    <Text style={{ fontFamily: "Inter-SemiBold", fontSize: 16, color: 'white' }}>Apa kabar hari ini?</Text>
                    <Text style={{ fontFamily: "Inter", fontSize: 12, color: 'white' }}>Jangan lupa selalu Jaga Kesehatan ya! 🙌</Text>
                    <ScrollView horizontal>
                        <View style={{ marginTop: 20, flexDirection: 'row', gap: 10 }}>
                            {articleFeatureCards.map((articleFeatureCard) => (
                                <ArticleFeatureCard key={articleFeatureCard.id} image={articleFeatureCard.image} title={articleFeatureCard.title} content={articleFeatureCard.content} />
                            ))}
                        </View>
                    </ScrollView>

                    <TouchableOpacity onPress={() => {
                        navigation.navigate("Chat");
                    }}>
                        <View style={{ marginVertical: 10, flexDirection: "row", gap: 10, paddingVertical: 20, paddingHorizontal: 10, backgroundColor: "#D8F4F2", borderRadius: 10 }}>
                            <Image source={Call} style={{ width: 30, height: 30, marginTop: 10 }} />
                            <View style={{ flexDirection: 'column', flex: 1 }}>
                                <Text style={{ fontFamily: "Inter-SemiBold" }}>Konsultasikan Kesehatanmu</Text>
                                <Text style={{ fontFamily: "Inter", fontSize: 10, color: "#888686" }}>Kamu akan dihubungkan dengan call center puskesmas terdekat</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{paddingVertical: 10, paddingHorizontal: 20, shadowColor: '#00A295', shadowOpacity: 0.8, elevation: 1 }}>
                    <Text style={{ fontFamily: "Inter-SemiBold" }}>Layanan Kami</Text>
                    <View style={{ marginTop: 10, justifyContent: 'space-around', flexDirection: 'row' }}>
                        {services.map(service => (
                            <ArticleServiceCard key={service.id} image={service.image} text={service.text} />
                        ))}
                    </View>
                </View>
                <View style={{ paddingVertical: 10, paddingHorizontal: 20, }}>
                    <Text style={{ fontFamily: "Inter-SemiBold", fontSize: 16 }}>Artikel</Text>
                    <Text style={{ fontFamily: "Inter", fontSize: 10, color: "#888686" }}>Cari tahu informasi kesehatan yang praktis, dan terpercaya hanya dengan satu aplikasi. Informasi sudah terverifikasi oleh ahlinya!</Text>
                    {[1,2,3,4,5,6].map(() => (
                        <ArticleCard image={ArticleDummy} title={"Tips Mengelola Sampah di Rumah, Yuk Coba Bareng Keluarga!"} content={"Berbagai kebutuhan manusia yang semakin banyak membuat keinginan terhadap berbagai macam produk instan pun dibutuhkan, hal ini agar mampu menyeimbangi padatnya aktivitas masyarakat di Indonesia."}/>
                    ))}
                </View>
            </View>
        </ScrollView>
    );
}

export default Articles;
