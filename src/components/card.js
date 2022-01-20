
import React,{useEffect} from 'react';
import {Dimensions, View, StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { setMarketData } from '../store/marketSlice';
import { setMenuData } from '../store/menuSlice';




const CustomCard = (props) => {

    const dispatch = useDispatch()
    const marketState = useSelector(state => state.marketData)

    const onClick = async () => {
        await dispatch(setMenuData(JSON.stringify(marketState[props.index].menu)))
        props.navigation.navigate('Market')
    }


      useEffect(() => {
          
      }, [])


  return (
    <>
        <TouchableOpacity style={styles.card} onPress={() => props.navigation.navigate('Market',{ index: props.index })}>
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
