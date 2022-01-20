
import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { initializeApp } from "firebase/app";

import Login from './src/screens/login/login';
import Home from './src/screens/home/home';
import Profile from './src/screens/profile/profile';
import DrawerContent from './src/components/drawerContent';
import Cart from './src/screens/cart/cart';
import Market from './src/screens/market/market';
import { Provider } from 'react-redux';
import store from './src/store/store';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const firebaseConfig = {
  apiKey: "AIzaSyBE_-xpFeQYe1TOE9DzHPtJNFoyN-2ZlUA",
  authDomain: "ambrosia-bef41.firebaseapp.com",
  projectId: "ambrosia-bef41",
  storageBucket: "ambrosia-bef41.appspot.com",
  messagingSenderId: "278877228571",
  appId: "1:278877228571:web:87c5e693bb5e48fc00b2be",
  measurementId: "G-XFSPHDCHFD"
};

const App = () => {

  const app = initializeApp(firebaseConfig);
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
          <Stack.Screen name="Main" component={HomePage} options={{headerShown: false}}/>
          <Stack.Screen name="Market" component={Market} options={{headerShown: false}}/>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
    
  );
};

const HomePage = (route) => {
  return(
    <Drawer.Navigator drawerContent={props =><DrawerContent {...props}/> }>
      <Drawer.Screen name="Home" component={Home} options={{headerShown: false}}/>
      <Drawer.Screen name="Sepetim" component={Cart} options={{headerShown: false}}/>
      <Drawer.Screen name="Profile" component={Profile} options={{headerShown: false}}/>
    </Drawer.Navigator>
  )
}


export default App;
