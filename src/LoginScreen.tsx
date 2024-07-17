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
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry';

type LoginProps = {
  navigation: any
}
 
const LoginScreen = (props: LoginProps) => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
 const [modalVisible, setModalVisible] = useState(true);

  const handlePress = async () => {
    if (userName.length === 0 || password.length === 0) {
      Alert.alert('Error', 'Please enter valid credentials');
    } else if (userName.length < 6 && password.length < 8) {
      Alert.alert('Error', 'Invalid Username or Password');
    } else if (userName.length < 6) {
      Alert.alert('Error', 'Invalid Username');
    } else if (password.length < 8) {
      Alert.alert('Error', 'Invalid Password');
    } else {
props.navigation.push("Home")    }

// const onLoginPress = async () => {
  // const data = {
  //     "email": userName,
  //     "password": password
  // }

  // console.log(data);
  // console.log(JSON.stringify(data))

  // try {
  //     const res = await fetch('https://reqres.in/api/login', {
  //         "method": 'POST',
  //         "body":  JSON.stringify(data),
  //         headers: {
  //             'Accept': 'application/json',
  //             'Content-Type': 'application/json'
  //         },
  //        });
         

  //        const loginResponse = await res.json();
         
  //        if(loginResponse.token) {
  //         props.navigation.navigate("Home");
  //        } else {
  //         Alert.alert("Login Error", loginResponse.error)
  //        }
  // } catch {
  //     Handle Error
  // }
  };

  const handleSignUp = () => {
props.navigation.navigate("Signup")
  }
 
const handleOk = () => {
  setModalVisible(false)
}


//   useEffect(() => {
// exampleFunction();
//   }, []);

//   const exampleFunction = async () => {
// try{
// const res = await fetch("https://reqres.in/api/users/2", {method:"GET"});
// const response = await res.json();
// console.log(response);
// }catch{

// }finally{

// }
//   };



// const width = Dimensions.get('screen').width;
// const height = Dimensions.get('screen').height;


  return (
    <View style={styles.mainView}>

      <Modal transparent={true} 
      visible={modalVisible}>
        <View style ={{width: "100%", height: "100%", justifyContent:"center", alignItems: "center" }}>
        <View style = {{width: "60%", height: "39%", backgroundColor: "gray", justifyContent:"center", alignItems: "center", borderRadius: 15, marginBottom: -60}}>
        <Text style={{fontSize: 30, color: "black", fontWeight: "bold"}}>Successfully</Text>
        <Text style={{fontSize: 30, color: "black", fontWeight: "bold"}}>Logged In!</Text>
       <View>
       <TouchableOpacity style={{width: 130, height: 45, borderRadius: 30, marginTop: 30, backgroundColor: "black", justifyContent:"center", alignItems: "center"}} onPress={() => {handleOk()}}>
        <Text style ={{color: "white", fontSize: 30, fontWeight:"bold"}}>OK</Text>
       </TouchableOpacity>
       </View>
        </View>
          
        </View>
      </Modal>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.logoView}>
          <Image
            source={require('../assets/image.png')}
            style={styles.logo}
          />
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
           keyboardType='default'
// secureTextEntry = {true}
        />
        <TextInput
          style={styles.inputHolder}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
keyboardType='default'
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
 
export default LoginScreen;