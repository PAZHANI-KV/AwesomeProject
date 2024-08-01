import React from 'react'
import { Dimensions, View } from 'react-native'
import CustomCheckBox from './CustomCheckBox'

const CustomCheckBoxTwo = () => {

    const res = [
        'Accept Terms and Conditions',
        'Accept Privacy Policy',
        'Accept Both',
      ];

  return (
<>
<View
        style={{
          width: Dimensions.get('screen').width - 100,
          height: 50,
          justifyContent: 'space-between',
          marginVertical: 50,
          marginLeft: 20,
        }}>
        {res.map(value => (
          <CustomCheckBox text={value} trueColor='green' falseColor='red'/>
        ))}
      </View>
</>  )
}

export default CustomCheckBoxTwo