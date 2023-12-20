import React from 'react';
import { FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Animated from 'react-native-reanimated';
import { onScrollEvent, useValue } from 'react-native-redash';
import HeaderImage from './components/HeaderImage';
import useBusinessDetail from '../../hooks/useBusinessDetail';
import Colors from '../../utilites/Color';
import { SimpleLineIcons, AntDesign, Feather, Ionicons } from '@expo/vector-icons';
import { styles } from './styles';

const BusinessDetailScreen = ({ navigation }) => {
  const id = navigation.getParam('id');
  const { business } = useBusinessDetail(id);
  const y = useValue(0);
  const onScroll = onScrollEvent({ y });

  return (
    <View style={styles.container}>
      <HeaderImage {...{ y }} backgroundImage={business?.image_url} />
      <Animated.ScrollView
        style={StyleSheet.absoluteFill}
        scrollEventThrottle={1}
        {...{ onScroll }}
      >
        <Animated.View style={styles.body}>
          <Animated.View style={styles.titleContainer}>
            <Animated.Text style={styles.title}>{business?.name}</Animated.Text>
            <AntDesign name="star" style={styles.star} size={20} />
            <Text style={styles.rating}>{business?.rating}</Text>
          </Animated.View>
          <View style={styles.subtitleContainer}>
            <SimpleLineIcons name="location-pin" size={12} style={styles.subtitleIcon} />
            <Text style={styles.subtitle}>
              {business?.location.address1}, {business?.location.city}
            </Text>
          </View>
          <View style={styles.subtitleContainer}>
            <Feather name="phone" size={12} style={styles.subtitleIcon} />
            <Text style={styles.subtitle}>
              {business?.display_phone}
            </Text>
          </View>
          <View style={styles.divider}/>
          <Text style={styles.postTitle}>Posts</Text>
          <FlatList
            horizontal
            data={business?.photos}
            keyExtractor={(photo) => photo}
            style={styles.postsList}
            showsHorizontalScrollIndicator={false}
            contentInset={{right: 20, top: 0, left: 20, bottom: 0}}
            contentOffset={{x: -20, y: 0}}
            ItemSeparatorComponent={() => (
              <View style={styles.sliderIndicatorItemSeparator} />
            )}
            renderItem={({ item }) => {
              return <Image style={styles.image} source={{ uri: item }} />;
            }}
          />
        </Animated.View>
      </Animated.ScrollView>
      <SafeAreaView>
        <TouchableOpacity style={styles.backContainer} onPress={() => navigation.goBack()}>
          <Ionicons name="close" size={24} color={Colors.Black} style={styles.backIcon}/>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
};

export default BusinessDetailScreen;
