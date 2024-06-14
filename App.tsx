import React, {useState} from 'react';
import LoginScreen from './src/LoginScreen';
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
} from 'react-native';

function App(): React.JSX.Element {

  return (
<View style={customStyles.mainView}>
<LoginScreen loginTitle="Hello"/>
</View>
  );
}

const customStyles = StyleSheet.create({
  mainView: {
    width: '100%',
    height: '100%',
    backgroundColor: '#FFE5B4',
    justifyContent: 'center',
    alignItems: 'center',
  },
});


export default App;
