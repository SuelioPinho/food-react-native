import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import useBusinessDetail from '../hooks/useBusinessDetail';

const BusinessDetailScreen = ({ navigation }) => {
  const id = navigation.getParam('id');

  const { business } = useBusinessDetail(id);

  return (
    <View>
      <Text>{business?.name}</Text>
      <FlatList
        data={business?.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return <Image style={styles.image} source={{uri: item}}/>
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 300
  }
});

export default BusinessDetailScreen;
