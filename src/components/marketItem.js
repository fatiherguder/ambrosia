
import React from 'react';
import {Dimensions, View, StyleSheet, Text, TouchableOpacity, Image, Alert} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { BottomNavigation } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { setCartData } from '../store/cartSlice';
const MarketItem = (props) => {

    const dispatch = useDispatch()

    const createAlert = () =>
    Alert.alert(
      "Başarılı",
      "Ürün sepete eklendi.",
      [
        {
          text: "Alışverişe Devam Et",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "Sepete Git", onPress: () => props.navigation.navigate('Sepetim')}
      ]
    );

    const onClick = async() => {
        const data = await {title: props.title, subtitle: props.subtitle, price: props.price, marketName:props.name}
        await dispatch(setCartData(data))
        createAlert()
    }

  return (
    <>
        <TouchableOpacity style={styles.card}>
            <View>
                <Text style={styles.title}>{props.title}</Text>
                <Text style={styles.subtitle}>{props.subtitle}</Text>
                <View style={styles.priceArea}>
                    <Text style={styles.price}>{props.price}₺</Text>
                    <TouchableOpacity onPress={() => onClick()}>
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
