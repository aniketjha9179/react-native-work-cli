import { LogBox, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import exerciseDetails from "./exerciseDetails";

const _layout = () => {
  LogBox.ignoreAllLogs(["Warning: Failed prop type"]);
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="Excercises"
        options={{
          presentation: "fullScreenModal",
        }}
      />
      <Stack.Screen
        name="exerciseDetails"
        options={{
          presentation:'modal',
        }}
      />
    </Stack>
  );
};

export default _layout;

const styles = StyleSheet.create({});
