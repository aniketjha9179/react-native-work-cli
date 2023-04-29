import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FlatCards() {
  return (
    <View>
     

      <Text style={styles.headingText}>Flat Cards</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
          <Text>red</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
          <Text>green</Text>
        </View>
        <View style={[styles.card, styles.cardthree]}>
          <Text>blue</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 8,
  },
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 110,
    height: 100,
    borderRadius: 5,
    margin: 13,
  },
  cardOne: {
    backgroundColor: '#EF554444',
  },
  cardTwo: {
    backgroundColor: '#50DBB4',
  },
  cardthree: {
    backgroundColor: '#5DAdfd43',
  },
});
