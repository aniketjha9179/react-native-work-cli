import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { ScrollView } from 'react-native-virtualized-view';

import React, { useEffect, useState } from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import { fetchExercisesByBodypart } from "../api/excercisedb";
import { demoExercises } from "../constants";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import ExercisesList from "../components/ExercisesList";

const Excercises = () => {
  const [exercises, setExercises] = useState([])
  const router = useRouter();
  const item = useLocalSearchParams();
  // console.log("got items", item);

 useEffect(()=>{
  if(item) getExcercises(item.name);
 },[item])

 const getExcercises =async(bodypart)=>{
  let data = await fetchExercisesByBodypart(bodypart);
  console.log('got data', data);
  setExercises(data);
 }
  return (
    <ScrollView className=" mt-5">
      <StatusBar style="light" />
      <Image
        source={item.image}
        style={{ width: wp(100), height: hp(45) }}
        className=" rounded-b-[40px]"
      />
      <TouchableOpacity
        onPress={() => router.back()}
        style={{ height: hp(5.5), width: hp(5.5), marginTop: hp(5.5) }}
        className=" flex justify-center items-center pr-2 bg-rose-500 mx-5  absolute rounded-full"
      >
        <Ionicons name="ios-caret-back-outline" size={hp(4)} color="white" />
      </TouchableOpacity>
      {/* exercises */}
      <View className=" mx-4 space-y-3 mt-4">
        <Text
          style={{ fontSize: hp(3) }}
          className=" font-semibold text-neutral-700"
        >
          {item.name} exercises{" "}
        </Text>
      </View>
      <View className=" mb-10">
        <ExercisesList data={exercises} />
      </View>
    </ScrollView>
  );
};

export default Excercises;

const styles = StyleSheet.create({});
