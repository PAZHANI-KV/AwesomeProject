import React, { useRef, useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import { Button, View } from 'react-native';


const PickerComponent = () => {
    const [lang, setLang] = useState();
    const picker = useRef();

  return (
    <View>
    <Picker
    ref = {picker}
  selectedValue={lang}
  onValueChange={(itemValue, itemIndex) =>
    setLang(itemValue)

  }
  style={{width: 250, height: 50, marginTop: 20, marginLeft: 95}}>
  <Picker.Item label="Java" value="java" />
  <Picker.Item label="JavaScript" value="js" />
</Picker>

<View style={{marginTop:20}}>

    <Button title='Open Dropdown' onPress={() => {}}/>

</View>

</View>
  )
}

export default PickerComponent;