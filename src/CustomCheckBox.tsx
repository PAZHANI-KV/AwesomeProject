import CheckBox from '@react-native-community/checkbox';
import React, {useState} from 'react';
import {Dimensions, Text, View} from 'react-native';

// We are passing this component in CustomCheckBoxTwo.tsx component and display it there with the help of passing the data as props from here to There. 

type detailProps = {
  text: string;
  trueColor: string,
  falseColor: string,
};

const CustomCheckBox = (props: detailProps) => {
  const [value, setValue] = useState(false);

  return (
    <View
      style={{
        width: Dimensions.get("screen").width -100,
        height: 50,
        flexDirection: "row",
        justifyContent: 'space-between',
        marginVertical: 50,
      }}>
      <Text>{props.text}</Text>
      <CheckBox 
      tintColors={{
        true: props.trueColor,
        false: props.falseColor
      }}
      value={value} 
      onValueChange={setValue} />
    </View>
  );
};
export default CustomCheckBox;
