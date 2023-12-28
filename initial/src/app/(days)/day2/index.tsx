import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const index = () => {
  return (
    <View>
      <Stack.Screen   options={{title:'Day 2 onboarding'}} />
      <Text>Day Details screen</Text>
      <Button title='Go to onboarding'  />
    </View>
  )
}

export default index

const styles = StyleSheet.create({})