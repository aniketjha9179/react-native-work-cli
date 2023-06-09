import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import fetchImages from './UnsplashAPI';
import ImageList from './ImageList';

const App = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedImages = await fetchImages('nature, wild, history, india, '); // Replace 'nature' with your desired search query
      setImages(fetchedImages);
    };

    fetchData();
  }, []);

  return (
    <View>
      {images.length > 0 ? (
        <ImageList images={images} />
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
};

export default App;
