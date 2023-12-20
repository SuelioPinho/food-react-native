import { StyleSheet } from "react-native";
import Colors from "../../utilites/Color";
import Fonts from "../../utilites/Font";

export const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: Colors.Background,
    height: 48,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: 'row',
    borderRadius: 8,
    marginTop: 10,
  },
  inputStyle: {
    marginLeft: 10,
    flex: 1,
    fontFamily: Fonts.Regular,
    fontSize: 16,
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: 'center',
    color: Colors.Lable,
    marginLeft: 10,
  },
});
