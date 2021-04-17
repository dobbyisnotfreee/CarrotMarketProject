import React from 'react';
import {SafeAreaView, ScrollView, TextInput, TouchableOpacity, View} from "react-native";
import styles from "./styles";
import Data from '../json/chatdata.json'
import ChatListItem from "../../components/ChatListItem";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";

function ChatListScreen({navigation}) {


    return (
        <SafeAreaView>
            <ScrollView style={styles.container}>
                {Data.map((item) => (
                    <ChatListItem key={item.id}
                                  id={item.id}
                                  imageURL={item.imageURL}
                                  content={item.content}
                                  user={item.user}
                                  location={item.location}
                                  uploadTime={item.uploadTime}
                    />
                ))}

            </ScrollView>

            <View style={{
                flexDirection: "row",
                height: 50,
                alignItems: "center",
                position:"absolute",
                bottom:0,
                width:"100%",
            }}>
                <AntDesign name="hearto" color="gray" style={{opacity: 0.5}} size={30}/>
                <TextInput
                    placeholder="메세지를 입력하세요!!"
                    style={{
                        flex: 3,
                        height: 50,
                        paddingLeft:20,

                    }}
                />

                <TouchableOpacity
                >
                    <Ionicons name="send" size={30} color="#2B68E6"/>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    );
}

export default ChatListScreen;
