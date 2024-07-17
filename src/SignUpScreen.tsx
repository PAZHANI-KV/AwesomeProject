import React, {useState} from 'react';
import {
  Alert,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

type SignupProps = {
  navigation?: any,
}
 
const SignUpScreen = (props: SignupProps) => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
 
//   const handlePress = () => {
//     if (userName.length === 0 || password.length === 0) {
//       Alert.alert('Error', 'Please enter valid credentials');
//     } else if (userName.length < 6 && password.length < 8) {
//       Alert.alert('Error', 'Invalid Username or Password');
//     } else if (userName.length < 6) {
//       Alert.alert('Error', 'Invalid Username');
//     } else if (password.length < 8) {
//       Alert.alert('Error', 'Invalid Password');
//     } else {
// props.navigation.push("Home")    }
//   };

  const handleEntry = () => {
       Alert.alert("Successfully Registered!");
      props.navigation.push("Home");
  }
 
  return (
    <View style={styles.mainView}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.logoView}>
          <Image
            source={require('../assets/image.png')}
            style={styles.logo}
          />
        </View>
        <View style={styles.secondView}>
          <Text style={styles.topText}>Sign Up</Text>
        </View>
        <TextInput
          style={styles.inputHolder}
          placeholder="Enter Username"
          value={userName}
          onChangeText={setUserName}
        />
        <TextInput
          style={styles.inputHolder}
          placeholder="Enter Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        {/* <TextInput
          style={styles.inputHolder}
          placeholder="Confirm Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        /> */}
        <Pressable style={styles.button} >
          <Text style={styles.submitText} onPress={handleEntry}>Submit</Text>
        </Pressable>
      </ScrollView>
    </View>
  );
}
 
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
 
export default SignUpScreen;