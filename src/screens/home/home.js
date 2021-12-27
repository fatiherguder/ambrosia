
import React,{useEffect, useState} from 'react';
import {Dimensions, SafeAreaView, Image, StyleSheet, ScrollView,View,} from 'react-native';
import CustomButton from '../../components/button';
import CustomCard from '../../components/card';
import HomeNavbar from '../../components/homeNavbar';
import auth from '@react-native-firebase/auth';
import { getFirestore, collection, getDoc, doc } from "firebase/firestore"


const Home = (props) => {

  const db = getFirestore();
  const userId = auth().currentUser.uid;

  const [userData, setUserData] = useState();
  const [marketData, setMarketData] = useState();
  
  const getUserData = async () => {
    const docSnap = await getDoc(doc(db, "users", userId))
    setUserData(docSnap.data());
    console.log(userData)
  }

  const getMarketData = async () => {
    const marketSnap = await getDoc(doc(db, "markets", docSnap.data().markets))
    setMarketData(marketSnap.data())
    console.log("markets : " + marketData)
  }

  useEffect( () => {
     getUserData().then(getMarketData())
  })

  var food1 = require('../../assets/img/food-1.jpg')
  var food2 = require('../../assets/img/food-2.jpg')
  var food3 = require('../../assets/img/food-3.jpg')
  var food4 = require('../../assets/img/food-4.jpg')
  var food5 = require('../../assets/img/food-5.jpg')
  var food6 = require('../../assets/img/food-6.jpg')

  return (
    <View style={styles.background}>
      <SafeAreaView>
        <HomeNavbar navigation={props.navigation} name={userData?.name}/>
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
    </View>
  );
};

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  background:{
    backgroundColor:'#457b9d',
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
