 import React from "react";
 import { NavigationContainer } from "@react-navigation/native";
 import { createNativeStackNavigator } from "@react-navigation/native-stack";
 import HomeScreen from "../screens/HomeScreen";
 import { LogBox, Text, View } from "react-native";

 const Stack = createNativeStackNavigator();

 LogBox.ignoreAllLogs([
    'Non-serializable value were  found in the navigation state',
 ])

 export default function appNavigation(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='home' options={{headerShadow:false}}
                component={HomeScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
 }