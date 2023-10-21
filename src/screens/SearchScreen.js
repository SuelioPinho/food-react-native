import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import useBusinesses from '../hooks/useBusinesses';
import BusinessesList from '../components/BusinessesList';
import { useFonts } from 'expo-font';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [searchApi, businesses, errorMessage] = useBusinesses();

  const [loaded] = useFonts({
    'Roboto-Bold': require('../../assets/fonts/Roboto-Bold.ttf'),
    'Roboto-Medium': require('../../assets/fonts/Roboto-Medium.ttf'),
    'Roboto-Regular': require('../../assets/fonts/Roboto-Regular.ttf'),
  });

  const filteredBussinessesByPrice = (price) => {
    return businesses.filter((result) => {
      return result.price === price;
    });
  };

  return (
    <>
      {!loaded ? null : (
        <View style={styles.background}>
          <SearchBar term={term} onTermChange={setTerm} onTermSumit={searchApi} />
          {errorMessage ? <Text>{errorMessage}</Text> : null}
          <Text>We have found {businesses.length} results</Text>
          <BusinessesList title="Cost Effective" businesses={filteredBussinessesByPrice('$')} />
          <BusinessesList title="Bit Pricier" businesses={filteredBussinessesByPrice('$$')} />
          <BusinessesList title="Big Spender" businesses={filteredBussinessesByPrice('$$')} />
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: 'white',
    flex: 1,
  },
});

export default SearchScreen;
