
import * as SplashScreen from 'expo-splash-screen';
import { FlatList, StyleSheet, View } from "react-native";
import Daylist_Items from '../../src/components/core/Daylist_Items';


const days =[ ...Array(24)].map((val, index)=>index+1);

export default function HomeScreen() {

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
    // direction:'inherit'
  },

});
