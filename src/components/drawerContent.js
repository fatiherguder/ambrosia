
import React from 'react';
import {Dimensions, View, StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { SafeAreaView } from 'react-native-safe-area-context';

const DrawerContent = (props) => {

  return (
    <>
        
        <TouchableOpacity style={styles.bg}>
            <TouchableOpacity style={styles.btn} onPress={() => props.navigation.navigate('Home')}>
                <Text style={styles.btnText}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={() => props.navigation.navigate('Sepetim')}>
                <Text style={styles.btnText}>Sepetim</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{padding: 30, borderBottomColor:'white',}} onPress={() => props.navigation.navigate('Profile')}>
                <Text style={styles.btnText}>Profil</Text>
            </TouchableOpacity>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconArea} onPress={() => props.navigation.closeDrawer()}>
            <Image source={require('../assets/icons/x.png')} style={styles.icon}/>
        </TouchableOpacity>
    </>
  );
};

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    bg:{
        backgroundColor:'#457b9d',
        height: windowHeight,
        justifyContent:'center',
        alignItems:'center'
    },
    btn:{
        padding: 30,
        borderBottomColor:'white',
        borderBottomWidth:1
    },
    btnText:{
        color:'white',
        fontSize: 24,
        fontWeight:'300'
    },
    iconArea:{
        position:'absolute',
        padding: 10,
    },
    icon:{
        width: 30,
        height:30
    }
});

export default DrawerContent;
