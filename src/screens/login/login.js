
import React from 'react';
import {Dimensions, SafeAreaView, Image, StyleSheet, View, ImageBackground,TextInput} from 'react-native';
import CustomButton from '../../components/button';
import CustomInput from '../../components/input';
import auth from '@react-native-firebase/auth';

const Login = (props) => {
  const [emailValue, setEmailValue] = React.useState("");
  const [passValue, setPassValue] = React.useState("");

  const back = require('../../assets/img/back.jpg');

  return (
    <ImageBackground resizeMode="cover" source={back} style={styles.image}>
      <SafeAreaView style={styles.background}>
      <View style={styles.logoArea}>
        <Image style={styles.logo} source={require('../../assets/img/logo.png')} />
      </View>
      <View style={styles.inputArea}>
        <TextInput placeholder="E-posta" style={styles.input} onChangeText={setEmailValue}/>
      </View>
      <View style={styles.inputArea}>
        <TextInput placeholder="Parola" style={styles.input} onChangeText={setPassValue}/>
      </View>
      <CustomButton onPress={() => auth().signInWithEmailAndPassword(emailValue,passValue)
        .then(() => props.navigation.navigate('Home'))
        .catch(error => console.log(error))
      }/>
    </SafeAreaView>
    </ImageBackground>
  );
};

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  background:{
    backgroundColor:'transparent',
    height: windowHeight,
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  logo:{
    width: 300,
    height: 300,
    backgroundColor: 'transparent',
  },
  logoArea:{
    display: 'flex',
    justifyContent:'center',
    alignItems: 'center',
  },
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

export default Login;
