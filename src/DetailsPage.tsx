import React, {useEffect, useState} from 'react';
import {
  Button,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {listData} from './HomeScreenTwo';

type DetailProps = {
  navigation?: any;
  // listItem?: listData;
  route: any;
};

const DetailsPage = (props: DetailProps) => {
  const [list, setList] = useState(props.route.params.item);

  //When we need to pass any data from one page to another page, then we need to use the route to pass the data. Here in the above line, we are getting data(image, title, description) from home component to this details component and hence using the route.

  return (
    <View
      style={{
        width: '100%',
        height: 80,
        marginVertical: 5,
        marginHorizontal: 10,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'center',
      }}>
      {/* <View style={{width: '20%', height: 70, marginLeft: 20}}>
          <Image
            style={{width: 70, height: 70, borderRadius: 35}}
            source={{uri: props.listItem.imageUrl}}
          />
        </View> */}
      <View
        style={{
          width: 70,
          height: 70,
          justifyContent: 'center',
          alignItems: 'flex-start',
        }}>
        <Text style={{fontSize: 21, fontWeight: 600, color: 'orange'}}>
          {list.topic}
        </Text>
        <Text style={{fontSize: 21, fontWeight: 600, color: '#ADD886'}}>
          {list.description}
        </Text>
      </View>

      <Button
        title="Done"
        onPress={() => props.navigation.navigate('Home')}></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: '#ADD8E6',
  },
  contentView: {
    // flex: 1,
    // flexDirection: 'row',
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#0000FF',
    borderRadius: 12,
    // alignItems: 'center',
    backgroundColor: '#FF7F7F',
  },
  imageView: {
    width: 100,
    height: 100,
    marginRight: 10,
    backgroundColor: 'blue',
    borderRadius: 50,
  },
});
export default DetailsPage;
