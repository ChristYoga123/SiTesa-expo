import React from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity, ScrollView} from 'react-native';
import { ArticleShowDummy, SplashCircle } from '../../assets';
import { AntDesign } from '@expo/vector-icons';
import RenderHTML from 'react-native-render-html';
const ArticleShow = ({navigation}) => {
    const content = {
        html: 
        `
        <div style="padding-left: 20px; padding-right: 20px; text-align: justify;">
            <p>Berbagai kebutuhan manusia yang semakin banyak membuat keinginan terhadap berbagai macam produk instan pun dibutuhkan, hal ini agar mampu menyeimbangi padatnya aktivitas masyarakat di Indonesia. Tapi, perlu diketahui juga bahwa produk instan terbilang tidak baik bagi lingkungan, karena sering kali menciptakan banyaknya limbah rumah tangga.</p>

            <p>Selain sampahnya yang mengganggu, efek sampingnya pun juga menimbulkan aroma tak sedap. Oleh karena itu, kamu pun harus mengelola dengan benar agar tak ada bakteri dan kuman yang menyebabkan penyakit. Bagaimana caranya? Yuk, ikutilah beberapa cara di bawah ini agar dapat membuat sistem pengelolaan sampah di rumah menjadi lebih baik.</p>
            
            <h3>1. Memisahkan Sampah Sesuai Jenisnya</h3>
            
            <p>Cara pertama yang dapat kamu lakukan untuk pengelolaan sampah, dapat dimulai dengan memisahkan sampah menjadi 2 bagian, yakni organik dan anorganik. Kamu bisa mulai menyediakan 2 buah tempat sampah di rumah dan beri tanda untuk mempermudahnya. Cara seperti ini akan mempermudah kamu dalam memisahkan sampah rumah tangga yang dihasilkan setiap harinya. </p>
            
            <h3>2. Melakukan Zero Waste</h3>
            
            <p>Konsep zero waste yang mulai sering disuarakan agar manusia mulai peduli dengan alam dapat diwujudkan dengan menggunakan barang-barang yang tidak habis pakai. Salah satunya seperti mengganti plastik dengan tas belanja kain, mengganti styrofoam dengan kotak bekal, dan memakai botol untuk mengurangi pemakaian air minum dalam kemasan.</p>
            
            <p>Pada intinya kamu bisa mulai mengurangi pemakaian plastik dengan benda-benda yang dapat digunakan secara berulang. Walaupun cukup merepotkan namun, perubahan yang kamu lakukan dapat memberikan dampak yang berarti bagi bumi dan alam.</p>
            
            <h3>3. Membuat Pupuk dari Sampah Organik</h3>
            
            <p>Pengelolaan sampah selanjutnya juga dapat dilakukan pada sampah organik. Kamu tentunya sudah tidak asing dengan teknik daur ulang, bukan? Daripada membiarkan sampah organik berbau busuk karena  karena bakteri pengurai ada baiknya kamu melakukan daur ulang dengan menjadikannya sebagai pupuk kompos pada tanaman.</p>
            
            <p>Namun, jika aroma selama proses pembuatan pupuk kompos cukup mengganggu, kamu bisa menyumbangkan sampah organic pada penjual tanaman atau orang yang memiliki kesukaan berkebun. Sehingga, kamu tetap ikut berkontribusi dalam pengelolaan sampah.</p>
            
            <h3>4. Membersihkan Tempat Sampah Setiap Hari</h3>
            
            <p>Tempat sampah di dalam rumah sangat penting untuk dijaga kebersihannya. Oleh sebab itu, kamu perlu menjaganya dengan selalu membuang sampah setiap hari dan memastikan tempatnya bersih agar tidak menimbulkan aroma tidak sedap di dalam ruangan. Kamu bisa mengalasi tempat sampah dengan plastik yang ramah lingkungan sehingga kebersihannya tetap terjaga setiap saat.</p>
            
            <h3>5. Melakukan Daur Ulang Pada Sampah Anorganik</h3>
            
            <p>Sama seperti konsep 3R (reuse, reduce, dan recycle) kamu dapat membantu pengelolaan sampah dengan memilih barang-barang yang masih dapat digunakan kembali. Misalnya botol kaca yang dapat dibersihkan dan digunakan kembali untuk menyimpan barang atau menjadikannya sebagai hiasan rumah. Sebelum melakukan daur ulang, pastikan juga kemasan seperti kaca, botol, kertas, atau kardus memiliki logo daur ulang agar lebih aman untuk digunakan kembali dengan fungsi berbeda tanpa takut timbulnya reaksi kimia berbahaya.</p>
            
            <p>Melakukan 5 kontribusi dalam pengelolaan sampah di rumah seperti ini setiap harinya, dapat membantu lingkungan kita menjadi lebih bersih, sehat, dan aman dari gangguan bakteri penyebab penyakit di sampah rumah tangga.</p>
        </div>`
    }

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
                    navigation.navigate("Articles");
                }}>
                    <View style={{ flexDirection: 'row', gap: 10, marginTop: 30, marginLeft: 10 }}>
                        <AntDesign name="arrowleft" size={24} color="#888686" />
                        <Text style={{ fontFamily: 'Poppins', fontSize: 15, marginTop: 3 }}>Kembali</Text>
                    </View>
                </TouchableOpacity>
                    <View style={{ paddingHorizontal: 20, marginTop: 50 }}>
                        <Text style={{ fontFamily: "Poppins-SemiBold", fontSize: 20, color: "#00A295" }}>5 Mitos dan Fakta Kehamilan, Bunda Harus Tau!</Text>
                        <Image source={ArticleShowDummy} style={{ marginVertical: 20, marginHorizontal: 20 }}/>
                        <RenderHTML contentWidth={100} source={content} tagsStyles={tagStyle} />
                    </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({})

export default ArticleShow;
