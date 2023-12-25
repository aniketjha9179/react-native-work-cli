import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { StatusBar } from 'expo-status-bar';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Animated ,{useSharedValue, withSpring} from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';


const WelcomeScreen = () => {

    const ring1padding = useSharedValue(0);
    const ring2padding = useSharedValue(0);


    const navigation = useNavigation()

    useEffect(()=>{
        ring1padding.value=0;
        ring2padding.value=0;
        setTimeout(()=>ring1padding.value =withSpring( ring1padding.value+hp(5)), 100);
        setTimeout(()=>ring2padding.value =withSpring( ring2padding.value+hp(5.8)), 400);


            setTimeout(()=>navigation.navigate('Home'), 2500)
    }
    ,[])


  return (
    <View  style={{flex:1, justifyContent:'center',alignItems:'center',backgroundColor:'#ED7D31', }}>
      <StatusBar style='light' />
      {/* logo image and with rings */}
      <Animated.View style={{backgroundColor:'#FF6C22', borderRadius:200,padding:ring2padding }}>
        <Animated.View style={{backgroundColor:'#FF9209', borderRadius:120, padding:ring1padding }}>
            <Image style={{width:hp(20) , height:hp(20), borderRadius:100}} source={require('../../assets/anh-nguyen-kcA-c3f_3FE-unsplash.jpg')} />
        </Animated.View>
      </Animated.View>
      {/* title */}
      <View  style={{display:'flex', alignItems:'center',marginVertical:20}}>
        <Text style={{fontWeight:'bold',color:'white', fontSize:hp(7)}}>Recipee</Text>
        <Text style={{fontWeight:'bold',color:'white',letterSpacing:5,fontSize:hp(2.3), marginTop:3 }}>
            Food is our mood
        </Text>
      </View>
    </View>
  )
}

export default WelcomeScreen

const styles = StyleSheet.create({

})