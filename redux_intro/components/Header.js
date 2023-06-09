import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';

const Header = () => {
  const cartData = useSelector(state => state.reducer);
  const [cartItems, setCartItems] = useState(0);

  useEffect(() => {
    setCartItems(cartData.length);
  }, [cartData]);

  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 30,
          textAlign: 'right',
          padding: 5,
          backgroundColor: 'orange',
        }}>
        <View
          style={{
            backgroundColor: 'red',
            borderRadius: 15,
            height: 40,
            width: 40,
          }}>
          <Text style={{fontSize:25,
          alignItems:'center',
          justifyContent:'center',
          flex:1
          
          }}> {cartItems}</Text>
        </View>
      </Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {},
});
