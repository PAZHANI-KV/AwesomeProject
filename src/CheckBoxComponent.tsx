import CheckBox from '@react-native-community/checkbox';
import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

const CheckBoxComponent = () => {
  const [termsAndConditions, setTermsAndConditions] = useState(false);
  const [policy, setPolicy] = useState(false);
  const [both, setBoth] = useState(false);

  return (
    <View>
      <View style={styles.checkBoxView}>
        <Text>Accept Terms and Conditions</Text>

        <CheckBox
          value={termsAndConditions}
          onValueChange={setTermsAndConditions}
        />
      </View>
      <View style={styles.checkBoxView}>
        <Text>Accept Privacy Policy</Text>

        <CheckBox value={policy} onValueChange={setPolicy} />
      </View>
      <View style={styles.checkBoxView}>
        <Text>Accept Both</Text>

        <CheckBox
        testID='acceptCheckBox'
          value={termsAndConditions && policy ? true : false}
          onValueChange={() => {
            setTermsAndConditions(!both);
            setPolicy(!both);
            setBoth(!both);
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  checkBoxView: {
    flexDirection: 'row',
    width: 250,
    marginTop: 20,
    justifyContent: 'space-between',
  },
});

export default CheckBoxComponent;
