import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import Colors from '../utilites/Color';
import { AntDesign } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import Fonts from '../utilites/Font';

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

const styles = StyleSheet.create({
  container: {
    marginLeft: 20,
  },
  image: {
    width: 220,
    height: 150,
    borderRadius: 8,
  },
  nameContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  name: {
    fontFamily: Fonts.SemiBold,
    color: Colors.Black,
    flex: 3,
  },
  star: {
    color: Colors.Yellow,
    alignSelf: 'center',
  },
  rating: {
    fontFamily: Fonts.Regular,
    fontSize: 12,
    color: Colors.Lable,
    alignSelf: 'center',
    marginLeft: 4,
    marginTop: 1,
  },
  addressContainer: {
    flexDirection: 'row',
    marginTop: 6,
  },
  address: {
    fontFamily: Fonts.Regular,
    fontSize: 12,
    color: Colors.Lable,
    marginLeft: 4,
  },
  locationIcon: {
    color: Colors.Lable,
  },
});

export default BusinessItem;
