
import React from 'react';
import {Dimensions, View, StyleSheet, Text, TouchableOpacity, Image} from 'react-native';

const CartItem = (props) => {


  return (
    <>
        <TouchableOpacity style={styles.card}>
        <View style={styles.countArea}>
            <Text style={styles.count}>{props.count}x</Text>
        </View>
            <View style={styles.textArea}>
                <Text style={styles.title}>{props.market}</Text>
                <Text style={styles.subtitle}>{props.product}</Text>
                <Text style={styles.price}>{props.price}₺</Text>
            </View>
            <Image style={styles.img} source={props.img}></Image>
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
        justifyContent:'space-around',
        flexDirection:'row',
        borderBottomColor: '#8d99ae',
        borderBottomWidth:1,
        marginHorizontal:10
    },
    textArea:{
        alignItems:'center'
    },
    img:{
        height: 100,
        width:100,
        borderRadius:8
    },
    title:{
        fontWeight:'bold',
        fontSize:18
    },
    price:{
        fontSize:24,
        fontWeight:'bold',
        textAlign:'center'
    },
    count:{
        fontSize:16
    }
});

export default CartItem;
