import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const BusinessItem = ({ item }) => {
  return (
    <View>
        <Image source={{uri: item.image_url}}/>
      <Text>{item.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default BusinessItem;
