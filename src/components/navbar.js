
import React from 'react';
import {Dimensions, View, StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import { useDispatch } from 'react-redux';
import { removeCartData } from '../store/cartSlice';

const Navbar = (props) => {
    const dispatch = useDispatch()

    const deleteBtn = async() => {
        await dispatch(removeCartData())
        window.location.reload(false);
    }


  return (
    <>
        <View style={styles.nav}>
            <View style={styles.iconRow}>
                <TouchableOpacity style={styles.iconArea} onPress={() => props.navigation.navigate('Home')}>
                    <Image source={require('../assets/icons/back.png')} style={styles.icon}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconArea} onPress={() => deleteBtn()}>
                    <Image source={require('../assets/icons/trash.png')} style={styles.icon}/>
                </TouchableOpacity>
            </View>
            <View style={styles.titleArea}>
                <Text style={styles.title}>Sepetim</Text>
                <Text style={styles.subtitle}>Sepetinde duracağına söyle midende dursun.</Text>
            </View>
        </View>
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

});

export default Navbar;
