import React from 'react';
import {ListItem} from "react-native-elements";
import {Image} from "react-native";
import styled from "styled-components";
import {useDispatch} from "react-redux";
import {setNavigationInfo} from "../redux/features/navigationSlice";
import Entypo from "react-native-vector-icons/Entypo";
import {Ionicons} from "@expo/vector-icons";


const StyleImage = styled(Image)`
width:75px;
height:75px;
border-radius:3px;

`

const StyleSubtitle = styled(ListItem.Subtitle)`
font-weight:bold;
font-size:18;

`

function CustomListItem({id, listName, listImage ,listLocation, listUpload,listPrice , entergo,listChat,listFavorite }) {

    const dispatch = useDispatch();



    return (
        <ListItem onPress={() => (dispatch(setNavigationInfo({
            navigationParam:id,
        })),entergo())} key={id} >
            <StyleImage
                source={{
                    uri:listImage}}/>
            <ListItem.Content >
                <ListItem.Title >
                    {listName}{" "} {listLocation === "지역광고" ? (<Entypo name="dots-three-vertical" size={12} color="black"/>) : ""
                }
                </ListItem.Title>
                <ListItem.Subtitle numberOfLines={1} ellipsizeMode="tail">
                    {listLocation} {"     "} {listUpload}
                </ListItem.Subtitle>
                <StyleSubtitle numberOfLines={1} ellipsizeMode="tail">
                    {listPrice}
                </StyleSubtitle>
                <ListItem.Subtitle style={{justifyContent:"flex-end"}} numberOfLines={1} ellipsizeMode="tail" >
                    {listChat ?  (<Ionicons name="chatbubbles-outline" size={12} color="black"/>
                         )   : ""} {listChat} {listFavorite ?  (<Entypo name="heart-outlined" size={12} color="black"/>
                )   : ""} {listFavorite}
                </ListItem.Subtitle>


            </ListItem.Content>

        </ListItem>
    );
}

export default CustomListItem;
