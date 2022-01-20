
import React,{useEffect} from 'react';
import {Dimensions, StyleSheet, Text, TouchableOpacity} from 'react-native';
import CartItem from '../../components/cartItem';
import Navbar from '../../components/navbar';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';

const Cart = (props) => {

    var pizza1 = require('../../assets/img/pizza-1.jpg')

    const cartData = useSelector(state => state.cartData)


      useEffect(() => {
        console.log(cartData)
      },[])


  return (
    <>
        <SafeAreaView style={{backgroundColor:'#457b9d'}}>
            <Navbar navigation={props.navigation}/>
            <ScrollView style={styles.bg}>
                {
                    Object.values(cartData).map(item => {
                        return <CartItem count={1} market={item.marketName} product={item.title} price={item.price} img={pizza1} />
                    })
                }
                
            </ScrollView>
            <TouchableOpacity style={styles.btn}><Text style={styles.btnText}>Sepeti Onayla</Text></TouchableOpacity>
        </SafeAreaView>
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
        top:windowHeight*0.85,
        bottom:windowHeight*0,
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
