import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';

import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import uuid from 'react-native-uuid';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const navigation = useNavigation();

  const registerUser = () => {
    const userId = uuid.v4();
    // making collection of users
    //name of collection users
    firestore()
      .collection('users')
      .doc(userId)
      .set({
        name: name,
        email: email,
        password: password,
        mobile: mobile,
        userId: userId,
      })
      .then(res => {
        console.log('user created');
        navigation.navigate('Login')
      })
      .catch(error => {
        console.log(error);
      });
  };
  const validate = () => {
    let isValid = true;
    if (name == '') {
      isValid = false;
    }
    if (email == '') {
      isValid = false;
    }
    if (mobile == '') {
      isValid = false;
    }
    if (password == '') {
      isValid = false;
    }
    if (confirmPassword == '') {
      isValid = false;
    }
    if (confirmPassword !== password) {
      isValid = false;
    }
    return isValid;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Signup</Text>
      <TextInput
        placeholder="Enter Name"
        style={[styles.input, {marginTop: 40}]}
        value={name}
        onChangeText={txt => setName(txt)}
      />
      <TextInput
        placeholder="Enter Email"
        style={[styles.input, {marginTop: 20}]}
        value={email}
        onChangeText={txt => setEmail(txt)}
      />
      <TextInput
        placeholder="Enter Phone Number"
        style={[styles.input, {marginTop: 20}]}
        keyboardType={'number-pad'}
        value={mobile}
        onChangeText={txt => setMobile(txt)}
      />
      <TextInput
        placeholder="Enter password"
        style={[styles.input, {marginTop: 20}]}
        value={password}
        onChangeText={txt => setPassword(txt)}
      />
      <TextInput
        placeholder="confirm password"
        style={[styles.input, {marginTop: 20}]}
        value={confirmPassword}
        onChangeText={txt => setConfirmPassword(txt)}
      />
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          //
          if (validate()) {
            registerUser();
          } else {
            Alert.alert('please enter correct details');
          }
        }}>
        <Text style={styles.btnTxt}>Signup</Text>
      </TouchableOpacity>
      <Text
        style={styles.andlogin}
        onPress={() => {
          navigation.goBack();
        }}>
        Or Login
      </Text>
    </View>
  );
};

export default Signup;

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
