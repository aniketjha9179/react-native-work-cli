import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import firestore from '@react-native-firebase/firestore';
import Loader from '../components/Loader';
import  AsyncStorage from '@react-native-async-storage/async-storage'


const Login = () => {
  // const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  // const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  // const [confirmPassword, setConfirmPassword] = useState('');
  const [visible, setVisible] = useState(false);
  const navigation = useNavigation();

  const loginUser = () => {
    // checking users list in firestore to checkout user is available or not
    // refrence code from firestore website :https://rnfirebase.io/firestore/usage#filtering
    // if login user then setVisible  is true
    setVisible(true);

    firestore()
      .collection('users')
      .where('email', '==', email)
      .get()
      .then(res => {
        setVisible(false);
        if (res.docs !== []) {
          console.log(JSON.stringify(res.docs[0].data()));
          gotoNEXT(
            res.docs[0].data().name,
            res.docs[0].data().email,
            res.docs[0].data().userId,
          );
        }
      })
      .catch(error => {
        setVisible(false);
        console.log(error);
        Alert.alert('user not found');
      });
  };
  const gotoNEXT =async (name, email, userId) => {
    // using async storage 
    await AsyncStorage.setItem('NAME',name);
    await AsyncStorage.setItem('EMAIL',email);
    await AsyncStorage.setItem('USERID',userId);
    navigation.navigate('Main');



  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <TextInput
        placeholder="Enter Email"
        style={[styles.input, {marginTop: 100}]}
        value={email}
        onChangeText={txt => setEmail(txt)}
      />

      <TextInput
        placeholder="Enter password"
        style={[styles.input, {marginTop: 20}]}
        value={password}
        onChangeText={txt => setPassword(txt)}
      />

      <TouchableOpacity style={styles.btn} onPress={() => loginUser()}>
        <Text style={styles.btnTxt}>Login</Text>
      </TouchableOpacity>
      <Text
        style={styles.andlogin}
        onPress={() => {
          // navigation.navigate('Signup')
          navigation.navigate('Signup');
        }}>
        Or Signup
      </Text>
      <Loader visible={visible} />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignContent: 'center',
  },
  title: {
    fontSize: 30,
    color: 'black',
    alignSelf: 'center',
    marginTop: 100,
    fontWeight: '600',
  },
  input: {
    width: '90%',
    height: 50,
    borderWidth: 0.5,
    borderRadius: 10,
    alignSelf: 'center',
    paddingLeft: 20,
    borderColor: 'orange',
  },
  btn: {
    width: '90%',
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: 'purple',
    backgroundColor: 'purple',
    marginTop: 10,
  },
  btnTxt: {
    color: 'white',
    fontSize: 20,
  },
  andlogin: {
    alignSelf: 'center',
    marginTop: 30,
    fontSize: 20,
    textDecorationLine: 'underline',
    fontWeight: '600',
    color: 'black',
  },
});
