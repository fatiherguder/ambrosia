
import React from 'react';
import {TextInput, StyleSheet, View,} from 'react-native';

const CustomInput = (props) => {
    const [value, setValue] = React.useState("");

  return (
    <View style={styles.inputArea}>
      <TextInput placeholder={props.hint} style={styles.input} onChangeText={setValue}>

      </TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
    input:{
        height: 50,
        margin: 12,
        borderWidth: 1,
        borderColor:'#457b9d',
        padding: 10,
        borderRadius: 16,
        backgroundColor:'white'
    },
    inputArea:{
        paddingLeft:20,
        paddingRight:20
    }
});

export default CustomInput;
