import { Dimensions, StyleSheet } from "react-native";

const { width: wWidth } = Dimensions.get("window");

export const styles = StyleSheet.create({
  image: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: wWidth,
    resizeMode: 'cover',
  },
});
