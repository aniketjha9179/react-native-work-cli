import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import ImageSlider from "../components/ImageSlider";
import BodyParts from "../components/BodyParts";

const home = () => {
  return (
    <SafeAreaView className=" flex-1 bg-white space-y-5" edges={["top"]}>
      <StatusBar style="light" />
      {/* punch line and avatar */}
      <View className=" flex-row justify-between items-center mx-5">
        <View className="">
          <Text
            style={{ fontSize: hp(4.5) }}
            className="  font-bold tracking-wider text-neutral-700"
          >
            READY TO
          </Text>
          <Text
            style={{ fontSize: hp(4.5) }}
            className="  font-bold tracking-wider  text-rose-500"
          >
            WORKOUT{" "}
          </Text>
        </View>
        <View className=" flex justify-center items-center space-y-2">
          <Image
            source={require("../assets/images/avatar.jpg")}
            style={{ height: hp(6), width: hp(6) }}
            className=" rounded-full "
          />
          <TouchableOpacity
            className=" bg-neutral-200 justify-center items-center rounded-full flex  
           border-[3px]  border-neutral-300"
            style={{ height: hp(5.5), width: hp(5.5) }}
          >
            <Ionicons
              name="notifications-sharp"
              style={{}}
              size={hp(3)}
              color="gray"
            />
          </TouchableOpacity>
        </View>
      </View>
      {/* image slider */}
      <View>
        <ImageSlider/>
      </View>
      {/* bodyy parts list  */}
      <View className=' flex-1 '> 
        <BodyParts />
      </View>

    </SafeAreaView>
  );
};

export default home;

const styles = StyleSheet.create({});
