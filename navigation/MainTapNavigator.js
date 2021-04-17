import React, {useEffect, useLayoutEffect, useState} from 'react';
import {createMaterialBottomTabNavigator} from "@react-navigation/material-bottom-tabs";
import Home from "../screens/Home/Home";
import ChatListScreen from "../screens/ChatListScreen/ChatListScreen";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import {Picker} from "@react-native-picker/picker";
import Data from "../screens/json/data.json";
import {Text} from "react-native";


function getHeaderTitle(route) {
    const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';

    switch (routeName) {
        case 'Home':
            return '';
        case 'ChatListScreen':
            return '채팅목록';

    }
}


const BottomTapNavigator = createMaterialBottomTabNavigator();

function MainTapNavigator({navigation, route}) {
    const [lists, setLists] = useState([]);
    const [selectedLocation, setSelectedLocation] = useState("문정동");




    useEffect(() => {
        setLists(Data)

    }, [])

    const mapLocation = [lists.map((list) => list.location)]
    const setLocation = new Set(...mapLocation);
    const arraysetLocation = [...setLocation];



    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: getHeaderTitle(route),
            headerTitleStyle: {color: "black", textAlign: "center", flex: 1},
            headerLeft: getHeaderTitle(route) === '' ? (() => (
                <Picker style={{height: 100, width: 130, fontWeight: "bold"}} mode="dropdown"
                        selectedValue={selectedLocation}
                        onValueChange={(itemValue) =>
                            setSelectedLocation(itemValue)
                        }
                >
                    {arraysetLocation.map((arraysetLocation) => (
                        <Picker.Item label={arraysetLocation} value={arraysetLocation}/>))}

                </Picker>
            )) : ""


        });
    }, [navigation, route, arraysetLocation]);

    return (
        <BottomTapNavigator.Navigator
            initialRouteName="Home"
            shifting={false}
            sceneAnimationEnabled={false}
            barStyle={{ backgroundColor: '#ffffff' }}
        >
            <BottomTapNavigator.Screen name="Home" children={() => <Home
                selectedLocation={selectedLocation}
                navigation={navigation}
                lists={lists}/>} options={{
                tabBarIcon: ({focused}) => <MaterialCommunityIcons
                    name={!focused ? "home-outline" : "home"} size={26} color="black"/>,
                tabBarLabel: <Text style={{ color:"black"}} >Home</Text>
            }}
            />
            <BottomTapNavigator.Screen name="ChatListScreen" component={ChatListScreen}
                                       options={{
                                           tabBarIcon: ({focused}) => <MaterialCommunityIcons
                                               name={!focused ? "chat-outline" : "chat"} size={26} color="black"/>,
                                           tabBarLabel:  <Text style={{ color:"black"}} > Chat< /Text>
                                       }}/>

        </BottomTapNavigator.Navigator>
    );
}

export default MainTapNavigator;
