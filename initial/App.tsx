import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View, FlatList } from "react-native";

export default function App() {
  const days =[ ...Array(24)].map((val, index)=>index+1);
  console.log(days);
  
  return (
    <View style={styles.container}>
      <FlatList
        data={days}
        contentContainerStyle={styles.content}
        columnWrapperStyle={styles.column}
        numColumns={2}
        renderItem={({item}) => (
          <View style={styles.box}>
            <Text style={styles.text}> {item} </Text>
          </View>
        )}
        
      />
      {/* {days.map((day) => {
        return (
          <View key={day} style={styles.box}>
            <Text style={styles.text}>{day}</Text>
          </View>
        );
      })} */}
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
