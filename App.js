
import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Login from './src/screens/login/login';
import Home from './src/screens/home/home';
import Profile from './src/screens/profile/profile';
import DrawerContent from './src/components/drawerContent';
import Cart from './src/screens/cart/cart';
import Market from './src/screens/market/market';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
        <Stack.Screen name="Home" component={HomePage} options={{headerShown: false}}/>
        <Stack.Screen name="Market" component={Market} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const HomePage = () => {
  return(
    <Drawer.Navigator drawerContent={props =><DrawerContent {...props}/> }>
      <Drawer.Screen name="Home" component={Home} options={{headerShown: false}}/>
      <Drawer.Screen name="Sepetim" component={Cart} options={{headerShown: false}}/>
      <Drawer.Screen name="Profile" component={Profile} options={{headerShown: false}}/>
    </Drawer.Navigator>
  )
}


export default App;
