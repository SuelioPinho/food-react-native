import { StyleSheet } from "react-native";
import Fonts from "../../../../utilites/Font";
import Colors from "../../../../utilites/Color";

export const styles = StyleSheet.create({
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
