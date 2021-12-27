import React from 'react';
import {Dimensions, View, StyleSheet, Text, TouchableOpacity, Image, Alert} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import MarketItem from '../../components/marketItem';
import Navbar from '../../components/navbar';
const Market = (props) => {

    const createTwoButtonAlert = () =>
    Alert.alert(
      "Bilgi",
      "Çok Yakında ...",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]
    );

    const burger = require('../../assets/img/burger.jpg');
    const lokum = require('../../assets/img/food-1.jpg');

  return (
    <>
        <SafeAreaView style={styles.nav}>
            <View style={styles.iconRow}>
                <TouchableOpacity style={styles.iconArea} onPress={() => props.navigation.navigate('Home')}>
                    <Image source={require('../../assets/icons/back.png')} style={styles.icon}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconArea} onPress={createTwoButtonAlert}>
                    <Image source={require('../../assets/icons/info.png')} style={styles.icon}/>
                </TouchableOpacity>
            </View>
            <View style={styles.titleArea}>
                <Text style={styles.title}>SteakHouse</Text>
                <Text style={styles.subtitle}>Sepetinde duracağına söyle midende dursun.</Text>
            </View>
        </SafeAreaView>

        <ScrollView style={styles.bg}>
            <MarketItem title={'Steak Burger'} subtitle={'Steak Burger + Cips + İçecek'} price={'50'} img={burger}/>
            <MarketItem title={'Lokum'} subtitle={'Lokum + Cips + İçecek'} price={'80'} img={lokum}/>
            <MarketItem title={'Steak Burger'} subtitle={'Steak Burger + Cips + İçecek'} price={'50'} img={burger}/>
            <MarketItem title={'Lokum'} subtitle={'Lokum + Cips + İçecek'} price={'80'} img={lokum}/>
            <MarketItem title={'Steak Burger'} subtitle={'Steak Burger + Cips + İçecek'} price={'50'} img={burger}/>
            <MarketItem title={'Lokum'} subtitle={'Lokum + Cips + İçecek'} price={'80'} img={lokum}/>
        </ScrollView>
    </>
  );
};

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    nav:{
        backgroundColor:'#457b9d',
        height: windowHeight*0.3,
        paddingRight:windowWidth*0.05,
        paddingLeft:windowWidth*0.05
    },
    titleArea:{
        alignItems:'center',
    },
    title:{
        color:'#f3f3f3',
        fontSize:32
    },
    subtitle:{
        color:'#f4f4f4'
    },
    iconRow:{
        flexDirection: 'row',
        justifyContent:'space-between'
    },
    icon:{
        width: 30,
        height:30
    },
    bg:{
        position:'absolute',
        marginTop:windowHeight*0.2,
        height:windowHeight*0.8,
        width:windowWidth,
        backgroundColor: '#f3f3f3',
        borderTopLeftRadius:48,
        borderTopRightRadius:48
    },
});

export default Market;
