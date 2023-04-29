import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';


export default function ContactList() {
  const contacts = [
    {
      uid: 1,
      name: 'Aniket Jha',
      status: 'just an ordinary student',
      imageUrl: 'https://avatars.githubusercontent.com/u/84675061?v=4',
    },
    {
      uid: 2,
      name: 'Shreyyaa',
      status: 'making lennis more smooth',
      imageUrl: 'https://avatars.githubusercontent.com/u/61227144?s=100&v=4',
    },
    {
      uid: 3,
      name: 'Tanishka Yadav',
      status: 'Making your life better',
      imageUrl: 'https://avatars.githubusercontent.com/u/95072469?s=100&v=4',
    },
    {
      uid: 4,
      name: 'AJ',
      status: 'building API for you',
      imageUrl: 'https://avatars.githubusercontent.com/u/84675061?v=4',
    },
  ];
  return (
    <View>
      <Text style={styles.headingText}>ContactList</Text>
      <ScrollView style={styles.container} scrollEnabled={false}>
        {contacts.map(({ uid, name, status, imageUrl }) => (
          <View key={uid} style={styles.userCard}>
            <Image
              source={{
                uri: imageUrl,
              }}
              style={styles.userImage}
            />
            <View>
              <Text style={styles.userName}> {name} </Text>
              <Text style={styles.userStatus}> {status} </Text>

            </View>

          </View>
        ))}
      </ScrollView>
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
    paddingHorizontal: 16,
    marginBottom:4,

  },
  userCard: {
    flex: 1,
    flexDirection: 'row',
    alignItems:'center',
    marginBottom:3,
    backgroundColor:'#005bc5',
    padding:4,
    borderRadius:13, 
  },
  userImage: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    marginRight:14,


  },
  userName: {
    fontSize:15,
    fontWeight:'500',
    color:'#FFFF'
  },
  userStatus: {
    fontSize:12,
    color:'#fff'
    

  }
});
