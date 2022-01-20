
import React,{useEffect} from 'react';
import {Dimensions, SafeAreaView, Image, StyleSheet, ScrollView,View,Text} from 'react-native';
import CustomCard from '../../components/card';
import HomeNavbar from '../../components/homeNavbar';
import { getFirestore, getDoc, doc } from "firebase/firestore"
import { useSelector, useDispatch } from 'react-redux'
import { marketData, setMarketData } from '../../store/marketSlice';


const Home = (props) => {
  const db = getFirestore();
  const dispatch = useDispatch()


  const userState = useSelector(state => state.userData)
  const marketState = useSelector(state => state.marketData)
  

  const getMarketData = async () => {
       await userState[0].markets.map((item) =>{
        getDoc(doc(db, "markets", item)).then(data=>
          dispatch(setMarketData(data.data()))
          );
          
      })
  }


  useEffect(() => {
    getMarketData()
  },[marketData])

  var food1 = require('../../assets/img/food-1.jpg')

  return (
    <View style={styles.background}>
      <SafeAreaView>
        <HomeNavbar navigation={props.navigation} name={userState[0]?.name}/>
          <View  style={styles.scrollArea}>
             <ScrollView style={styles.scroll}>
                {
                  marketState?.map((item,index) => <CustomCard img={food1} title={item?.name} score={item?.score} index={index}  navigation={props.navigation}/>
                  )
                }
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
