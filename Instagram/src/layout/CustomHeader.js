import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Body, Right, Button, Icon, Title, Text, Header} from 'native-base';

import {connect} from 'react-redux';
import propTypes from 'prop-types';
import {signOut} from '../actions/auth';

const CustomHeader = ({signOut, authState, navigation}) => {
  return (
    <Header
      androidStatusBarColor="#0f4c75"
      styles={{
        backgroundColor: '#0f4c75',
      }}>
      <Body>
        <Title>Instagram App</Title>
      </Body>
      <Right>
        {authState.isAuthenticated && (
          <>
            <Button
              transparent
              iconLeft
              onPress={() => navigation.navigate('AddPost')}>
              <Text style={{color: '#fdcb9e'}}>Add Post</Text>
            </Button>
            <Button transparent onPress={() => signOut()}>
              <Icon name="log-out-outline" style={{color: 'red'}} />
            </Button>
          </>
        )}
      </Right>
    </Header>
  );
};

const mapStateToProps = state => ({
  authState: state.authState,
});

const mapDispatchToProps = {
  signOut,
};

CustomHeader.propTypes = {
  signOut: propTypes.func.isRequired,
  authState: propTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomHeader);

const styles = StyleSheet.create({});
