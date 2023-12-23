import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import BusinessItem from '../BussinessItem';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';

const BusinessesList = ({ title, businesses }) => {
  const navigation = useNavigation();

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

export default BusinessesList;
