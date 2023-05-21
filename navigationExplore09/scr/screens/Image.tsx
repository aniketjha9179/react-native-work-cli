import { StyleSheet, Text, View,Button  } from 'react-native'
import React from 'react'


import {NativeStackScreenProps} from "@react-navigation/native-stack"
import {RootStackParamList} from '../App'
import { useNavigation } from '@react-navigation/native'
import {NativeStackNavigationProp} from "@react-navigation/native-stack"
import { Navigate } from 'react-router-dom'

type ImageProps =NativeStackScreenProps<RootStackParamList,"Image">



const Image = ({route}:ImageProps) => {

    const Image = ({navigation}:ImageProps)=>{}

  return (
    <View>
        <Button
        title='image section hai ye'
        onPress={()=>navigation.push}
       
      />

        
    </View>
  )
}

export default Image

const styles = StyleSheet.create({})