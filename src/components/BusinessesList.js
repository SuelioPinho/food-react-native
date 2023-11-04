import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import BusinessItem from './BusinessItem';
import Colors from '../utilites/Color';
import Fonts from '../utilites/Font';
import { withNavigation } from 'react-navigation';

const BusinessesList = ({ navigation, title, businesses }) => {
  return (
    <>
      {!businesses.length ? null : (
        <View>
          <Text style={styles.titleText}>{title}</Text>
          <FlatList
            horizontal
            data={businesses}
            keyExtractor={(result) => result.id}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('BusinessDetail', {
                      id: item.id,
                    })
                  }
                >
                  <BusinessItem item={item} />
                </TouchableOpacity>
              );
            }}
          />
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  titleText: {
    fontFamily: Fonts.Bold,
    fontSize: 18,
    color: Colors.Black,
    marginLeft: 20,
    marginTop: 20,
    marginBottom: 15,
  },
});

export default withNavigation(BusinessesList);
