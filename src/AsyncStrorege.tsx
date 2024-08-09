import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import {
  Alert,
  Dimensions,
  Image,
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableHighlightBase,
  TouchableOpacity,
  View,
} from 'react-native';
import {get} from 'react-native/Libraries/TurboModule/TurboModuleRegistry';

// Async Storage is usede for storing data locally. IT will always be stored in an object form having key and value pair.
// Async storage is a part of React native library. No need to install any extra library packages to use async storage.

type LoginProps = {
  navigation: any;
};

const AsyncStrorege = (props: LoginProps) => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const handlePress = async () => {
    const data = {
      email: userName,
      password: password,
    };
    const res = await fetch('https://reqres.in/api/login', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });

    const output = await res.json();

    if (output.token) {
      //Store token in async storage where we are keeping "USER_TOKEN" as key name and the value is "Outout.token" and is shown below.
      await AsyncStorage.setItem('USER_TOKEN', output.token);

      //Navigate to the Home Screen 
      props.navigation.navigate('Home');
    } else {
      Alert.alert('Error', output.error);
    }

    console.log(output);
  };

useEffect(() => {
checkUserLoggedIn();
}, [])

const checkUserLoggedIn = async () => {
const result = await AsyncStorage.getItem("USER_TOKEN");

// const userData = await AsyncStorage.getItem("firstName");
// const userData = await AsyncStorage.multiGet(['FirstName', 'LastName']);,
// console.log(userData);

console.log("TOKEN_DATA", result);

if(result && result!==null){
    props.navigation.navigate('Home');
}
}

  const handleSignUp = () => {
    props.navigation.navigate('Signup');
  };

  return (
    <View style={styles.mainView}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.logoView}>
          <Image source={require('../assets/image.png')} style={styles.logo} />
        </View>
        <View style={styles.secondView}>
          <Text style={styles.topText}>Sign In</Text>
        </View>
        <TextInput
          style={styles.inputHolder}
          placeholder="Username"
          // placeholderTextColor={}
          value={userName}
          onChangeText={setUserName}
          keyboardType="default"
          // secureTextEntry = {true}
        />
        <TextInput
          style={styles.inputHolder}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          keyboardType="default"
        />
        <View>
          <Text>Does not have an Account? , </Text>
          <Text onPress={handleSignUp}>Sign Up!</Text>
        </View>
        <Pressable style={styles.button} onPress={handlePress}>
          <Text style={styles.submitText}>Submit</Text>
        </Pressable>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: '#ADD8E6',
  },
  scrollViewContent: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  logoView: {
    marginTop: 100,
    marginBottom: 20,
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },
  secondView: {
    marginTop: 20,
    width: '70%',
    height: 50,
    backgroundColor: '#FFB6C1',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topText: {
    fontSize: 30,
    fontWeight: '900',
    color: 'black',
  },
  inputHolder: {
    backgroundColor: 'white',
    width: '90%',
    marginTop: 20,
    borderRadius: 10,
    padding: 10,
  },
  button: {
    backgroundColor: '#A3876A',
    marginTop: 40,
    height: 50,
    width: '70%',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  submitText: {
    color: '#fff',
    fontSize: 20,
  },
});

export default AsyncStrorege;
