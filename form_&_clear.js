import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";

const App = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [display, setDisplay] = useState(false);
  const resetForm=()=>{
    setDisplay(false);
    setName('');
    setEmail('')
    setPassword('')
  }



  return (
    <View>
      <Text style={{ marginTop: 20 }}>simple form in react native</Text>
      <TextInput
        placeholder="Enter userName"
        style={styles.input}
        onChangeText={(text) => {
          setName(text);
        }}
        value={name}
      />
      <TextInput
        placeholder="Enter email"
        style={styles.input}
        onChangeText={(text) => {
          setEmail(text);
        }}
        value={email}
      />
      <TextInput
        placeholder="Enter password"
        style={styles.input}
        onChangeText={(text) => {
          setPassword(text);
        }}
        value={password}
        secureTextEntry={true}
      />
      <View style={{ marginBottom: 10, marginTop: 10 }}>
        <Button title="Get Details" onPress={() => setDisplay(true)} />
      </View>
      <View>
        <Button
          color={"green"}
          style={{ marginTop: 10, borderRadius: 10, width: "30%" }}
          title="clearText"
          onPress={resetForm}
        />
      </View>
      <View>
        {display ? (
          <View>
            <Text style={{ fontSize: 20 }}>{name}</Text>
            <Text style={{ fontSize: 20 }}>{email}</Text>
            <Text style={{ fontSize: 20 }}>{password}</Text>

          </View>
        ) : null}
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  input: {
    borderColor: "black",
    width: "80%",
    height: 40,
    fontSize: 20,
    borderColor: "blue",
    borderWidth: 0.3,
    borderRadius: 10,
    textAlign: "center",
    margin: "auto",
    marginLeft: 30,
    backgroundColor: "gray",
    borderRightColor: "black",
    marginTop: 10,
  },
});
