import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {Container, Spinner} from 'native-base'

const EmptyContainer = () => {
  return (
    <Container style={styles.EmptyContainer}>
      <Spinner   />
    </Container>
  )
}

export default EmptyContainer

const styles = StyleSheet.create({
    EmptyContainer:{
        flex:1,
        backgroundColor:'#1b262c',
        justifyContent:'center',
        alignItems:'center'

    }
})