import React, {useState} from 'react';
import {StyleSheet, Switch, Text, TextInput, View} from 'react-native';
import {isEnabled} from 'react-native/Libraries/Performance/Systrace';

type example = {
  route: any;
  navigation?: any;
};

const SwitchComponent = (props: example) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [dob, setDob] = useState('');
  const [pan, setPan] = useState('');
  const [restricted, setRestricted] = useState(false);
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        value={name}
        onChangeText={setName}
        placeholder="Name"
      />
      <TextInput
        style={styles.textInput}
        value={age}
        onChangeText={setAge}
        placeholder="Age"
      />
      {restricted ? null : (
        <TextInput
          style={styles.textInput}
          value={dob}
          onChangeText={setDob}
          placeholder="DOB"
        />
      )}
      {restricted ? null : (
        <TextInput
          style={styles.textInput}
          value={pan}
          onChangeText={setPan}
          placeholder="PAN"
        />
      )}
      <View style={styles.switchView}>
        <Text>Restricted Info</Text>
        <Switch
          value={restricted}
          onValueChange={setRestricted}
          trackColor={{false: 'red', true: 'blue'}}
          thumbColor={restricted ? '#000000' : '#ffffff'}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  textInput: {
    marginTop: 20,
    borderWidth: 1,
    width: 200,
    height: 50,
  },
  switchView: {
    flexDirection: 'row',
    width: 250,
    marginTop: 20,
    justifyContent: 'space-between',
  },
});
export default SwitchComponent;
