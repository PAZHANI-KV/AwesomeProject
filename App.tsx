import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Pressable,
  useColorScheme,
  View,
  FlatList,
} from 'react-native';
import LoginScreen from './src/LoginScreen';
import HomeScreenTwo from './src/HomeScreenTwo';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetailsPage from './src/DetailsPage';
import FlatListExample from './src/FlatListExample';

// const Tab = createNativeStackNavigator();
// const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
return(
  <FlatListExample/>
)
//  return(
//  <NavigationContainer>
//   <Stack.Navigator initialRouteName='Login'>
//   <Stack.Screen name="Login" component={LoginScreen} />
//   <Stack.Screen name="Details" component={DetailsPage} />
//   <Stack.Screen name="Home" component={HomeScreenTwo} />
//   </Stack.Navigator>
//  </NavigationContainer>
//  )
};


export default App;
