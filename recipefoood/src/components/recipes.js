// import React from 'react';
// import { View, Text, Pressable, Image } from 'react-native';
// import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
// import MasonryList from '@react-native-seoul/masonry-list';
// import Animated, { FadeInDown } from 'react-native-reanimated';
// import Loading from './loading';
// import { CachedImage } from '../helpers/image';
// import { useNavigation } from '@react-navigation/native';

// export default function Recipes({ categories, meals }) {
//   const navigation = useNavigation();
//   return (
//     <View style={{ marginHorizontal: wp(4), marginVertical: hp(3) }}>
//       <Text style={{ fontSize: hp(3), fontWeight: '600', color: '#333' }}>Recipes</Text>
//       <View>
//         {categories.length === 0 || meals.length === 0 ? (
//           <Loading size="large" style={{ marginTop: hp(20) }} />
//         ) : (
//           <MasonryList
//             data={meals}
//             keyExtractor={(item) => item.idMeal}
//             numColumns={2}
//             showsVerticalScrollIndicator={false}
//             renderItem={({ item, i }) => <RecipeCard item={item} index={i} navigation={navigation} />}
//             // refreshing={isLoadingNext}
//             // onRefresh={() => refetch({first: ITEM_CNT})}
//             onEndReachedThreshold={0.1}
//             // onEndReached={() => loadNext(ITEM_CNT)}
//           />
//         )}
//       </View>
//     </View>
//   );
// }

// const RecipeCard = ({ item, index, navigation }) => {
//   let isEven = index % 2 === 0;
//   return (
//     <Animated.View entering={FadeInDown.delay(index * 100).duration(600).springify().damping(12)}>
//       <Pressable
//         style={{
//           width: '100%',
//           paddingLeft: isEven ? 0 : 8,
//           paddingRight: isEven ? 8 : 0,
//           flex: 1,
//           justifyContent: 'center',
//           marginBottom: hp(4),
//         }}
//         onPress={() => navigation.navigate('RecipeDetail', { ...item })}
//       >
//         <CachedImage uri={item.strMealThumb} style={{ width: '100%', height: index % 3 === 0 ? hp(25) : hp(35), borderRadius: 35 }} />
//         <Text style={{ fontSize: hp(1.5), fontWeight: '600', marginLeft: wp(2), color: '#333' }}>
//           {item.strMeal.length > 20 ? item.strMeal.slice(0, 20) + '...' : item.strMeal}
//         </Text>
//       </Pressable>
//     </Animated.View>
//   );
// };

import React from 'react';
import { View, Text, Pressable, Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import MasonryList from '@react-native-seoul/masonry-list';
import Animated, { FadeInDown } from 'react-native-reanimated';
import Loading from './loading';
import { CachedImage } from '../helpers/image';
import { useNavigation } from '@react-navigation/native';

export default function Recipes({ meals }) {
  const navigation = useNavigation();

  if (meals === undefined) {
    return <Loading size="large" style={{ marginTop: hp(20) }} />;
  }

  return (
    <View style={{ marginHorizontal: wp(4), marginVertical: hp(3) }}>
      <Text style={{ fontSize: hp(3), fontWeight: '600', color: '#333' }}>Recipes</Text>
      <View>
        {meals.length === 0 ? (
          <Text>No recipes available</Text>
        ) : (
          <MasonryList
            data={meals}
            keyExtractor={(item) => item.idMeal}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            renderItem={({ item, i }) => <RecipeCard item={item} index={i} navigation={navigation} />}
          />
        )}
      </View>
    </View>
  );
}

const RecipeCard = ({ item, index, navigation }) => {
  let isEven = index % 2 === 0;
  return (
    <Animated.View entering={FadeInDown.delay(index * 100).duration(600).springify().damping(12)}>
      <Pressable
        style={{
          width: '100%',
          paddingLeft: isEven ? 0 : 8,
          paddingRight: isEven ? 8 : 0,
          flex: 1,
          justifyContent: 'center',
          marginBottom: hp(4),
        }}
        onPress={() => navigation.navigate('RecipeDetail', { ...item })}
      >
        <CachedImage uri={item.strMealThumb} style={{ width: '100%', height: index % 3 === 0 ? hp(25) : hp(35), borderRadius: 35 }} />
        <Text style={{ fontSize: hp(1.5), fontWeight: '600', marginLeft: wp(2), color: '#333' }}>
          {item.strMeal.length > 20 ? item.strMeal.slice(0, 20) + '...' : item.strMeal}
        </Text>
      </Pressable>
    </Animated.View>
  );
};
