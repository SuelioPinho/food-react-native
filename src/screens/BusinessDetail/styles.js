import { StyleSheet } from "react-native";
import Colors from "../../utilites/Color";
import { HEADER_IMAGE_HEIGHT } from './components/HeaderImage';
import Fonts from "../../utilites/Font";

export const styles = StyleSheet.create({
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