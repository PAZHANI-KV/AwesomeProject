import React from 'react'
import { Button, Text, TouchableOpacity, View } from 'react-native'


type detailProps ={
    navigation : any,
    
}

const DetailsPageTwo = (props: detailProps) => {
  return (
    <View>
       <Text>Hello</Text>
    <TouchableOpacity  onPress={() => props.navigation.navigate('Loginp')}>
    <Text > Exit </Text>
</TouchableOpacity>
    </View>
   

  )
}

export default DetailsPageTwo