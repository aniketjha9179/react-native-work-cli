import {StyleSheet, Text, View, Image, Button} from 'react-native';
import React from 'react';
import Header from './components/Header';
import Product from './components/Product';
import {ScrollView} from 'react-native';

const App = () => {
  const products = [
    {
      name: 'samsung ',
      color: 'braze',
      price: '$188',
      image:
        'https://m.media-amazon.com/images/I/41mt0QQkvKL._SX300_SY300_QL70_FMwebp_.jpg',
    },
    {
      name: 'realme ',
      color: 'braze-black',
      price: '$180',
      image:
        'https://i.gadgets360cdn.com/products/large/vivo-y01-703x800-1646802937.jpg?downsize=*:180',
    },
    {
      name: 'Apple ',
      color: 'braze',
      price: '$478',
      image:
        'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-finish-select-202209-6-1inch-product-red?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1661027205642',
    },
    {
      name: 'Nokia ',
      color: 'braze',
      price: '$188',
      image:
        'https://i.gadgets360cdn.com/products/large/vivo-y01-703x800-1646802937.jpg?downsize=*:180',
    },
  ];
  return (
    <ScrollView>
      <View style={styles.container}>
        <Header />

        {products.map(item => (
          <Product item={item} />
        ))}
      </View>
    </ScrollView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
  },
  font: {
    fontSize: 23,
  },
});
