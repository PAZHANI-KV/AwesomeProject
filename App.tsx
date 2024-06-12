/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

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
} from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

function App(): React.JSX.Element {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <View style={styles.mainView}>
      <View style={styles.secondView}>
        <View style={styles.thirdView}>
          <Text style={styles.tick}>✓</Text>
        </View>
        <Text style={styles.firstText}>Success</Text>
        <Text style={styles.secondText}>
          Your message was sent successfully,{'\n'} please check your mail to
          confirm
        </Text>
        <Pressable style={styles.buttonStyling}>
          <Text style={styles.buttonText}>Continue</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainView: {
    width: '100%',
    height: '100%',
    backgroundColor: '#FFE5B4',
    justifyContent: 'center',
    alignItems: 'center',
  },
  secondView: {
    width: '90%',
    height: '98%',
    borderRadius: 30,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  thirdView: {
    width: 186,
    height: 186,
    backgroundColor: '#FFE5B4',
    borderRadius: 93,
    marginTop: 77,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tick: {
    color: '#FF4500',
    fontSize: 95,
  },
  firstText: {
    marginTop: 51,
    fontSize: 40,
    fontWeight: 'bold',
    color: 'black',
  },
  secondText: {
    marginTop: 17,
    marginLeft: 30,
    marginRight: 30,
    color: 'gray',
    fontSize: 17,
    fontWeight: 'bold',
  },
  buttonStyling: {
    backgroundColor: '#FF4500',
    width: '83%',
    padding: 15,
    borderRadius: 10,
    marginTop: 300,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default App;
