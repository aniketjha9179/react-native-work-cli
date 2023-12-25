import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Daylist_Items = ({day}) => {
  
  return (
    <>
        <View style={styles.box}>
            <Text style={styles.text}> {day} </Text>
          </View>
    </>
  )
}

export default Daylist_Items

const styles = StyleSheet.create({
  column:{
    gap:10
  },
  content:{
    gap:10,
    padding:10,

    
  },
  box: {
    backgroundColor: "#bde0fe",
    // width: 300,
    // height: 300,
    aspectRatio:3/3,
    flex: 1,
    justifyContent : "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#34a0a4",
    borderRadius:20,
  },
  text: {
    color: "#001219",
    fontSize: 50,
  },
})