import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import useBusinesses from '../../hooks/useBusinesses';
import { useFonts } from 'expo-font';
import { styles } from './styles';
import SearchBar from '../../components/SearchBar';
import BusinessesList from './components/BusinessesList';
import { useNavigation } from '@react-navigation/native';

const BusinessScreen = () => {
  const navigation = useNavigation();
  const [term, setTerm] = useState('');
  const [searchApi, businesses, errorMessage] = useBusinesses();

  const [loaded] = useFonts({
    'Roboto-Bold': require('../../../assets/fonts/Roboto-Bold.ttf'),
    'Roboto-Medium': require('../../../assets/fonts/Roboto-Medium.ttf'),
    'Roboto-Regular': require('../../../assets/fonts/Roboto-Regular.ttf'),
  });

  const filteredBussinessesByPrice = (price) => {
    return businesses.filter((result) => {
      return result.price === price;
    });
  };

  return (
    <>
      {!loaded ? null : (
        <View style={styles.background} >
          <SearchBar term={term} onTermChange={setTerm} onTermSumit={() => searchApi(term)} />
          {errorMessage ? <Text>{errorMessage}</Text> : null}
          <ScrollView>
            <BusinessesList title="Cost Effective" businesses={filteredBussinessesByPrice('$')} />
            <BusinessesList title="Bit Pricier" businesses={filteredBussinessesByPrice('$$')} />
            <BusinessesList title="Big Spender" businesses={filteredBussinessesByPrice('$$$')} />
          </ScrollView>
        </View>
      )}
    </>
  );
};

export default BusinessScreen;
