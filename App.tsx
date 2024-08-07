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
  Image,
} from 'react-native';
import LoginScreen from './src/LoginScreen';
import HomeScreenTwo from './src/HomeScreenTwo';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DetailsPage from './src/DetailsPage';
import FlatListExample from './src/FlatListExample';
import SignUpScreen from './src/SignUpScreen';
import SwitchComponent from './src/SwitchComponent';
import pickerComponent from './src/PickerComponent';
import PickerComponent from './src/PickerComponent';
import CheckBoxComponent from './src/CheckBoxComponent';
import DatePiker from './src/DatePiker';
import PortraitAndLandscape from './src/PortraitAndLandscape';
import CustomCheckBoxTwo from './src/CustomCheckBoxTwo';
import AsyncStrorege from './src/AsyncStrorege';
import Dummy from './src/Dummy';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();

const LoginStack = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignUpScreen} />
    </Stack.Navigator>

);
};

const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreenTwo} />
      <Stack.Screen name="Details" component={DetailsPage} />
    </Stack.Navigator>
  );
};

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator initialRouteName='LoginStack' screenOptions={({route}) => ({
      tabBarIcon: ({}) => {
        let imageUrl;
        if(route.name === "LoginStack"){
          imageUrl = "https://i.pinimg.com/originals/97/21/05/972105c5a775f38cf33d3924aea053f1.jpg"
        }else{
          imageUrl = "https://w7.pngwing.com/pngs/848/762/png-transparent-computer-icons-home-house-home-angle-building-rectangle-thumbnail.png"
        }
        return(
          <Image style={{width:36, height:36}} source={{uri: imageUrl }}/>
        )
      }
    })}>
      <Tab.Screen name="LoginStack" component={LoginStack} />
      <Tab.Screen name="HomeStack" component={HomeStack} />
      <Tab.Screen name="AsyncLogin" component={AsyncStrorege} />
    </Tab.Navigator>
  );
}

function App(): React.JSX.Element {

  return (
    <NavigationContainer>
      {/* <LoginStack/> */}
      <MyTabs/>
      {/* <Stack.Navigator initialRouteName="Signup">  */}
         {/* <Stack.Screen name="Login" component={LoginScreen} /> */}
        {/* <Stack.Screen name="Signup" component={SignUpScreen} /> */}
        {/* <Stack.Screen name="Home" component={HomeScreenTwo} /> */}
        {/* <Stack.Screen name="Details" component={DetailsPage} />  
        <Stack.Screen name="Switch" component={SwitchComponent} />
 <Stack.Screen name="picker" component={PickerComponent}/>
 <Stack.Screen name="Checkbox" component={CheckBoxComponent}/>
 <Stack.Screen name="DatePiker" component={DatePiker}/>
 <Stack.Screen name='Landscape' component={PortraitAndLandscape}/>
  <Stack.Screen name='CustomTwo' component={CustomCheckBoxTwo}/>  */}
 {/* <Stack.Screen name="Async" component={AsyncStrorege}/> */}
      {/* </Stack.Navigator> */}
    </NavigationContainer>
  );
}

export default App;
