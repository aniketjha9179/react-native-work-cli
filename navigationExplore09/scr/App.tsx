import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
//navigaion part
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// screens part
import Home from './screens/Home';
import Details from './screens/Details';
import Image from './screens/Image';

// type checking
export type RootStackParamList = {
  Home: undefined;
  Details: {productId: string};
  Image:undefined;
  // Details:undefined

};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen 
        name='Home'
        component={Home}
        options={{
          title:'Trending Products'
        }}
        />
         <Stack.Screen 
        name='Details'
        component={Details}
        options={{
          title:' Products Details'
        }}
        />
         <Stack.Screen 
        name='Image'
        component={Image}
        options={{
          title:' Image Details'
        }}
        />

        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
