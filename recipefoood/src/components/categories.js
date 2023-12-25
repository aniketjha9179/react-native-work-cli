import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import Animated from 'react-native-reanimated';
import { FadeInDown } from 'react-native-reanimated';
import { CachedImage } from '../helpers/image';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function Categories({ categories, activeCategory, handleChangeCategory }) {
  return (
    <Animated.View entering={FadeInDown.duration(500).springify()}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15 }}
      >
        {categories.map((cat, index) => {
          let isActive = cat.strCategory == activeCategory;
          let activeButtonStyle = isActive
            ? { backgroundColor: '#FFC107' } // Use the desired amber color
            : { backgroundColor: 'rgba(0,0,0,0.1)' }; // Use the desired black/10 color

          return (
            <TouchableOpacity
              key={index}
              onPress={() => handleChangeCategory(cat.strCategory)}
              style={{ flex: 1, alignItems: 'center', marginHorizontal: hp(1) }}
            >
              <View style={{ ...activeButtonStyle, borderRadius: hp(3), padding: hp(1.5) }}>
                <Image source={{uri:cat.strCategoryThumb}}
                 style={{ width: hp(6), height: hp(6), borderRadius: hp(3) }}
                  />
              </View>
              <Text style={{ color: '#717171', fontSize: hp(1.6), marginTop: hp(0.5) }}>{cat.strCategory}</Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </Animated.View>
  );
}
