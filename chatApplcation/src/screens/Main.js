import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import Users from '../tabs/Users';
import Setting from '../tabs/Setting';

const Main = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  return (
    <View style={styles.container}>
      {selectedTab == 0 ? <Users /> : <Setting />}
      <View style={styles.bottonTabs}>
        <TouchableOpacity
          style={styles.tab}
          onPress={() => {
            setSelectedTab(0);
          }}>
          <Image
            source={require('../images/free-users-icon-267-thumb.png')}
            style={[
              styles.tabIcon,
              {tintColor: selectedTab == 0 ? 'white' : '#A09f9f'},
            ]}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tab}
          onPress={() => {
            setSelectedTab(1);
          }}>
          <Image
            source={require('../images/Settings-icon-symbol-vector.png')}
            style={[
              styles.tabIcon,
              {tintColor: selectedTab == 1 ? 'white' : '#A09f9f'},
            ]}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  bottonTabs: {
    // bcz buttons tabs are in buttom of screen
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 70,
    backgroundColor: 'purple',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  tab: {
    width: '50%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabIcon: {
    width: 30,
    height: 30,
  },
});
