
import React,{useEffect, useState} from 'react';
import {Dimensions, SafeAreaView, Image, StyleSheet, ScrollView,View,Text} from 'react-native';
import CustomButton from '../../components/button';
import CustomCard from '../../components/card';
import HomeNavbar from '../../components/homeNavbar';
import auth from '@react-native-firebase/auth';
import { getFirestore, collection, getDoc, doc } from "firebase/firestore"


const Home = (props, route) => {
  const db = getFirestore();
  const userId = auth().currentUser.uid;

  const [userData, setUserData] = useState();
  const [marketData, setMarketData] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const getUserData = async () => {
    const docSnap = await getDoc(doc(db, "users", userId));
    setUserData(docSnap.data());
    console.log(userData)
    setLoading(false)
  }

  const getMarketData = () => {
    const array = [];
    userData.markets.map(async (item) => {
      const marketSnap = await getDoc(doc(db, "markets", item));
      await array.push(marketSnap.data())
      setMarketData(array);
      return (console.log(marketData));
    })
  }

  useEffect( () => {
     getUserData().then(() => getMarketData())
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
            {
              loading ? <Text>Loading ...</Text> : <ScrollView style={styles.scroll}>
                {
                  marketData.map(market => {
                    return <CustomCard img={market.img} title={market.name} score={market.score}  navigation={props.navigation}/>
                  })
                }
            </ScrollView>
            }
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
