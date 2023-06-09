import {StyleSheet, Text, View, Image, Button, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import {addToCart,removeFromCart} from './Redux/action';
import {useDispatch, useSelector} from 'react-redux';

const Product = props => {
  const item = props.item;
  const dispatch = useDispatch();
  const cartItem = useSelector(state => state.reducer);
  const [isAdded, setIsAdded] = useState(false);
  
  const handleAddToHandle = item => {
    dispatch(addToCart(item));
  };

  const handleRemoveFromCart = ()=>{
    dispatch(removeFromCart(item.name))
  }

  useEffect(() => {
    let result  = cartItem.filter((element)=>{
          return element.name===item.name
    });
    if(result.length){
      setIsAdded(true)
    }else{
      setIsAdded(false)
    }
   
  }, [cartItem]);

  return (
    <ScrollView>
      <View
        style={{
          alignItems: 'center',
          borderBottomColor: 'orange',
          borderBottomWidth: 2,
          padding: 5,
          margin: 50,
          marginBottom: 55,
        }}>
        <Text style={{fontSize: 23}}>{item.name} </Text>
        <Text style={{fontSize: 22}}> {item.price} </Text>
        <Text style={{fontSize: 22}}> {item.color} </Text>
        <Image style={{width: 200, height: 200}} source={{uri: item.image}} />
        {isAdded ? (
          <Button
            title="Remove from Cart"
            onPress={() => handleRemoveFromCart(item)}
          />
        ) : (
          <Button title="Add to Cart" onPress={() => handleAddToHandle(item)} />
        )}
      </View>
    </ScrollView>
  );
};

export default Product;
