import auth from '@react-native-firebase/auth';
import Snackbar from 'react-native-snackbar';
import database from '@react-native-firebase/database';

export const signUp = data => async dispatch => {
  console.log(data);


  const {name, instaUserName, bio, email, password, country, image} = data;
  auth()
    .createUserWithEmailAndPassword(email, password)
    .then(data => {
      console.log(data);
      console.log('User account was created successfully');

      database()
        .ref('/users/' + data.user.uid)
        .set({
          name,
          instaUserName,
          country,
          image,
          bio,
          uid: data.user.uid,
        })
        .then(()=>console.log('Data set success'))
        Snackbar.show({
            text:'account created',
            textColor:'white',
            backgroundColor:'#1b262c'

        })
    })
    .catch(error => {
      console.error(error);
      Snackbar.show({
        text: 'Signup failed',
        textColor: 'white',
        backgroundColor: 'red',
      });
    });
};


export  const signIn = (data)=>async (dispatch)=>{
    console.log(data);
    const {email, password}= data
    auth()
    .signInWithEmailAndPassword(email, password)
    .then(()=>{
        console.log("Sign In Success");
        Snackbar.show({
            text:'sign in successfull',
            textColor:'white',
            backgroundColor:'#1b262c',



        })
    })
    .catch((error)=>{
        console.error(error);
        Snackbar.show({
            text:'Signin failed',
            textColor:'white',
            backgroundColor:'red'

        })
    })
};

export const signOut =()=> async (dispatch)=>{
    auth()
    .signOut()
    .then(()=>{
        Snackbar.show({
            text:'signOut successfull',
            textColor:'white',
            backgroundColor:'#1b262c',
        })
        
    })
    .catch((error)=>{
        console.log(error);
        Snackbar.show({
            text:'signOut failed',
            textColor:'white',
            backgroundColor:'red'

        })

    })
}