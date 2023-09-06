import React from 'react';
import {View, StyleSheet, Image, Text, ScrollView} from 'react-native';
import RenderHTML from 'react-native-render-html';
import { ArticleDummy } from '../../assets';
const ArticleShow = ({navigation, title, heroImage, content}) => {
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
            <View style={{flex: 1, backgroundColor: "white", alignItems: "center" }}>
                <Text style={{ fontFamily: "Poppins-SemiBold", fontSize: 16, marginTop: 20 }}>Tips Mengelola Sampah di Rumah, Yuk Coba Bareng Keluarga!</Text>
                <Image source={ArticleDummy} style={{ marginVertical: 20 }}/>
                <Text style={{ fontFamily: "Inter", textAlign: "justify" }}>
                Berbagai kebutuhan manusia yang semakin banyak membuat keinginan terhadap berbagai macam produk instan pun dibutuhkan, hal ini agar mampu menyeimbangi padatnya aktivitas masyarakat di Indonesia. Tapi, perlu diketahui juga bahwa produk instan terbilang tidak baik bagi lingkungan, karena sering kali menciptakan banyaknya limbah rumah tangga.
                {'\n\n'}
                Selain sampahnya yang mengganggu, efek sampingnya pun juga menimbulkan aroma tak sedap. Oleh karena itu, kamu pun harus mengelola dengan benar agar tak ada bakteri dan kuman yang menyebabkan penyakit. Bagaimana caranya? Yuk, ikutilah beberapa cara di bawah ini agar dapat membuat sistem pengelolaan sampah di rumah menjadi lebih baik.
                {'\n\n'}
                Selain sampahnya yang mengganggu, efek sampingnya pun juga menimbulkan aroma tak sedap. Oleh karena itu, kamu pun harus mengelola dengan benar agar tak ada bakteri dan kuman yang menyebabkan penyakit. Bagaimana caranya? Yuk, ikutilah beberapa cara di bawah ini agar dapat membuat sistem pengelolaan sampah di rumah menjadi lebih baik.
                </Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({})

export default ArticleShow;
