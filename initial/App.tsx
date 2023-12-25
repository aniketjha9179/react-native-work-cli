import { ActivityIndicator, FlatList, StyleSheet, Text, View } from "react-native";
import Daylist_Items from "./src/components/core/Daylist_Items";
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from "react";
import {AmaticSC_400Regular, AmaticSC_700Bold} from '@expo-google-fonts/amatic-sc'


SplashScreen.preventAutoHideAsync();

export default function App() {
  const days =[ ...Array(24)].map((val, index)=>index+1);
  const [fontsLoaded, fontError]= useFonts({
      Inter:Inter_900Black,
      Amatic:AmaticSC_400Regular,
      AmaticBold:AmaticSC_700Bold
      
  }) ; 

  useEffect(()=>{
    if(fontsLoaded || fontError){
      SplashScreen.hideAsync()
    }
  },[fontsLoaded, fontError])

    if(!fontsLoaded &&  !fontError){
      return null
    }
  return (
    <View style={styles.container}>
      <FlatList
        data={days}
        contentContainerStyle={styles.content}
        columnWrapperStyle={styles.column}
        numColumns={2}
        renderItem={({item}) => <Daylist_Items day={item} />}
        
      />
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",

  },
  column:{
    gap:10
  },
  content:{
    gap:10,
    padding:10,    
  },

});
