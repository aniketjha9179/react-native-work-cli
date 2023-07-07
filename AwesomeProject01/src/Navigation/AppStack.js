import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import {createDrawerNavigator} from '@react-navigation/drawer';
import ProfileScreen from '../screens/ProfileScreen';
import MomentsScreen from '../screens/MomentsScreen';
import MessageScreen from '../screens/MessageScreen';
import SettingScreen from '../screens/SettingScreen';

const Drawer = createDrawerNavigator();

const AuthStack = () => {
  return (
    <Drawer.Navigator screenOptions={{headerShown: false}}>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen name="Message" component={MessageScreen} />
      <Drawer.Screen name="moment" component={MomentsScreen} />
      <Drawer.Screen name="setting" component={SettingScreen} />

    </Drawer.Navigator>
  );
};

export default AuthStack;

const styles = StyleSheet.create({});
