
import React from 'react';
import {Dimensions, View, StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
const CustomCard = (props) => {

  return (
    <>
        <TouchableOpacity style={styles.card} onPress={() => props.navigation.navigate('Market')}>
            <Image style={styles.img} source={props.img} />
            <View style={styles.titleArea}>
                <Text style={styles.title}>{props.title}</Text>
                <View style={{flexDirection:'row'}}>
                    <Text style={styles.score}>{props.score}</Text>
                    <Image style={styles.star} source={require('../assets/icons/star.png')} />
                </View>
            </View>
        </TouchableOpacity>
    </>
  );
};

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    card:{
        margin:20,
        borderRadius:16,
    },
    img:{
        height:windowHeight*0.2,
        width:'auto',
        borderRadius:16,
    },
    titleArea:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        padding: 7
    },
    title:{
        fontSize:18,
    },
    star:{
        height:24,
        resizeMode:'contain'
    },
    score:{
        fontSize:18,
        fontWeight:'600'
    }
});

export default CustomCard;
