import React from 'react';
import {Avatar, ListItem} from "react-native-elements";
import { Text, View} from "react-native";





function ChatListItem({id, imageURL, content ,user, location,uploadTime }) {



    return (
        <ListItem  key={id} bottomDivider>
            <Avatar
                rounded
                source={{
                    uri: imageURL || "https://cdn.imweb.me/upload/S2020040723e5ae52f73a7/a17d7ddf38e2c.png"
                }
                }/>
            <ListItem.Content >
                <ListItem.Title style={{ fontWeight:"bold" }}>
                    {user}
                </ListItem.Title>
                <ListItem.Subtitle numberOfLines={1} ellipsizeMode="tail" style={{color:"gray", opacity: 0.5}}>
                    {location} {"   "} {uploadTime}
                </ListItem.Subtitle>
                <View>
                    <Text>{content}</Text>
                </View>
                <View>
                    <Text style={{color:"gray"}}>
                    Reply
                    </Text>
                </View>

            </ListItem.Content>

        </ListItem>
    );
}

export default ChatListItem;
