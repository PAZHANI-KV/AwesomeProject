import React from 'react'
import { Button, Pressable, StyleSheet, Text, View } from 'react-native'

const DetailsPage = ({navigation}: any) => {
  return (
<View>
    <Text>Hi</Text>
  <Button title='Done' onPress={() => {navigation.push("Login")}}></Button>
</View>  )

// onPress={() => {navigation.popToTop()}
// onPress={() => {navigation.push("Login")}
// onPress={() => {navigation.navigate("Login")}
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#A3876A',
        marginTop: 40,
        height: 50,
        width: '70%',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
      },
      DoneText: {
        color: '#fff',
        fontSize: 20,
      },
});
export default DetailsPage