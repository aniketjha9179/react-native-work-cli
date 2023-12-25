import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreens from '../screens/HomeScreens';
import WelcomeScreen from '../screens/WelcomeScreen';
import RecipeDetailScreen from '../screens/RecipeDetailScreen';



const Stack= createNativeStackNavigator()
const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Welcome' screenOptions={{headerShown:false}}>
        <Stack.Screen name='Home' component={HomeScreens} />
        <Stack.Screen name='Welcome' component={WelcomeScreen} />
        <Stack.Screen name="RecipeDetail" options={{ presentation: 'fullScreenModal' }} component={RecipeDetailScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigation;

const styles = StyleSheet.create({})