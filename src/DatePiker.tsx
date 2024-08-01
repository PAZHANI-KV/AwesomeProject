import React, { useState } from 'react';
import { Alert, Button, Text, View } from 'react-native';
import DatePicker from 'react-native-date-picker';

const DatePiker = () => {

  const[dob, setDob] = useState(new Date());
  const [changeState, setChangeState] = useState(false);



  return (
<View>
<View style={{justifyContent:"center", alignItems:"center"}}>
  <Button title='Set Date' onPress={() => setChangeState(true)}/>
<DatePicker
        modal
        open={changeState}
        date={dob}
        // mode='date'
        // mode='time'
        mode='datetime'
        onConfirm={(date: any) => {
          setChangeState(false)
          setDob(date)
          Alert.alert("Date set successfully!")
        }}
        onCancel={() => {
          setChangeState(false)
        }}
        buttonColor="red"
        is24hourSource='device'
        theme='dark'
      />
      <View style={{justifyContent:"center", alignItems:"center"}}>
      <Text style={{margin: 5, fontSize: 20}}>{dob.getDate()}</Text>
      </View>
      </View>
      </View>  )
}

export default DatePiker