import React from 'react'
import { Button, Text, TouchableOpacity } from 'react-native'


type detailProps ={
    navigation : any,
    
}

const DetailsPageTwo = () => {
  return (
    <Text>Hello</Text>
    <TouchableOpacity style={detailScreenStyles.buttonStyles} onPress={() => props.navigation.navigate('Loginp')}>
    <Text style={detailScreenStyles. textView}> Exit </Text>
</TouchableOpacity>

  )
}

export default DetailsPageTwo