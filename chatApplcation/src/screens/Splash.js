import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import canopee from '../fonts/Canopee.ttf'
import { useNavigation } from '@react-navigation/native'
import  AsyncStorage from '@react-native-async-storage/async-storage'



const Splash = () => {
    const navigation = useNavigation()
useEffect(()=>{
    setTimeout(()=>{
      // navigation.navigate('Login')
      checkLogin();
        

    },3000)
},[]);
// taking the data and using it for session
const  checkLogin  = async ()=>{
  const id = await AsyncStorage.getItem('USERID');
  if(id !==null){
    navigation.navigate('Main')

  }else{
    navigation.navigate('Login')
  }

}

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.logo}>{'Chat App'} </Text>
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        backgroundColor:'#46B2E0',
        justifyContent:'center',
        alignItems:'center',

    },
    logo: {
        display:'flex',
        fontSize:40,
        color:'white',
        fontFamily: 'Canopee',
        fontWeight:'900',
        textAlign:'center',
        justifyContent:'center',
        alignItems:'center'

    },
})