import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import React from 'react';

const ElevatedCards = () => {
  return (
    <View>
      <View>
        {/* <Text style={styles.headingText}></Text> */}
        <ScrollView horizontal={true} style={styles.container}>
          <View style={[styles.card, styles.cardElevated]}>
            <Image
              style={{height: 200, width: 200, borderRadius:10}}
              source={require('../assets/images/god-of-war.jpeg')}
            />
          </View>
          <Text> </Text>
          <View style={[styles.card, styles.cardElevated]}>
            <Image
              style={{height: 200, width: 200, borderRadius:10}}
              source={require('../assets/images/Altos-Odyssey.jpeg')}
            />
          </View>
          <Text> </Text>
          <View style={[styles.card, styles.cardElevated]}>
            <Image
              style={{height: 200, width: 200, borderRadius:10}}
              source={require('../assets/images/asphalt-9.jpeg')}
            />
          </View>
          <Text> </Text>
          <View style={[styles.card, styles.cardElevated]}>
            <Image
              style={{height: 200, width: 200, borderRadius:10}}
              source={require('../assets/images/FarCry6.png')}
            />
          </View>
          <Text> </Text>
          <View style={[styles.card, styles.cardElevated]}>
            <Image
              style={{height: 200, width: 200,  borderRadius:10}}
              source={require('../assets/images/diablo-4.jpeg')}
            />
          </View>
          <Text> </Text>
          <View style={[styles.card, styles.cardElevated]}>
            <Image
              style={{height: 200, width: 200, borderRadius:10}}
              source={require('../assets/images//genshin-impact.jpeg')}
            />
          </View>
          <Text> </Text>
          <View style={[styles.card, styles.cardElevated]}>
            <Image
              style={{height: 200, width: 200, borderRadius:10}}
              source={require('../assets/images/Logo-Angry-Birds.png')}
            />
          </View>
          <Text> </Text>
          <View style={[styles.card, styles.cardElevated]}>
            <Image
              style={{height: 200, width: 200,  borderRadius:10}}
              source={require('../assets/images/pokemon-unite.jpeg')}
            />
          </View>
          <Text> </Text>
        </ScrollView>
      </View>
    </View>
  );
};

export default ElevatedCards;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  container: {
    gap: 10,
    borderRadius:10
  },
  card: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 200,
    borderRadius: 4,
    // margin: 8,
    // color: '#000000',
    alignSelf: 'stretch',
    gap: 10,
    borderRadius:10

  },
  cardElevated: {
    backgroundColor: '#CAD5E3',
    elevation: 4,
    shadowOffset: {
      width: 1,
      height: 1,
      alignItems: 'center',
      justifyContent: 'center',
      gap: 10,
     
    },
    shadowColor: '#333',
    shadowOpacity: 0.4,
    shadowRadius: 4,
    gap: 10,
  },
});
