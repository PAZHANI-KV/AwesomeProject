// import React, { useState } from 'react';
// import {FlatList, Image, ScrollView, StyleSheet, Text, View} from 'react-native'



// type homeProps = {

// }



// const HomeScreen = (props: homeProps) => {

//     const listData = [
//         {
//             title: "Monday",
//             description: "address one sample",
//             imageUrl: "https://png.pngtree.com/element_our/20190528/ourmid/pngtree-small-url-icon-opened-on-the-computer-image_1132275.jpg",
//         },
//         {
//             title: "Tuesday",
//             description:  "address one sample",
//             imageUrl: "https://png.pngtree.com/element_our/20190528/ourmid/pngtree-small-url-icon-opened-on-the-computer-image_1132275.jpg",
//         },
//         {
//             title: "Wednesday",
//             description:  "address one sample",
//             imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyp-pLW6OYgbcdMoP-jiLSYseLcpI4f7NWjg&s",
//         },
//         {
//             title: "Thursday",
//             description:  "address one sample",
//             imageUrl: "https://png.pngtree.com/element_our/20190528/ourmid/pngtree-small-url-icon-opened-on-the-computer-image_1132275.jpg",
//         },
//         {
//             title: "Friday",
//             description:  "address one sample",
//             imageUrl: "https://png.pngtree.com/element_our/20190528/ourmid/pngtree-small-url-icon-opened-on-the-computer-image_1132275.jpg",
//         },
//         {
//             title: "Monday",
//             description: "address one sample",
//             imageUrl: "https://png.pngtree.com/element_our/20190528/ourmid/pngtree-small-url-icon-opened-on-the-computer-image_1132275.jpg",
//         },
//         {
//             title: "Tuesday",
//             description:  "address one sample",
//             imageUrl: "https://png.pngtree.com/element_our/20190528/ourmid/pngtree-small-url-icon-opened-on-the-computer-image_1132275.jpg",
//         },
//         {
//             title: "Wednesday",
//             description:  "address one sample",
//             imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyp-pLW6OYgbcdMoP-jiLSYseLcpI4f7NWjg&s",
//         },
//         {
//             title: "Thursday",
//             description:  "address one sample",
//             imageUrl: "https://png.pngtree.com/element_our/20190528/ourmid/pngtree-small-url-icon-opened-on-the-computer-image_1132275.jpg",
//         },
//         {
//             title: "Friday",
//             description:  "address one sample",
//             imageUrl: "https://png.pngtree.com/element_our/20190528/ourmid/pngtree-small-url-icon-opened-on-the-computer-image_1132275.jpg",
//         }
//     ]


//     const renderItem = ({item}: any) => {
//         return(<View style={{width: '100%', height: 80, marginVertical: 5, marginHorizontal: 10, borderRadius: 10, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', backgroundColor: "#808080"}}>
//             <View style={{width: '20%', height: 70, marginLeft: 20}}>
//                 <Image 
//                 source={{uri: item.imageUrl}}
//                 style={{width: 70, height: 70, borderRadius: 35}}
//                 />
//             </View>

//             <View style={{width: '70%', height: 70, justifyContent: 'center', alignItems: 'flex-start'}}>
//                 <Text style={{fontSize: 21, fontWeight: '600', color: "#ADD8E6"}}>
//                     {item.title}
//                 </Text>
//                 <Text style={{fontSize: 16, fontWeight: '300', color: 'black'}}>
//                     {item.description}
//                 </Text>

//             </View>

//         </View>)

//     }

//     return (
//     <View style={styles.container}>
//         <FlatList 
//             data={listData}
//             renderItem={({item}) => renderItem({item})}
//             horizontal={false}
//             style={{width: '100%'}}
//             ListHeaderComponent={() => <Text style={{fontSize: 24}}>Days List</Text>}
//             keyExtractor={({item}) => {item.title}}
//         />
//     </View>
//     )
        
// };

// const styles = StyleSheet.create({
//     container: {
//         backgroundColor: '#DEDEDE',
//         flex: 1,
//     }
// })

// export default HomeScreen;


import React from 'react';
import { View, Text, Image, FlatList, StyleSheet, ListRenderItem } from 'react-native';

interface Item {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}

const data = [
  { id:"1", title: 'Title 1', description: 'Description 1', imageUrl: 'https://via.placeholder.com/50' },
  { id: "2", title: 'Title 2', description: 'Description 2', imageUrl: 'https://via.placeholder.com/50' },
  // Add more items as needed
];

const HomeScreen = () => {
  const renderItem: ListRenderItem<Item> = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.imageUrl }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  );

  const keyExtractor = (item: Item) => item.id;

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      contentContainerStyle={styles.list}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    padding: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: '#f9f9f9',
    padding: 10,
    borderRadius: 5,
    elevation: 2, // Adds shadow for Android
    shadowColor: '#000', // Adds shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: '#555',
  },
});

export default HomeScreen;
