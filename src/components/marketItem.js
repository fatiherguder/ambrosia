
import React from 'react';
import {Dimensions, View, StyleSheet, Text, TouchableOpacity, Image, Alert} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
const MarketItem = (props) => {

  return (
    <>
        <TouchableOpacity style={styles.card}>
            <View>
                <Text style={styles.title}>{props.title}</Text>
                <Text style={styles.subtitle}>{props.subtitle}</Text>
                <View style={styles.priceArea}>
                    <Text style={styles.price}>{props.price}₺</Text>
                    <TouchableOpacity>
                        <Image source={require('../assets/icons/add.png')} style={styles.icon}/>
                    </TouchableOpacity>
                </View>
            </View>
            <Image source={props.img} style={styles.img}/>
        </TouchableOpacity>
    </>
  );
};

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    card:{
        height: windowHeight*0.2,
        alignItems:'center',
        justifyContent:'space-between',
        flexDirection:'row',
        borderBottomColor: '#8d99ae',
        borderBottomWidth:1,
        marginHorizontal:20,
        paddingHorizontal:10
    },
    img:{
        height:windowHeight*0.15,
        width:windowHeight*0.15
    },
    priceArea:{
        flexDirection:'row',
        marginTop:20
    },
    price:{
        fontSize:22,
        fontWeight:'bold',
        color:'#073b4c',
        paddingHorizontal:10
    },
    icon:{
        width: 30,
        height:30
    },
    title:{
        fontSize:18,
        fontWeight:'bold',
        color:'#073b4c'
    },
});

export default MarketItem;
