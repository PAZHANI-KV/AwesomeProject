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

function App(): React.JSX.Element {

 return(
  <LoginScreen/>
 )
};

 


export default App;
