import React, { useEffect, useState } from 'react';
import {View, StyleSheet, Text, TouchableOpacity, TextInput, ScrollView} from 'react-native';
import { FontAwesome, Ionicons } from '@expo/vector-icons'; 
import { LeftChat, RightChat } from '../../components';
import axios from 'axios';
const Chat = () => {
    const [input, setInput] = useState(''); 
    const [chats, setChats] = useState([]);
    const [loading, setLoading] = useState(false); // Untuk menunjukkan bahwa permintaan sedang diproses
    const handleSendMessage = async () => {
      if (input.trim() !== '') {
        // Tambahkan objek chat ke dalam array chats
        setChats((prevChats) => [...prevChats, { right: input }]);
        setInput('');
        
        // Kirim pesan ke GPT-3 melalui API OpenAI
        try {
          setLoading(true);
    
          const response = await axios.post(
            'https://api.openai.com/v1/engines/text-davinci-003/completions',
            {
              prompt: input,
              max_tokens: 200,
            },
            {
              headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer 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',
              },
            }
          );
    
          const message = response.data.choices[0].text.trim();
    
          setChats((prevChats) => [...prevChats, { left: message }]);
        } catch (error) {
          if (error.response && error.response.status === 429) {
            // Jika error 429, coba kembali setelah beberapa detik
            setTimeout(() => {
              handleSendMessage();
            }, 5000); // Atur delay sesuai kebutuhan Anda
          } else {
            console.error('Error sending message:', error);
          }
        } finally {
          setLoading(false);
        }
      }
    };
    useEffect(() => {
      console.log(chats);
    }, [chats])
    return (
        <View style={{ flex: 1, backgroundColor: "white" }}>
            <ScrollView>

              <TouchableOpacity>
                  <View style={{ alignItems: "center" }}>
                      <View style={{ alignItems: "center", padding: 10, borderWidth: 1, marginTop: 10, width: 350, borderRadius: 20, backgroundColor: "#00A295", borderColor: 'white' }}>
                          <Text style={{ fontFamily: "Inter", color: "white", fontSize: 10, textAlign: "center" }}>Ingin berkonsultasi secara langsung? {'\n'} Tekan tombol ini untuk terhubung dengan Puskesmas terdekat</Text>
                      </View>
                  </View>
              </TouchableOpacity>

              <View style={{ alignItems: "center", marginBottom: 30 }}>
                  <View style={{ alignItems: "center", padding: 10, borderWidth: 1, marginTop: 10, width: 350, borderRadius: 20, borderColor: "#00A295" }}>
                      <Text style={{ fontFamily: "Inter", color: "#00A295", fontSize: 10, textAlign: "center" }}>ChatBOT SiTesa adalah sistem konsultan online berbasis Artificial Intelligence yang dapat membantu menjawab pertanyaan kesehatan Anda secara instan</Text>
                  </View>
              </View>
              
              {/* Chat */}
              <View style={{ marginBottom: 60 }}>
                {chats.map((chat, index) => (
                  "left" in chat ? (
                    <LeftChat key={index} chat={chat.left} />
                  ) : (
                    <RightChat key={index} chat={chat.right} />
                  )
                ))}            
              </View>
              </ScrollView>

              {/* Input */}
              <View style={{ paddingHorizontal: 10, position: 'absolute', bottom: 0, flexDirection: "row", gap: 20, backgroundColor: "white", paddingVertical: 10 }}>
                  <TextInput style={{  padding: 10, borderWidth: 1, width: 280, borderRadius: 20, borderColor: "#00A295" }} placeholder='Ketikkan pertanyaan Anda ...' value={input} onChangeText={(text) => {
                    setInput(text)
                  }}/>
                  {loading ?
                    <Ionicons name="time-outline" size={30} style={{ marginTop: 10}} color={"#00A295"} /> : 
                    <TouchableOpacity onPress={handleSendMessage}>
                        <FontAwesome name='send' size={30} style={{ marginTop: 10, }} color={"#00A295"}/>
                    </TouchableOpacity>
                  }
                  
              </View>
        </View>
    );
}

const styles = StyleSheet.create({})

export default Chat;
