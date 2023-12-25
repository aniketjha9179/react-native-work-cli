import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { CachedImage } from '../helpers/image';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
// import { ChevronLeftIcon, ClockIcon, FireIcon } from 'react-native-heroicons/outline';
import {LeftIcon,} from 'react-native-vector-icons/AntDesign'
import { HeartIcon, Square3Stack3DIcon, UsersIcon } from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import Loading from '../components/loading';
import YouTubeIframe from 'react-native-youtube-iframe';
import Animated, { FadeInDown, FadeIn } from 'react-native-reanimated';
import { Platform } from 'react-native';
import * as Linking from 'expo-linking';

const ios = Platform.OS == 'ios';

export default function RecipeDetailScreen(props) {
  let item = props.route.params;
  const [isFavourite, setIsFavourite] = useState(false);
  const navigation = useNavigation();
  const [meal, setMeal] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getMealData(item.idMeal);
  }, []);

  const getMealData = async (id) => {
    try {
      const response = await axios.get(`https://themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
      if (response && response.data) {
        setMeal(response.data.meals[0]);
        setLoading(false);
      }
    } catch (err) {
      console.log('error: ', err.message);
    }
  };

  const ingredientsIndexes = (meal) => {
    if (!meal) return [];
    let indexes = [];
    for (let i = 1; i <= 20; i++) {
      if (meal['strIngredient' + i]) {
        indexes.push(i);
      }
    }
    return indexes;
  };

  const getYoutubeVideoId = (url) => {
    const regex = /[?&]v=([^&]+)/;
    const match = url.match(regex);
    return match && match[1] ? match[1] : null;
  };

  const handleOpenLink = (url) => {
    Linking.openURL(url);
  };

  return (
    <View style={{ flex: 1, backgroundColor: 'white', position: 'relative' }}>
      <StatusBar style="light" />
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 30 }}>
        {/* Recipe image */}
        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
          <CachedImage uri={item.strMealThumb} style={{ width: wp(100), height: hp(50), borderBottomLeftRadius: 40, borderBottomRightRadius: 40 }} />
        </View>

        {/* Back button */}
        <Animated.View entering={FadeIn.delay(200).duration(1000)} style={{ width: '100%', position: 'absolute', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingTop: hp(14) }}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={{ padding: 8, borderRadius: hp(3.5), marginLeft: 5, backgroundColor: 'white' }}>
            <LeftIcon  name='left' size={hp(3.5)}  color="#fbbf24" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setIsFavourite(!isFavourite)} style={{ padding: 8, borderRadius: hp(3.5), marginRight: 5, backgroundColor: 'white' }}>
            <HeartIcon size={hp(3.5)} strokeWidth={4.5} color={isFavourite ? 'red' : 'gray'} />
          </TouchableOpacity>
        </Animated.View>

        {/* Meal description */}
        {loading ? (
          <Loading size="large" style={{ marginTop: hp(16) }} />
        ) : (
          <View style={{ paddingHorizontal: 20, flex: 1, justifyContent: 'space-between', paddingTop: hp(8) }}>
            {/* Name and area */}
            <Animated.View entering={FadeInDown.duration(700).springify().damping(12)} style={{ marginBottom: hp(4) }}>
              <Text style={{ fontSize: hp(3), fontWeight: 'bold', flex: 1, color: '#333' }}>{meal?.strMeal}</Text>
              <Text style={{ fontSize: hp(2), fontWeight: 'medium', flex: 1, color: '#666' }}>{meal?.strArea}</Text>
            </Animated.View>

            {/* Misc */}
            <Animated.View entering={FadeInDown.delay(100).duration(700).springify().damping(12)} style={{ flexDirection: 'row', justifyContent: 'space-around', marginBottom: hp(4) }}>
              {/* ... (other views) ... */}
            </Animated.View>

            {/* Ingredients */}
            <Animated.View entering={FadeInDown.delay(200).duration(700).springify().damping(12)} style={{ marginBottom: hp(4) }}>
              <Text style={{ fontSize: hp(2.5), fontWeight: 'bold', flex: 1, color: '#333' }}>Ingredients</Text>
              <View style={{ marginLeft: 20, marginBottom: 10 }}>
                {/* ... (other views) ... */}
              </View>
            </Animated.View>

            {/* Instructions */}
            <Animated.View entering={FadeInDown.delay(300).duration(700).springify().damping(12)} style={{ marginBottom: hp(4) }}>
              <Text style={{ fontSize: hp(2.5), fontWeight: 'bold', flex: 1, color: '#333' }}>Instructions</Text>
              <Text style={{ fontSize: hp(1.6), color: '#333' }}>{meal?.strInstructions}</Text>
            </Animated.View>

            {/* Recipe video */}
            {meal.strYoutube && (
              <Animated.View entering={FadeInDown.delay(400).duration(700).springify().damping(12)} style={{ marginBottom: hp(4) }}>
                {/* ... (other views) ... */}
              </Animated.View>
            )}
          </View>
        )}
      </ScrollView>
    </View>
  );
}
