import React from 'react';
import { FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Animated from 'react-native-reanimated';
import { onScrollEvent, useValue } from 'react-native-redash';
import HeaderImage, { HEADER_IMAGE_HEIGHT } from '../components/HeaderImage';
import useBusinessDetail from '../hooks/useBusinessDetail';
import Fonts from '../utilites/Font';
import Colors from '../utilites/Color';
import { SimpleLineIcons, AntDesign, Feather, Ionicons } from '@expo/vector-icons';

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.White,
  },
  image: {
    height: 200,
    width: 300,
    borderRadius: 8
  },
  backContainer: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: Colors.White,
    opacity: 0.5,
    marginLeft: 20,
    alignItems: "center",
    justifyContent: "center"
  },
  body: {
    marginTop: HEADER_IMAGE_HEIGHT - 10,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    backgroundColor: Colors.White,
  },
  titleContainer: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 5,
  },
  title: {
    fontFamily: Fonts.SemiBold,
    fontSize: 20,
    flex: 3,
  },
  subtitleContainer: {
    flexDirection: 'row',
    marginTop: 6,
  },
  subtitle: {
    fontFamily: Fonts.Regular,
    fontSize: 12,
    color: Colors.Lable,
    marginLeft: 4,
  },
  subtitleIcon: {
    color: Colors.Lable,
    marginLeft: 20,
  },
  star: {
    color: Colors.Yellow,
    alignSelf: 'center',
  },
  rating: {
    fontFamily: Fonts.SemiBold,
    fontSize: 14,
    color: Colors.Black,
    alignSelf: 'center',
    marginLeft: 4,
    marginTop: 1,
  },
  divider: {
    margin: 20,
    height: 1,
    backgroundColor: Colors.Lable,
    opacity: 0.5
  },
  postTitle: {
    marginStart: 20,
    fontFamily: Fonts.SemiBold,
    fontSize: 16,
  },
  postsList: {
    marginTop: 10,
  },
  sliderIndicatorItemSeparator: {
    backgroundColor: Colors.White,
    width: 12,
  },
});

export default BusinessDetailScreen;
