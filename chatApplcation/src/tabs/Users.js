import {
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Canopee from '../fonts/Canopee.ttf';
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';


let id = '';
const Users = () => {
  const [users, setUsers] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    getUsers();
  }, []);   

  const getUsers = async () => {
    id = await AsyncStorage.getItem('USERID')
    let tempData = [];
    const email = await AsyncStorage.getItem('EMAIL');
    firestore()
      .collection('users')
      .where('email', '!=', email)
      .get()
      .then(res => {
        if (res.docs != []) {
          res.docs.map(item => {
            tempData.push(item.data());
          });
        }
        setUsers(tempData);
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.Titlee}> Chat App</Text>
      </View>
      <FlatList
        data={users}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity  style={styles.userItem}
            onPress={()=>navigation.navigate('Chat', {data:item, id:id})}
            >

              <Image
                style={styles.userIcon}
                source={require('../images/User.png')}
              />
              <Text style={styles.userName}>{item.name} </Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default Users;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  header: {
    width: '100%',
    height: 60,
    backgroundColor: 'white',
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Titlee: {
    color: '#0f0f0f',
    fontSize: 20,
    fontWeight: '900',
    fontFamily: 'canopee',
  },
  userItem: {
    width: Dimensions.get('window').width - 50,
    alignSelf: 'center',
    marginTop: 20,
    flexDirection: 'row',
    height: 60,
    borderWidth: 0.5,
    borderRadius: 10,
    paddingLeft: 10,
    alignItems: 'center',
  },
  userIcon: {
    width: 35,
    height: 35,
  },
  userName: {
    color: 'black',
    marginLeft: 20,
    fontSize: 20,
  },
});
