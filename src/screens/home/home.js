
import React from 'react';
import {Dimensions, SafeAreaView, Image, StyleSheet, ScrollView,View,} from 'react-native';
import CustomButton from '../../components/button';
import CustomCard from '../../components/card';
import HomeNavbar from '../../components/homeNavbar';
import auth from '@react-native-firebase/auth';
import { getFirestore, collection, getDocs } from "firebase/firestore"


const Home = (props) => {

  const db = getFirestore();
  const userId = auth().currentUser.uid;
  const querySnapshot =  getDocs(collection(db, "users"));
querySnapshot.forEach((doc) => {
  console.log(`${doc.id} => ${doc.data()}`);
});

  var food1 = require('../../assets/img/food-1.jpg')
  var food2 = require('../../assets/img/food-2.jpg')
  var food3 = require('../../assets/img/food-3.jpg')
  var food4 = require('../../assets/img/food-4.jpg')
  var food5 = require('../../assets/img/food-5.jpg')
  var food6 = require('../../assets/img/food-6.jpg')

  return (
    <SafeAreaView style={styles.background}>
      <HomeNavbar navigation={props.navigation}/>
      <View  style={styles.scrollArea}>
        <ScrollView style={styles.scroll}>
          <CustomCard img={food1} title={'SteakHouse'} score={'4.5'}  navigation={props.navigation}/>
          <CustomCard img={food2} title={'Ambrosia Cafe'} score={'4.2'}  navigation={props.navigation}/>
          <CustomCard img={food3} title={'Kapsül BurgerHouse'} score={'4.7'}  navigation={props.navigation}/>
          <CustomCard img={food4} title={'Koniçiva'} score={'4.1'}  navigation={props.navigation}/>
          <CustomCard img={food5} title={'Yusuf Kahvaltı Evi'} score={'2.8'}  navigation={props.navigation}/>
          <CustomCard img={food6} title={'Kopernik Pizza'} score={'4.3'}  navigation={props.navigation}/>
        </ScrollView>
      </View>
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
  scrollArea:{
    marginBottom: 20, 
    position:'absolute',
    marginTop: windowHeight*0.2,
    height: windowHeight*0.8,
    width: windowWidth,
    backgroundColor: '#f3f3f3',
    borderTopLeftRadius:48,
    borderTopRightRadius:48
  },
  scroll:{
    marginTop:10,
    marginBottom:20
  }
});

export default Home;
