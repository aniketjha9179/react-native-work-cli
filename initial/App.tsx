import { FlatList, StyleSheet, Text, View } from "react-native";
import Daylist_Items from "./src/components/core/Daylist_Items";
export default function App() {
  const days =[ ...Array(24)].map((val, index)=>index+1);
  // console.log(days);
  
  return (
    <View style={styles.container}>
      <FlatList
        data={days}
        contentContainerStyle={styles.content}
        columnWrapperStyle={styles.column}
        numColumns={2}
        renderItem={({item}) => <Daylist_Items />}
        
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
  box: {
    backgroundColor: "#bde0fe",
    // width: 300,
    // height: 300,
    aspectRatio:3/3,
    flex: 1,
    justifyContent : "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#34a0a4",
    borderRadius:20,
  },
  text: {
    color: "#001219",
    fontSize: 50,
  },
});
