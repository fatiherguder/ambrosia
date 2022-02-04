import React, { useEffect, useState } from 'react';
import {Dimensions, View, StyleSheet, Text, TouchableOpacity, Image, Alert} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import MarketItem from '../../components/marketItem';


const Market = (props) => {

    const dispatch = useDispatch()
    const marketState = useSelector(state => state.marketData)

    const [data,setData] = useState([]);
    

    const createAlert = () =>
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

    const { index} = props.route.params;
    const fecthData = async () => {
        setData(marketState[index].menu)
    }

    const burger = require('../../assets/img/burger.jpg');
    const lokum = require('../../assets/img/food-1.jpg');

    useEffect(() => {
        fecthData()
    }, [data])


  return (
    <>
        <SafeAreaView style={styles.nav}>
            <View style={styles.iconRow}>
                <TouchableOpacity style={styles.iconArea} onPress={() => props.navigation.navigate('Home')}>
                    <Image source={require('../../assets/icons/back.png')} style={styles.icon}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconArea} onPress={createAlert}>
                    <Image source={require('../../assets/icons/info.png')} style={styles.icon}/>
                </TouchableOpacity>
            </View>
            <View style={styles.titleArea}>
                <Text style={styles.title}>{marketState[index].name}</Text>
            </View>
        </SafeAreaView>

        <ScrollView style={styles.bg}>
            {
                Object.values(data).map( item => {
                    const marketName = marketState[index].name;
                    return <MarketItem title={item.name} subtitle={item.desc} price={item.price} img={burger} name={marketName} index={index} navigation={props.navigation}/>
                })
            }
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
