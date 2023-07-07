// import {StyleSheet, Text, View} from 'react-native';
// import React, {useEffect, useState, useCallback} from 'react';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import {GiftedChat} from 'react-native-gifted-chat';
// import {useRoute} from '@react-navigation/native';
// import firestore from '@react-native-firebase/firestore';
// import uuid from 'react-native-uuid';

// const Chat = () => {
//   const [messagesList, setMessagesList] = useState([]);
//   const route = useRoute();

//   useEffect(() => {
//     const subscriber = firestore()
//       .collection('chats')
//       .doc(route.params.id + route.params.data.userId)
//       .collection('messages')
//       .orderBy('createdAt', 'desc');
//     subscriber.onSnapshot(querysnapshot => {
//       const allmessages = querysnapshot.docs.map(item => {
//         return {...item._data, createdAt:Date.parse(new Date())};
//       });
//       setMessagesList(allmessages);
//     });
//     return () => subscriber();
//   }, []);

//   const onSend = useCallback(async (messages = []) => {
//     const msg = messages[0];
//     const myMsg = {
//       ...msg,
//       sendBy: route.params.id,
//       sendTo: route.params.data.userId,
//       createdAt: Date.parse(msg.createdAt),
//     };
//     setMessagesList(previousMessages =>
//       GiftedChat.append(previousMessages, myMsg),
//     );
//     // creating  unique id for both users
//     firestore()
//       .collection('chats')
//       .doc(' ' + route.params.id + route.params.data.userId)
//       .collection('messages')
//       .add(myMsg);
//     firestore()
//       .collection('chats') //switched id of users of both end
//       .doc('' + route.params.data.userId + route.params.id)
//       .collection('messages')
//       .add(myMsg);
//   }, []);

//   return (
//     <View style={{flex: 1}}>
//       <GiftedChat
//         messages={messagesList}
//         onSend={messages => onSend(messages)}
//         user={{
//           _id: route.params.id,
//           // _id:route.params.data.userId
//         }}
//       />
//     </View>
//   );
// };

// export default Chat;

// const styles = StyleSheet.create({});
import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState, useCallback } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { GiftedChat } from 'react-native-gifted-chat';
import { useRoute } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import uuid from 'react-native-uuid';

const Chat = () => {
  const [messagesList, setMessagesList] = useState([]);
  const route = useRoute();

  useEffect(() => {
    const subscriber = firestore()
      .collection('chats')
      .doc(route.params.id + route.params.data.userId)
      .collection('messages')
      .orderBy('createdAt', 'desc')
      .onSnapshot(querySnapshot => {
        const allMessages = querySnapshot.docs.map(item => {
          return { ...item._data, createdAt:item._data.createdAt };
        });
        setMessagesList(allMessages);
      });

    return () => subscriber(); // Remove the parentheses after 'subscriber'
  }, []);

  const onSend = useCallback(async (messages = []) => {
    const msg = messages[0];
    const myMsg = {
      ...msg,
      sendBy: route.params.id,
      sendTo: route.params.data.userId,
      createdAt: Date.parse(msg.createdAt),
    };
    setMessagesList(previousMessages =>
      GiftedChat.append(previousMessages, myMsg),
    );
    // creating  unique id for both users
    firestore()
      .collection('chats')
      .doc(' ' + route.params.id + route.params.data.userId)
      .collection('messages')
      .add(myMsg);
    firestore()
      .collection('chats') //switched id of users of both end
      .doc('' + route.params.data.userId + route.params.id)
      .collection('messages')
      .add(myMsg);
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <GiftedChat
        messages={messagesList}
        onSend={messages => onSend(messages)}
        user={{
          _id: route.params.id,
          // _id:route.params.data.userId
        }}
      />
    </View>
  );
};

export default Chat;

const styles = StyleSheet.create({});

