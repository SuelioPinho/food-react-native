import React from 'react';
import { Image, Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { styles } from './styles';

const BusinessItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: item.image_url }} />
      <View style={styles.nameContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <AntDesign name="star" style={styles.star} size={14} />
        <Text style={styles.rating}>{item.rating}</Text>
      </View>
      <View style={styles.addressContainer}>
        <SimpleLineIcons name="location-pin" size={12} style={styles.locationIcon} />
        <Text style={styles.address}>
          {item.location.address1}, {item.location.city}
        </Text>
      </View>
    </View>
  );
};

export default BusinessItem;
