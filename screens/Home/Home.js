import React from 'react';
import CustomListItem from "../../components/CustomListItem";
import {
    SafeAreaView,
    ScrollView, Text, View,

} from "react-native";
import styled from 'styled-components/native';
import {StatusBar} from "expo-status-bar";



const TextStyle = styled(Text)`
color: white;
font-size:40;

`


const Stylescroll = styled(ScrollView)`

`;


function Home({ navigation, selectedLocation, lists}) {


const entergo = () => {
    navigation.navigate("ListTabs")
}

    const kimzipsa = (f, iter) => {
        let res = [];
        for (const a of iter) {
            if (f(a)) {
                res.push(a);
            }
        }
        return res;
    }


    return (
        <SafeAreaView>
            <Stylescroll>
                <StatusBar backgroundColor='transparent' hidden={true}/>

                {kimzipsa(e => e.location === selectedLocation, lists).map((list) => (
                    <CustomListItem key={list.id}
                                    id={list.id}
                                    entergo={entergo}
                                    listImage={list.imageURL}
                                    listName={list.title}
                                    listLocation={list.locationName}
                                    listUpload={list.upload}
                                    listPrice={list.price}
                                    listChat={list.chat}
                                    listFavorite={list.favorites}

                    />))}

            </Stylescroll>
            <View style={{
                width: 50,
                height: 50,
                borderRadius: 50 / 2,
                backgroundColor: "orange",
                zIndex: 1,
                position: 'absolute',
                bottom: 8,
                right: 8,
                 alignItems:"center",
                justifyContent: "center",

            }}>
                <TextStyle>+</TextStyle>
            </View>

        </SafeAreaView>
    );
}

export default Home;

