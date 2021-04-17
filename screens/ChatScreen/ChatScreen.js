import React, {useLayoutEffect} from 'react';
import {TextInput, TouchableOpacity, View} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";
import Ionicons from "react-native-vector-icons/Ionicons";

function ChatScreen({navigation}) {


    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: true,
            headerTransparent: true,
            headerTitle: "",
            headerLeft: () => (
                <TouchableOpacity
                    style={{marginLeft: 10}}
                    onPress={navigation.goBack}>
                    <AntDesign name="arrowleft" size={24} color="black"/>
                </TouchableOpacity>
            ),

            headerRight: () => (
                <View style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    width: 80,
                    marginRight: 20,
                }}>

                    <TouchableOpacity>
                        <Entypo name="share-alternative" size={24} color="black"/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Entypo name="dots-three-vertical" size={24} color="black"/>
                    </TouchableOpacity>
                </View>
            )

        })


    }, [navigation])

    return (
        <View style={{
            flexDirection: "row",
            height: 50,
            alignItems: "center",
            position:"absolute",
            bottom:0,
            width:"100%",
        }}>
            <AntDesign name="plus" color="gray" style={{opacity: 0.5}} size={30}/>
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
        </View>   );
}

export default ChatScreen;
