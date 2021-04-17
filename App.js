import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from "@react-navigation/stack";
import ChatScreen from "./screens/ChatScreen/ChatScreen";
import {Provider as PaperProvider} from "react-native-paper";
import MainTapNavigator from "./navigation/MainTapNavigator";
import { Provider } from 'react-redux';
import store from "./redux/store/store";
import ListScreen from "./screens/ListScreen/ListScreen";

const Stack = createStackNavigator();


export default function App() {
    return (
        <Provider store={store}>
            <PaperProvider>
                <NavigationContainer>
                    <Stack.Navigator >
                        <Stack.Screen name="Tabs" component={MainTapNavigator}/>
                        <Stack.Screen name="ListTabs" component={ListScreen}/>
                        <Stack.Screen name="Chat" component={ChatScreen}/>


                    </Stack.Navigator>

                </NavigationContainer>

            </PaperProvider>
        </Provider>
    );
}


