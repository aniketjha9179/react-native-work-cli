import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {Camera} from 'react-native-vision-camera';
import { Linking } from 'react-native';

Linking.openSettings();

const App = () => {
  useEffect(() => {
    checkPermission();
  }, []);
  const checkPermission = async () => {
    const newCameraPermission = await Camera.requestCameraPermission();
    const newMicrophonePermission = await Camera.requestMicrophonePermission();
    console.log(newCameraPermission);
  };
  return (
    <View>
      <Text>App</Text>
    </View>
  );
};



export default App;

const styles = StyleSheet.create({});
