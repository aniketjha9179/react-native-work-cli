import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ActivityIndicator } from 'react-native'

const Loading = () => {
  return (
    <View style={styles.conatainer}>
        <ActivityIndicator size='large'  color='#1d9bf0' >

        </ActivityIndicator>
      <Text>Loading</Text>
    </View>
  )
}


const styles = StyleSheet.create({
    conatainer:{
        flex:1,
        alignItems:"center",
        justifyContent:'center'
    }
})
export default Loading