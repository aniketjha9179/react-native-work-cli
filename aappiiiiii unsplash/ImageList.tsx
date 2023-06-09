import React from 'react';
import { View, Image, FlatList, Dimensions, StyleSheet } from 'react-native';

const ImageList = ({ images }) => {
  const { width } = Dimensions.get('window');
  const imageWidth = width / 2; // Adjust the number to change the number of columns in the grid

  return (
    <FlatList
      data={images}
      keyExtractor={(item) => item.id}
      numColumns={2} // Adjust the number to change the number of columns in the grid
      renderItem={({ item }) => (
        <View style={styles.imageContainer}>
          <Image source={{ uri: item.urls.regular }} style={[styles.image, { width: imageWidth, height: imageWidth }]} />
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    alignItems: 'center',
    margin: 6,
  },
  image: {
    resizeMode: 'cover',
    borderRadius: 8,
  },
});

export default ImageList;
