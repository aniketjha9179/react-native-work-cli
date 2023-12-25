import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { FlatList } from "react-native";
import { bodyParts } from "../constants";
import { TouchableOpacity } from "react-native";
import { Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import Animated,{ FadeIn, FadeInDown, FadeOut } from 'react-native-reanimated';


const BodyParts = () => {
  const router = useRouter();
  return (
    <View className=" mx-4">
      <Text
        style={{ fontSize: hp(3) }}
        className=" font-semibold text-neutral-700 "
      >
        Exercise
      </Text>
      <FlatList
        data={bodyParts}
        numColumns={2}
        keyExtractor={(item)=>item.name}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50, paddingTop: 20 }}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        renderItem={({ item, index }) => (
          <BodyPartCard router={router} index={index} item={item} />
        )}
      />
    </View>
  );
};

export default BodyParts;

const BodyPartCard = ({ item, router, index }) => {
  return (
    <Animated.View 
    entering={FadeInDown.duration(400).delay(index*200).springify().damping(5)}
    >
      <TouchableOpacity
        onPress={() => router.push({ pathname: "/Excercises", params: item })}
        style={{ width: wp(44), height: wp(52) }}
        className=" flex justify-end p-4 mb-4  "
      >
        <Image
          source={item.image}
          resizeMode="cover"
          style={{ width: wp(44), height: wp(52) }}
          className=" rounded-[30px] absolute"
        />
        <LinearGradient
          colors={["transparent", "rgba(0,0,0,0.9)"]}
          style={{ width: wp(44), height: hp(15) }}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
          className=" absolute bottom-0 rounded-[30px]"
        >
          <Text
            style={{ fontSize: hp(2.3) }}
            className=" text-white mt-20   text-center tracking-wider "
          >
            {item.name}
          </Text>
        </LinearGradient>
      </TouchableOpacity>
    </Animated.View>
  );
};
