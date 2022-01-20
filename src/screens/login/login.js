
import React from 'react';
import {Dimensions, SafeAreaView, Image, StyleSheet, View, ImageBackground,TextInput} from 'react-native';
import CustomButton from '../../components/button';
import auth from '@react-native-firebase/auth';
import { getFirestore, collection, getDoc, doc } from "firebase/firestore"
import { useNavigation } from "@react-navigation/core";
import { useSelector, useDispatch } from 'react-redux'
import {setUserData} from '../../store/userSlice'

const Login = (props) => {
  const [emailValue, setEmailValue] = React.useState("");
  const [passValue, setPassValue] = React.useState("");
  const navigation = useNavigation();
  const dispatch = useDispatch()

  const back = require('../../assets/img/back.jpg');
  const db = getFirestore();

  const Login = () => {
    auth().signInWithEmailAndPassword(emailValue,passValue)
    .then(async () => {
      userId = auth().currentUser.uid
      const docSnap = await getDoc(doc(db, "users", userId));
      dispatch(setUserData(docSnap.data()))
    })
        .then(() => {
          navigation.navigate('Main')
        })
        .catch(error => console.log(error))
      
  }

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
      <CustomButton onPress={() => Login()}/>
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
