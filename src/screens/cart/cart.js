
import React from 'react';
import {Dimensions, View, StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import CartItem from '../../components/cartItem';
import HomeNavbar from '../../components/homeNavbar';
import Navbar from '../../components/navbar';
import { ScrollView } from 'react-native-gesture-handler';

const Cart = (props) => {

    var pizza1 = require('../../assets/img/pizza-1.jpg')
    var pizza2 = require('../../assets/img/pizza-2.jpg')
    var pizza3 = require('../../assets/img/pizza-3.jpg')

  return (
    <>
        <Navbar navigation={props.navigation}/>
        <ScrollView style={styles.bg}>
            <CartItem count={1} market={'Kopernik Pizza'} product={'Full Karışık Mars Pizza'} price={75} img={pizza1}/>
            <CartItem count={1} market={'Kopernik Pizza'} product={'Venüs Pizza'} price={60} img={pizza2}/>
            <CartItem count={2} market={'Kopernik Pizza'} product={'Güneş Pizza'} price={120} img={pizza3}/>
        </ScrollView>
        <TouchableOpacity style={styles.btn}><Text style={styles.btnText}>Sepeti Onayla</Text></TouchableOpacity>
    </>
  );
};

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    bg:{
        position:'absolute',
        marginTop:windowHeight*0.2,
        height:windowHeight*0.8,
        width:windowWidth,
        backgroundColor: '#f3f3f3',
        borderTopLeftRadius:48,
        borderTopRightRadius:48
    },
    btn:{
        backgroundColor:'#457b9d',
        position:'absolute',
        bottom:windowWidth*0.1,
        width:windowWidth*0.5,
        height:windowHeight*0.05,
        alignItems:'center',
        justifyContent:'center',
        left:windowWidth*0.25,
        right:windowWidth*0.25,
        borderRadius:16
    },
    btnText:{
        color:'#f3f3f3',
        fontWeight:'bold',
        fontSize:16
    }
});

export default Cart;
