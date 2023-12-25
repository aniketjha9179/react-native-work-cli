import { Text, View } from "react-native";
import React from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Image } from "expo-image";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { ScrollView } from "react-native";
import Animated, { FadeInDown } from "react-native-reanimated";

const exerciseDetails = () => {
  const router = useRouter();
  const item = useLocalSearchParams();
  console.log("got items", item);
  return (
    <>
      <View className="  flex  flex-1 justify-center  items-center  ">
        <View className=" mt-10 shadow-md   bg-neutral-200 rounded-b-[40px] ">
          <Image
            source={{ uri: item.gifUrl }}
            contentFit="cover"
            style={{ width: wp(100), height: wp(100) }}
            className=" rounded-b-[40px]"
          />
        </View>
        <TouchableOpacity
          onPress={() => router.back()}
          className=" top-2 mx-2 absolute rounded-full  right-0 mt-6 "
        >
          <Ionicons name="ios-close-circle-sharp" size={30} color="red" />
        </TouchableOpacity>
        {/* details */}
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 60 }}
          className=" ml-0 mx-2 space-y-1 mt-3 "
        >
          <Animated.Text
            entering={FadeInDown.duration(300).springify()}
            style={{ fontSize: hp(3.5) }}
            className=" font-semibold text-neutral-700 tracking-wide"
          >
            {item.name}
          </Animated.Text>
          <Animated.Text
            entering={FadeInDown.delay(100).duration(300).springify()}
            style={{ fontSize: hp(2) }}
            className=" text-neutral-700 tracking-wide"
          >
            Equipement{" "}
            <Text className=" font-bold text-rose-500">{item?.equipment} </Text>
          </Animated.Text>
          <Animated.Text
            entering={FadeInDown.delay(200).duration(300).springify()}
            style={{ fontSize: hp(2) }}
            className=" text-neutral-700 tracking-wide"
          >
            Secondary muscles{" "}
            <Text className=" font-bold text-rose-500">
              {item?.secondaryMuscles}{" "}
            </Text>
          </Animated.Text>
          <Animated.Text
            entering={FadeInDown.delay(300).duration(300).springify()}
            style={{ fontSize: hp(2) }}
            className=" text-neutral-700 tracking-wide"
          >
            Target muscles{" "}
            <Text className=" font-bold  text-rose-500">{item?.target} </Text>
          </Animated.Text>

          <Animated.Text
            entering={FadeInDown.delay(400).duration(300).springify()}
            style={{ fontSize: hp(4) }}
            className="  font-medium text-rose-500 tracking-wide"
          >
            Instructions ➡️{"  "}
            <Animated.Text className="  text-neutral-600">
              {/* {item.instructions.split(" , ").map((instruction, index) => {
                return (
                  <Animated.Text
                    key={instruction}
                    style={{ fontSize: hp(2.5) }}
                    className=" flex text-neutral-600 space-x-8
              "
                  >
                    {instruction}
                    {" \n"}
                  </Animated.Text>
                );
              })}{" "} */}
              {item.instructions && typeof item.instructions === "string" ? (
                <Animated.Text className="text-neutral-600">
                  {item.instructions.split(" , ").map((instruction, index) => (
                    <Animated.Text
                      key={instruction}
                      style={{ fontSize: hp(2.5) }}
                      className="flex text-neutral-600 space-x-8"
                    >
                      {instruction}
                      {" \n"}
                    </Animated.Text>
                  ))}
                </Animated.Text>
              ) : null}
            </Animated.Text>
          </Animated.Text>
        </ScrollView>
      </View>
    </>
  );
};

export default exerciseDetails;
