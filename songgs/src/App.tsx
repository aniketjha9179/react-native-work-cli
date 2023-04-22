import { ActivityIndicator, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import   {useState,useEffect} from 'react'
import {setupPlayer, addTrack} from '../musicPlayerServices'
import MusicPlayer from './screens/MusicPlayer'

const App = ():JSX.Element => {
  const [isPlayerReady,setIsPlayerReady] =useState(false)

  async function setup() {
    let isSetup= await setupPlayer()
    if (isSetup) {
      await addTrack()
      
    }
    setIsPlayerReady(isSetup)
  }
  useEffect(() => {
    setup()
  }, [])

if (!isPlayerReady) {
  return (
    <SafeAreaView>
      <ActivityIndicator />
    </SafeAreaView>
  )
  
}

  

  return (
    <View style={styles.container}>
      <StatusBar
      barStyle={'dark-content'}
      />
      <MusicPlayer />


    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    flex:1,

  }
})