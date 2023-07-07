import React from 'react';

import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import AuthStack from './src/Navigation/AuthStack';
import AppStack from './src/Navigation/AppStack';

const AppPro = () => {
  return (
    <NavigationContainer>
      <AppStack />
      {/* <AuthStack /> */}
    </NavigationContainer>
  );
};

export default AppPro;
