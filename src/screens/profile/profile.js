
import React from 'react';
import {Dimensions, SafeAreaView, Image, StyleSheet, View,Text} from 'react-native';

const Profile = () => {

  return (
    <SafeAreaView style={styles.background}>
      <Text>Profile View</Text>
    </SafeAreaView>
  );
};

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  background:{
    backgroundColor:'#f3f3f3',
    height: windowHeight
  },
});

export default Profile;
