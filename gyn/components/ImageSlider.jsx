import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Carousel,{ParallaxImage} from "react-native-snap-carousel";
import { sliderImages } from '../constants';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";


const ImageSlider = () => {
  return (
    <Carousel 
    data={sliderImages}
    loop={true}
    autoplay={true}
    renderItem={itemCard}
    hasParallaxImages={true}
    sliderWidth={wp(100)}
    firstItem={1}
    autoplayInterval={4000}
    itemWidth={wp(100)-70}
    slideStyle={{display:'flex', alignItems:'center', }}
    />
  )
}

export default ImageSlider

const itemCard = ({item, index}, ParallaxProps)=>{
    return(
        <View  style={{width:wp(100)-70,height:hp(25) }}>
            <ParallaxImage
            source={item}
            containerStyle={{borderRadius:40,flex:1}}
            style={{resizeMode:'contain'}}
            parallaxFactor={1.3}
            {...ParallaxProps}

            />
        </View>
    )

}

