import React from 'react';
import { View, Image, Dimensions } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import FastImage from 'react-native-fast-image';

const images = [
  require('./assets/image1.jpg'),
  require('./assets/image2.jpg'),
  require('./assets/image3.jpg'),
];

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');
const carouselWidth = viewportWidth;
const carouselHeight = viewportHeight * 0.3;

const CarouselExample = () => {
  return (
    <View>
      <Carousel
        width={carouselWidth}
        height={carouselHeight}
        animate={false}
        indicatorColor="#FFFFFF"
        indicatorSize={20}
        indicatorSpace={15}
      >
        {images.map((image, index) => (
          <View key={index}>
            <FastImage
              style={{ width: carouselWidth, height: carouselHeight }}
              source={image}
              resizeMode={FastImage.resizeMode.cover}
            />
          </View>
        ))}
      </Carousel>
    </View>
  );
};

export default CarouselExample;
