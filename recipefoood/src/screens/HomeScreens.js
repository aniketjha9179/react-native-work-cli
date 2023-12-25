// import React, { useEffect, useState } from 'react';
// import { View, Text, ScrollView, Image, TextInput } from 'react-native';
// import { StatusBar } from 'expo-status-bar';
// import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
// import Categories from '../components/categories';
// import axios from 'axios';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import Recipes from '../components/recipes';


// export default function HomeScreen() {
//   const [activeCategory, setActiveCategory] = useState('Beef');
//   const [categories, setCategories] = useState([]);
//   const [meals, setMeals] = useState([]);

//   useEffect(() => {
//     getCategories();
//     getRecipes();
//   }, []);

//   const handleChangeCategory = (category) => {
//     getRecipes(category);
//     setActiveCategory(category);
//     setMeals([]);
//   };

//   const getCategories = async () => {
//     try {
//       const response = await axios.get('https://themealdb.com/api/json/v1/1/categories.php');
//       if (response && response.data) {
//         // console.log('got data', response.data);
//         setCategories(response.data.categories);
//       }
//     } catch (err) {
//       console.log('error: ', err.message);
//     }
//   };

//   const getRecipes = async (category = 'Beef') => {
//     try {
//       const response = await axios.get(`https://themealdb.com/api/json/v1/1/filter.php?c=${category}`);
//       if (response && response.data) {
//         setMeals(response.data.meals);
//       }
//     } catch (err) {
//       console.log('error: ', err.message);
//     }
//   };

//   return (
//     <View style={{ flex: 1, backgroundColor: 'white', marginTop:25 }}>
//       <StatusBar style="dark" />
//       <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 50 }}>
//         {/* avatar and bell icon */}
//         <View style={{ marginHorizontal: hp(2), flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: hp(2) }}>
//           <Image source={require('../../assets/images.png')} style={{ height: hp(5), width: hp(5.5) }} />
//           <Icon name='bell-o'  size={hp(4)} color="gray" />
//         </View>

//         {/* greetings and punchline */}
//         <View style={{ marginHorizontal: hp(2), marginBottom: hp(2) }}>
//           <Text style={{ fontSize: hp(1.7), color: '#717171' }}>Hello, Aniket!</Text>
//           <View>
//             <Text style={{ fontSize: hp(3.8), fontWeight: 'bold', color: '#14213d' }}>Make your own food,</Text>
//           </View>
//           <Text style={{ fontSize: hp(4.8),  color: '#14213d' }}>
//             stay at <Text style={{ color: '#FFC107',fontWeight: 'bold',fontStyle:'italic' }}>Home</Text>
//           </Text>
//         </View>

//         {/* search bar */}
//         <View style={{ marginHorizontal: hp(1), flexDirection: 'row', alignItems: 'center', borderRadius: hp(5), backgroundColor: '#e5e5e5', padding: hp(1) }}>
//           <TextInput
//           // onChange={()=>{}}
//             placeholder="Search any recipe"
//             placeholderTextColor="gray"
//             style={{ fontSize: hp(2.1), flex: 1, marginBottom: hp(1), paddingLeft: hp(1) }}
//           />
//           <View style={{ backgroundColor: 'white', borderRadius: hp(3), padding: hp(1) }}>
//             <Icon name="search" size={hp(2.5)}  color="gray" />
//           </View>
//         </View>

//         {/* categories */}
//         <View style={{marginTop:20}}>
//         { categories.length>0 && <Categories categories={categories} activeCategory={activeCategory} handleChangeCategory={handleChangeCategory} /> }
//         </View>

//         {/* recipes */}
//         <View>
//           <Recipes meals={meals} />
//         </View>
//       </ScrollView>
//     </View>
//   );
// }


import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, Image, TextInput } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Categories from '../components/categories';
import axios from 'axios';
import Icon from 'react-native-vector-icons/FontAwesome';
import Recipes from '../components/recipes';


export default function HomeScreen() {
  const [activeCategory, setActiveCategory] = useState('Beef');
  const [categories, setCategories] = useState([]);
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    getCategories();
    getRecipes();
  }, []);

  const handleChangeCategory = (category) => {
    getRecipes(category);
    setActiveCategory(category);
    setMeals([]);
  };

  const getCategories = async () => {
    try {
      const response = await axios.get('https://themealdb.com/api/json/v1/1/categories.php');
      if (response && response.data) {
        setCategories(response.data.categories);
      }
    } catch (err) {
      console.log('error: ', err.message);
    }
  };

  const getRecipes = async (category = 'Beef') => {
    try {
      const response = await axios.get(`https://themealdb.com/api/json/v1/1/filter.php?c=${category}`);
      if (response && response.data) {
        setMeals(response.data.meals);
      }
    } catch (err) {
      console.log('error: ', err.message);
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: 'white', marginTop: 25 }}>
      <StatusBar style="dark" />
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 50 }}>
        <View style={{ marginHorizontal: hp(2), flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: hp(2) }}>
          <Image source={require('../../assets/images.png')} style={{ height: hp(5), width: hp(5.5) }} />
          <Icon name='bell-o'  size={hp(4)} color="gray" />
        </View>

        <View style={{ marginHorizontal: hp(2), marginBottom: hp(2) }}>
          <Text style={{ fontSize: hp(1.7), color: '#717171' }}>Hello, Aniket!</Text>
          <View>
            <Text style={{ fontSize: hp(3.8), fontWeight: 'bold', color: '#14213d' }}>Make your own food,</Text>
          </View>
          <Text style={{ fontSize: hp(4.8),  color: '#14213d' }}>
            stay at <Text style={{ color: '#FFC107',fontWeight: 'bold',fontStyle:'italic' }}>Home</Text>
          </Text>
        </View>

        <View style={{ marginHorizontal: hp(1), flexDirection: 'row', alignItems: 'center', borderRadius: hp(5), backgroundColor: '#e5e5e5', padding: hp(1) }}>
          <TextInput
            placeholder="Search any recipe"
            placeholderTextColor="gray"
            style={{ fontSize: hp(2.1), flex: 1, marginBottom: hp(1), paddingLeft: hp(1) }}
          />
          <View style={{ backgroundColor: 'white', borderRadius: hp(3), padding: hp(1) }}>
            <Icon name="search" size={hp(2.5)}  color="gray" />
          </View>
        </View>

        <View style={{marginTop:20}}>
          { categories.length>0 && <Categories categories={categories} activeCategory={activeCategory} handleChangeCategory={handleChangeCategory} /> }
        </View>

        <View>
          <Recipes meals={meals} />
        </View>
      </ScrollView>
    </View>
  );
}

