import React from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const MedugoApiPost = () => {


    const handleThis = async () => {
return(
   
    const data = {"appPersonId": "537P1719255375593",
         "bloodGroup": "B+",
          "createdDate": "2024-06-25T03:40:07.066Z",
           "deviceId": "f21371b2b7a5b809",
            "dob": "05/09/1994",
             "emailId": "john.smith.test@gmail.com",
              "emergencyContactFirstName": null,
               "emergencyContactLastName": null,
                "emergencyContactPhoneNumber": null,
                 "emergencyContactRelationship": null,
                  "firstName": "John",
                   "gender": "Male",
                    "height": "5.5",
                     "hlogDeviceRegistrationId": 537,
                      "hlogPersonId": 944, 
                      "isDeleted": true,
                       "lastName": "Smith",
                        "modifiedDate": "2024-06-25T03:40:07.066Z",
                         "personPictureBase64String": null,
                          "personType": "PR", 
                          "pictureFileName": null,
                           "relationship": "SL", 
                           "termsAndCondition": true,
                            "weight": "70"}
      
        console.log(data);
        console.log(JSON.stringify(data))
      
        try {
            const res = await fetch('https://reqres.in/api/login', {
                    "method": 'POST',
                    "body":  JSON.stringify(data),
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'x-sessiontoken': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJHVUlEIjoiQTlmT3BhMjZlSFJhZjJsR3RuL2lLMDhMOW9PaWRmaW9ONFBHQ1F0dSt6WWI4aG5YbVV0OGxvSWFmcWY4UFpLNU80RVp1Wjd3aE9BR0x6RjExNkhlc2c9PSIsIk1vYmlsZU5vIjoiNzA4MTI1ODgwOSIsIkNvdW50cnlDb2RlIjoiOTEiLCJEZXZpY2VJZCI6ImYyMTM3MWIyYjdhNWI4MDkiLCJDcmVhdGVkT24iOiIwNi8yNC8yMDI0IDE4OjU0OjMzIiwibmJmIjoxNzE5MjU1MjczLCJleHAiOjE3MTkyNTg4NzMsImlhdCI6MTcxOTI1NTI3MywiaXNzIjoibWVkdWdvLmNvbSIsImF1ZCI6IiouKiJ9.Gnt8P8074HgRJcqfAmgdhvEmFKaKlC5XfY54FZ3HBTU',
                    },
                   }

)
    }

  return (
    <View>
      <Pressable style={styles.button} onPress={handleThis}>
        <Text style={styles.submitText}>Submit</Text>
      </Pressable>
    </View>
  );
};

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
  submitText: {
    color: '#fff',
    fontSize: 20,
  },
});
export default MedugoApiPost;
