
import React from 'react';
import {Dimensions, View, StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import AppLoading from 'expo-app-loading';
//import { useFonts, Cinzel_400Regular} from '@expo-google-fonts/inter';


const HomeNavbar = (props) => {

    

  return (
    <>
        <View style={styles.navbar}>
            <View style={styles.iconRow}>
                <TouchableOpacity style={styles.iconArea} onPress={() => props.navigation.openDrawer()}>
                    <Image source={require('../assets/icons/menu.png')} style={styles.icon}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconArea} onPress={() => props.navigation.navigate('Sepetim')}>
                    <Image source={require('../assets/icons/basket.png')} style={styles.icon}/>
                </TouchableOpacity>
            </View>
            <Text style={styles.title}>Ambrosia</Text>
            <Text style={styles.subtitle}>Hoşgeldiniz</Text>
        </View>
    </>
  );
};

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    navbar:{
        backgroundColor:'#457b9d',
        height: windowHeight*0.25,
    },
    icon:{
        width: 30,
        height:30
    },
    iconArea:{
        padding: windowWidth*0.05,
    },
    iconRow:{
        flexDirection: 'row',
        justifyContent:'space-between'
    },
    title:{
        color: 'white',
        textAlign:'center',
        fontSize:32,
    },
    subtitle:{
        color:'white',
        textAlign:'center'
    }
});

export default HomeNavbar;
