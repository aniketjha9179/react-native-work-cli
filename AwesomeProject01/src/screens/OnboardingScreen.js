import { StyleSheet, Text, View,SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import GameImage from '../assets/GameImage.svg'



const OnboardingScreen = ({navigation}) => {
  // const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={{marginTop: 10}}>
        <Text
          style={{
            color: '#20315f',
            fontWeight: 'bold',
            fontSize: 30,
            fontFamily: 'Inter-VariableFont_slnt,wght',
          }}>
          GAME-Navigation
        </Text>
      </View>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <GameImage
          width={300}
          height={300}
          style={{transform: [{rotate: '-20deg'}]}}
        />
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Login')}>
        <Text style={styles.buttonText}>Let's Begin</Text>
        {/* <FontAwesome5 name="chevron-right" color="#fff" size={30} /> */}
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default OnboardingScreen


const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  button: {
    backgroundColor: '#FD297A',
    padding: 20,
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopEndRadius: 40,
    borderBottomLeftRadius: 40,
    marginBottom: 50,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    fontFamily: 'Roboto-MediumItalic',
  },
});
