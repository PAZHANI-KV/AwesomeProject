import React, {useEffect} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {Dimensions} from 'react-native';
import CustomCheckBox from './CustomCheckBox';

const PortraitAndLandscape = () => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const windowScale = Dimensions.get('window').scale;
  const windowFontScale = Dimensions.get('window').fontScale;

  console.log(windowWidth);
  console.log(windowHeight);
  console.log(windowScale);
  console.log(windowFontScale);

  const screenWidth = Dimensions.get('screen').width;
  const screenHeight = Dimensions.get('screen').height;
  const screenScale = Dimensions.get('screen').scale;
  const screenFontScale = Dimensions.get('screen').fontScale;

  console.log(screenWidth);
  console.log(screenHeight);
  console.log(screenScale);
  console.log(screenFontScale);

  const screenSize = Dimensions.get('screen');
  console.log(screenSize);

  useEffect(() => {
    Dimensions.addEventListener('change', e => {
      const {width, height} = e.screen;
      console.log('changed', width, height);
    });
  }, []);

 

  return (
    <View>
      <Text> Hello there!</Text>

      <View style={styles.viewStyling}>
        <Text style={{color: 'white'}}>
          {Platform.OS === 'android' ? 'Android Device' : 'Other Device'}
        </Text>
        {/* <Text>{"OS Version" + Platform.Version}</Text>
  <Text>{"OS Version" + Platform.constants}</Text> */}
      </View>
    
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyling: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
    ...Platform.select({
      android: {
        backgroundColor: 'blue',
      },
      ios: {
        backgroundColor: 'pink',
      },
      default: {
        backgroundColor: 'yellow',
      },
    }),
  },
});

export default PortraitAndLandscape;
