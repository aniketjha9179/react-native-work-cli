import React from 'react'
import { useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  ImageSourcePropType,
  Image,
  Pressable,

} from 'react-native';
import type { PropsWithChildren } from 'react';
import ReactNativeHapticFeedback from "react-native-haptic-feedback";



import DiceOne from '../assests/One.png';
import DiceTwo from '../assests/Two.png';
import DiceThree from '../assests/Three.png';
import DiceFour from '../assests/Four.png';
import DiceFive from '../assests/Five.png';
import DiceSix from '../assests/Six.png';



type DiceProps = PropsWithChildren<{
  imageUrl: ImageSourcePropType
}>
const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};


const Dice = ({ imageUrl }: DiceProps): JSX.Element => {
  return (
    <View>
      <Image style={style.diceImage}
        source={imageUrl}

      />
    </View>
  )

}



function App(): JSX.Element {
  const [diceImage, setDiceImage] = useState<ImageSourcePropType>(DiceOne)
  const rollDiceOnTap = () => {
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    switch (randomNumber) {
      case 1:
        setDiceImage(DiceOne);
        break;
      case 2:
        setDiceImage(DiceTwo);
        break;
      case 3:
        setDiceImage(DiceThree);
        break;
      case 4:
        setDiceImage(DiceFour);
        break;
      case 5:
        setDiceImage(DiceFive);
        break;
      case 6:
        setDiceImage(DiceSix);
        break;

      default:
        setDiceImage(DiceOne)
        break;
    }
    ReactNativeHapticFeedback.trigger("impactLight", options);



  }

  return (
    <View style={style.container}>

      <Pressable onPress={rollDiceOnTap}>
      <Dice imageUrl={diceImage} />
        <Text style={style.rollDIceBtnText}>
          Roll The Dice
          </Text>
      </Pressable>

    </View>
  );
}
const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  
  },
  diceContainer: {
    margin: 12,
  }, diceImage: {
    width: 200,
    height: 200,

  }, rollDIceBtnText: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderWidth: 2,
    fontSize: 15,
    color: '#8EA7E9',
    fontWeight: '700',
    textTransform: 'uppercase',
    borderRadius:5,
    
  },

})

export default App;