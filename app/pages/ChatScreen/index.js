import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity, TextInput} from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 
import { LeftChat, RightChat } from '../../components';
const Chat = () => {
    const chats = [
        {
            left: "Selamat datang di Chat Bot SiTesa."
        },
        {
            left: "SiTesa adalah sebuah chat system yang terintegrasi dengan Artificial Intelligence yang dapat membantu anda dalam mengatasi solusi kesehatan Anda. Silahkan sampaikan pertanyaan Anda."
        },
        {
            right: "Halo, saya ingin bertanya tentang penyakit saya yaitu diare."
        }
    ]
    return (
        <View style={{ flex: 1, backgroundColor: "white" }}>
            <TouchableOpacity>
                <View style={{ alignItems: "center", marginBottom: 30 }}>
                    <View style={{ alignItems: "center", padding: 10, borderWidth: 1, marginTop: 10, width: 350, borderRadius: 20, borderColor: "#00A295" }}>
                        <Text style={{ fontFamily: "Inter", color: "#00A295", fontSize: 10, textAlign: "center" }}>Ingin berkonsultasi secara langsung? {'\n'} Tekan tombol ini untuk terhubung dengan Puskesmas terdekat</Text>
                    </View>
                </View>
            </TouchableOpacity>
            
            {/* Chat */}
            {chats.map((chat, index) => {
                if ("left" in chat) {
                    return <LeftChat chat={chat.left} />;
                } else if("right" in chat) {
                    return <RightChat chat={chat.right} />
                }
            })}
            
            {/* Input */}
            <View style={{ paddingHorizontal: 10, position: 'absolute', bottom: 10, flexDirection: "row", gap: 20, backgroundColor: "white", paddingTop: 10 }}>
                <TextInput style={{  padding: 10, borderWidth: 1, width: 280, borderRadius: 20, borderColor: "#00A295" }} placeholder='Ketikkan pertanyaan Anda ...'/>
                <TouchableOpacity>
                    <FontAwesome name='send' size={30} style={{ marginTop: 10}} color={"#00A295"}/>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({})

export default Chat;
