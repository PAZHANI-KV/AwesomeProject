import React, {useSyncExternalStore} from 'react';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';

const FlatListExample = () => {
  const listData = [
    {
      imageUrl: 'https://picsum.photos/200',
      topic: 'one',
      description: 'How are you one?',
    },
    {
      imageUrl: 'https://picsum.photos/200',
      topic: 'Two',
      description: 'How are you two?',
    },
    {
      imageUrl: 'https://picsum.photos/200',
      topic: 'Three',
      description: 'How are you Three?',
    },
    {
      imageUrl: 'https://picsum.photos/200',
      topic: 'Four',
      description: 'How are you Four?',
    },
    {
      imageUrl: 'https://picsum.photos/200',
      topic: 'Five',
      description: 'How are you Five?',
    },
    {
      imageUrl: 'https://picsum.photos/200',
      topic: 'Six',
      description: 'How are you six?',
    },
    {
      imageUrl: 'https://picsum.photos/200',
      topic: 'Seven',
      description: 'How are you seven?',
    },
    {
      imageUrl: 'https://picsum.photos/200',
      topic: 'Eight',
      description: 'How are you eight?',
    },
    {
      imageUrl: 'https://picsum.photos/200',
      topic: 'Nine',
      description: 'How are you nine?',
    },
    {
      imageUrl: 'https://picsum.photos/200',
      topic: 'Ten',
      description: 'How are you ten?',
    },
    {
      imageUrl: 'https://picsum.photos/200',
      topic: 'Eleven',
      description: 'How are you eleven?',
    },
    {
      imageUrl: 'https://picsum.photos/200',
      topic: 'Twelve',
      description: 'How are you twelve?',
    },
  ];

  const renderItem = ({item}: any) => {
    return (
      <View style={styles.contentView}>
        <View style={{width: '18%', height: 55, marginLeft: 10}}>
          <Image
            source={{uri: item.imageUrl}}
            style={{width: 60, height: 60, borderRadius: 30}}
          />
        </View>
        <View
          style={{
            width: '82%',
            height: 70,
            marginLeft: 20,
            backgroundColor: 'pink',
            justifyContent: 'center',
            alignItems: 'flex-start',
          }}>
          <Text>{item.topic}</Text>
          <Text>{item.description}</Text>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.mainView}>
      <FlatList data={listData} renderItem={renderItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: '#ADD8E6',
  },
  contentView: {
    width: '100%',
    height: 65,
    marginVertical: 7,

    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});

export default FlatListExample;
