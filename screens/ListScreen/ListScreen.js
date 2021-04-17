import React, {useEffect, useLayoutEffect, useState} from 'react';
import {Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View} from "react-native";
import {useSelector} from "react-redux";
import {selectNavigationParam} from "../../redux/features/navigationSlice";
import Data from "../json/data.json";
import styled from "styled-components/native";
import {StatusBar} from "expo-status-bar";
import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";
import {Avatar, Button} from "react-native-elements";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import styles from "./styles";
import {Colors, ProgressBar} from "react-native-paper";



const ImageStyle = styled(Image)`
width:100%;
height:50%;
top:0;
`






function ListScreen({navigation}) {

    const [lists, setLists] = useState([]);
    const progress = (lists.mannerDegree / 100)
    const [heart, setHeart] = useState("heart-outlined");



    const params = useSelector(selectNavigationParam);
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: true,
            headerTransparent: true,
            headerTitle: "",
            headerLeft: () => (
                <TouchableOpacity
                    style={{marginLeft: 10}}
                    onPress={navigation.goBack}>
                    <AntDesign name="arrowleft" size={24} color="white"/>
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
                        <Entypo name="share-alternative" size={24} color="white"/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Entypo name="dots-three-vertical" size={24} color="white"/>
                    </TouchableOpacity>
                </View>
            )

        })


    }, [navigation])


    useEffect(() => {
        const index = Data.findIndex(
            (list) => list.id === params
        )
        setLists(Data[index])

    }, [])

    return (

        <SafeAreaView style={styles.container} >

            <StatusBar backgroundColor='transparent' hidden={true}/>


                <ScrollView style={styles.scrollView} contentContainerStyle={styles.Scroll} >


                    <ImageStyle source={{uri: lists.imageURL}}/>
                    <View style={{display: "flex", flexDirection: "row", paddingTop: 15, height: "15%"}}>
                        <Avatar size="medium" rounded source={{
                            uri: lists.avatarURL
                        }} onPress={() => navigation.navigate("Chat")}
                        />
                        <View style={{display: "flex", flexDirection: "column", marginLeft: 5}}>
                            <Text style={{fontWeight: "bold"}}>{lists.user}</Text>
                            {lists.user !== lists.locationName && (<Text>{lists.locationName}</Text>)}
                        </View>
                        <View
                            style={{display: "flex", flexDirection: "column", position: "absolute", right: 5, top: 15}}>
                            <View style={{display: "flex", flexDirection: "row"}}>
                                {lists.mannerDegree ? (<Text style={{color: "orange", fontWeight: "bold", fontSize:17}}>{lists.mannerDegree}℃ </Text>) : (<Text> </Text>)}
                                {lists.mannerDegree ? (progress > 0.4 ? (<MaterialCommunityIcons name="emoticon-cool-outline" size={18} color="orange" style={{marginLeft:5, paddingTop:5}}/>) : (<MaterialCommunityIcons name="emoticon-angry-outline" size={18} color="red" style={{marginLeft:5, paddingTop:5}}/>)
                                ) : (<Text> </Text>)}
                            </View>
                            {lists.mannerDegree ? (progress > 0.4 ? (<ProgressBar progress={progress} color={Colors.orange200} />) :(<ProgressBar progress={progress} color={Colors.red900} />))  : (<Text> </Text>)}
                            <Text style={{fontSize: 12, color: "gray", textDecorationLine: "underline", opacity: 0.5}}>Manner
                                Meter</Text>
                        </View>

                    </View>
                    <View style={{marginTop: 30, height: "35%"}}>
                        <Text style={{fontWeight: "bold", fontSize: 25,}}>{lists.title}</Text>
                        <View style={{display: "flex", flexDirection: "row", marginTop:12}}>
                            <Text style={{fontSize: 12, color: "gray", opacity: 0.7}}>{lists.productKind}</Text>
                            <Text style={{
                                fontSize: 12,
                                color: "gray",
                                opacity: 0.5,
                                marginLeft: 20
                            }}>{lists.upload}</Text>
                        </View>
                        <View style={{marginTop: 30}}>
                            <Text>{lists.description}</Text>
                        </View>

                        { (lists.favorites || lists.chat)  ? (
                            <Text style={{marginTop: 10, color: "gray", opacity: 0.7}} > {lists.chat || (0)} chat  {lists.favorites || (0)} favorites </Text>
                        )   : (<Text> </Text>) }
                            </View>


                </ScrollView>
            {lists.price ? (   <View style={{
                flexDirection: "row",
                height: "10%",
                alignItems: "center",
                backgroundColor: "white",
                flex:0.1,
            }}>
                <Entypo name={heart} size={24} color="black" style={{paddingLeft:20, flex: 0.2}} onPress={() => {
                    if (heart === "heart-outlined") setHeart("heart")
                    else setHeart("heart-outlined")
                }}/>
                <View style={{flex: 0.6}}>
                    <Text style={{fontWeight: "bold"}}>{lists.price}</Text>
                    <Text style={{fontWeight: "bold",color:"orange"}}>Make Offer</Text>
                </View>
                <Button onPress={() => navigation.navigate("Chat")}
                        title="Chat" buttonStyle={{
                    flex: 0.2,
                    alignSelf:"flex-end",
                    backgroundColor: "orange",
                    marginLeft: 'auto',
                    fontWeight: "bold"}}/>
            </View>) : (<Text> </Text>) }



        </SafeAreaView>


    );
}

export default ListScreen;
