// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import MainScreen from './screens/MainScreen';
import AuthScreen from './screens/AuthScreen';
import QRScreen from './screens/QRScreen';
import ServicesScreen from './screens/ServicesScreen';
import InfoScreen from './screens/InfoScreen';
import './screens/Global.js';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="Auth" component={AuthScreen} />
        <Stack.Screen name="QR" component={QRScreen} />
        <Stack.Screen name="Info" component={InfoScreen} />
        <Stack.Screen name="Services" component={ServicesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;