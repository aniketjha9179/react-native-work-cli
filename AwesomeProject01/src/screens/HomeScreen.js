import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  ScrollView,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import windowWidth from '../utils/Dimentions';
import React, {useState} from 'react';
import ElevatedCards from './ElevatedCards';
import CustomSwitch from '../components/CustomSwitch';
import ListItem from '../components/ListItem';
import {freeGames, paidGames} from '../model/data';

const HomeScreen = ({navigation}) => {
  const [gamesTab, setGamesTab] = useState(1);

  const renderBanner = ({item, index}) => {
    return <BannerSlider data={item} />;
  };
  const onSelectSwitch = value => {
    setGamesTab(value);
  };

  return (
    <SafeAreaView style={styles.homeContainer}>
      <ScrollView style={{padding: 20}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 20,
          }}>
          <Text
            style={{
              fontSize: 16,
              fontFamily: 'Roboto-Medium',
              color: '#000000 ',
            }}>
            Hello Aniket Jha
          </Text>
          <TouchableOpacity onPress={()=>navigation.goBack('')}>
            <ImageBackground
              style={{width: 40, height: 40}}
              imageStyle={{borderRadius: 25}}
              source={require('../assets/images/user-profile.jpg')}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            borderColor: '#C7C8C9',
            borderWidth: 0.9,
            borderRadius: 10,
            paddingHorizontal: 6,
            paddingVertical: 3,
          }}>
          <TextInput
            placeholder="🔍  Enter To Search"
            keyboardType="default"
            keyboardAppearance="dark"
          />
        </View>
        <View
          style={{
            marginVertical: 15,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              fontSize: 16,
              color: '#000000',
              fontFamily: 'Roboto-Medium',
              fontWeight: '900',
            }}>
            
            Upcoming Games
          </Text>
          <TouchableOpacity>
            <Text style={{color: '#0aada8'}}>See all</Text>
          </TouchableOpacity>
        </View>
        <View>
          <ElevatedCards />
        </View>
        <View
          style={{
            marginVertical: 20,
          }}>
          <CustomSwitch
            selectionnMode={1}
            option1="Free To play"
            option2="paid games"
            onSelectSwitch={onSelectSwitch}
          />
        </View>
        {gamesTab == 1 &&
          freeGames.map(item => (
            <ListItem
              key={item.id}
              photo={item.poster}
              title={item.title}
              subTitle={item.subtitle}
              isFree={item.isFree}
            />
          ))}
        {gamesTab == 2 &&
          paidGames.map(item => (
            <ListItem
              key={item.id}
              photo={item.poster}
              title={item.title}
              subTitle={item.subtitle}
              isFree={item.isFree}
              price={item.price}
            />
          ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
