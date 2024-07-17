import React from 'react';
import {
  FlatList,
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {ScreenOrientationTypes} from 'react-native-screens';

type homeProps = {
  navigation: any;
};

export type listData = {
  imageUrl: String;
  topic: string;
  description: string;
};

const HomeScreenTwo = (props: homeProps) => {

  const onItemClick = (item: listData) => {
    return(
      props.navigation.navigate('Details', item)
    
    )
      
  }

  const listData = [
    {
      imageUrl: 'https://media.istockphoto.com/id/1095885438/photo/the-bandra-worli-sea-link.jpg?s=1024x1024&w=is&k=20&c=VoTfOaohVt8OyE-_xSELqc1UKZ7d3Fwim3JAMYPKLV8=',
      topic: 'One',
      description: 'How are you one?',
    },
    {
      imageUrl: 'https://media.istockphoto.com/id/1095885438/photo/the-bandra-worli-sea-link.jpg?s=1024x1024&w=is&k=20&c=VoTfOaohVt8OyE-_xSELqc1UKZ7d3Fwim3JAMYPKLV8=',
      topic: 'Two',
      description: 'How are you two?',
    },
    {
      imageUrl: 'https://media.istockphoto.com/id/1095885438/photo/the-bandra-worli-sea-link.jpg?s=1024x1024&w=is&k=20&c=VoTfOaohVt8OyE-_xSELqc1UKZ7d3Fwim3JAMYPKLV8=',
      topic: 'Three',
      description: 'How are you Three?',
    },
    {
      imageUrl: 'https://media.istockphoto.com/id/1095885438/photo/the-bandra-worli-sea-link.jpg?s=1024x1024&w=is&k=20&c=VoTfOaohVt8OyE-_xSELqc1UKZ7d3Fwim3JAMYPKLV8=',
      topic: 'Four',
      description: 'How are you Four?',
    },
    {
      imageUrl: 'https://media.istockphoto.com/id/1095885438/photo/the-bandra-worli-sea-link.jpg?s=1024x1024&w=is&k=20&c=VoTfOaohVt8OyE-_xSELqc1UKZ7d3Fwim3JAMYPKLV8=',
      topic: 'Five',
      description: 'How are you Five?',
    },
    {
      imageUrl: 'https://media.istockphoto.com/id/1095885438/photo/the-bandra-worli-sea-link.jpg?s=1024x1024&w=is&k=20&c=VoTfOaohVt8OyE-_xSELqc1UKZ7d3Fwim3JAMYPKLV8=',
      topic: 'Six',
      description: 'How are you six?',
    },
    {
      imageUrl: 'https://media.istockphoto.com/id/1095885438/photo/the-bandra-worli-sea-link.jpg?s=1024x1024&w=is&k=20&c=VoTfOaohVt8OyE-_xSELqc1UKZ7d3Fwim3JAMYPKLV8=',
      topic: 'Seven',
      description: 'How are you seven?',
    },
    {
      imageUrl: 'https://media.istockphoto.com/id/1095885438/photo/the-bandra-worli-sea-link.jpg?s=1024x1024&w=is&k=20&c=VoTfOaohVt8OyE-_xSELqc1UKZ7d3Fwim3JAMYPKLV8=',
      topic: 'Eight',
      description: 'How are you eight?',
    },
    {
      imageUrl: 'https://media.istockphoto.com/id/1095885438/photo/the-bandra-worli-sea-link.jpg?s=1024x1024&w=is&k=20&c=VoTfOaohVt8OyE-_xSELqc1UKZ7d3Fwim3JAMYPKLV8=',
      topic: 'Nine',
      description: 'How are you nine?',
    },
    {
      imageUrl: 'https://media.istockphoto.com/id/1095885438/photo/the-bandra-worli-sea-link.jpg?s=1024x1024&w=is&k=20&c=VoTfOaohVt8OyE-_xSELqc1UKZ7d3Fwim3JAMYPKLV8=',
      topic: 'Ten',
      description: 'How are you ten?',
    },
    {
      imageUrl: 'https://media.istockphoto.com/id/1095885438/photo/the-bandra-worli-sea-link.jpg?s=1024x1024&w=is&k=20&c=VoTfOaohVt8OyE-_xSELqc1UKZ7d3Fwim3JAMYPKLV8=',
      topic: 'Eleven',
      description: 'How are you eleven?',
    },
    {
      imageUrl: 'https://media.istockphoto.com/id/1095885438/photo/the-bandra-worli-sea-link.jpg?s=1024x1024&w=is&k=20&c=VoTfOaohVt8OyE-_xSELqc1UKZ7d3Fwim3JAMYPKLV8=',
      topic: 'Twelve',
      description: 'How are you twelve?',
    },
  ];

  const renderItem = (item : listData ) => {
    return (

      <TouchableOpacity
        onPress={() => onItemClick(item)}
        style={styles.contentView}>
        <View>
          <Image  source ={{uri: item.imageUrl}} style={{width: '100%'}} />
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
        renderItem={({item}) => renderItem(item)}
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

export default HomeScreenTwo
