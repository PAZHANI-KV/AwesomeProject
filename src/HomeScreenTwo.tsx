import React from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {ScreenOrientationTypes} from 'react-native-screens';

type listData = {
  imageUrl: String;
  topic: string;
  description: string;
};

const HomeScreenTwo = (props: any) => {
  const listData = [
    {
      imageUrl: "https://picsum.photos/200",
      topic: 'One',
      description: 'How are you one?',
    },
    {
      imageUrl: "https://picsum.photos/200",
      topic: 'Two',
      description: 'How are you two?',
    },
    {
      imageUrl: "https://picsum.photos/200",
      topic: 'Three',
      description: 'How are you Three?',
    },
    {
      imageUrl: "https://picsum.photos/200",
      topic: 'Four',
      description: 'How are you Four?',
    },
    {
      imageUrl: "https://picsum.photos/200",
      topic: 'Five',
      description: 'How are you Five?',
    },
    {
      imageUrl: "https://picsum.photos/200",
      topic: 'Six',
      description: 'How are you six?',
    },
    {
      imageUrl: "https://picsum.photos/200",
      topic: 'Seven',
      description: 'How are you seven?',
    },
    {
      imageUrl: "https://picsum.photos/200",
      topic: 'Eight',
      description: 'How are you eight?',
    },
    {
      imageUrl: "https://picsum.photos/200",
      topic: 'Nine',
      description: 'How are you nine?',
    },
    {
      imageUrl: "https://picsum.photos/200",
      topic: 'Ten',
      description: 'How are you ten?',
    },
    {
      imageUrl: "https://picsum.photos/200",
      topic: 'Eleven',
      description: 'How are you eleven?',
    },
    {
      imageUrl: "https://picsum.photos/200",
      topic: 'Twelve',
      description: 'How are you twelve?',
    },
  ];

  const renderItem = ({item}: any) => {
    return (
      <TouchableOpacity
        onPress={() => {
          props.navigation.push('Details');
        }}
        style={styles.contentView}>
          <View>
          <Image style={{width: '100%'}} source={{uri: item.imageUrl}} />
          </View>
        <View>
          <Text>{item.topic}</Text>
          <Text>{item.description}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  // const renderItem = ({ item }) => (
  //     <View style={styles.itemContainer}>
  //       <Image source={{ uri: item.imageUrl }} style={styles.image} />
  //       <View style={styles.textContainer}>
  //         <Text style={styles.title}>{item.title}</Text>
  //         <Text style={styles.description}>{item.description}</Text>
  //       </View>
  //     </View>
  //   );

  return (
    <View style={styles.mainView}>
      <FlatList
        data={listData}
        renderItem={({item}) => renderItem({item})}
        keyExtractor={item => item.id}
        // horizontal={true}
        // style={{width:'100%'}}
        // keyExtractor = {item => item.id.toString()}
        // ListHeaderComponent={}
        // ListFooterComponent={}
        // ListEmptyComponent={}
      />
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

export default HomeScreenTwo;
