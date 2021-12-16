
import React from 'react';
import {TouchableOpacity, StyleSheet, Text,Alert} from 'react-native';

const CustomButton = (props) => {

  return (
    <TouchableOpacity style={styles.button} onPress={props.onPress}>
      <Text style={styles.text}>Giriş Yap</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    button:{
        backgroundColor:'#457b9d',
        marginLeft: 60,
        marginRight: 60,
        borderRadius: 16,
        height: 40,
        alignItems: 'center',
        justifyContent:'center'
    },
    text:{
        color:'white',
        textAlign:'center',
        fontSize:16,
    }
});

export default CustomButton;
