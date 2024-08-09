import AsyncStorage from '@react-native-async-storage/async-storage'
import React from 'react'
import { Text, View } from 'react-native'

const asyncStorageMultiSet = () => {
const asyncFunction = async() => {
    await AsyncStorage.multiSet([['FirstName', 'John'], ['LastName', 'Smith']])

}

  return (
    <View>
        <Text>Hi</Text>
    </View>
  )
}

export default asyncStorageMultiSet