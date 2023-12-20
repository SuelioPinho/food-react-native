import React from "react";
import { Dimensions, StyleSheet } from "react-native";
import Animated from "react-native-reanimated";
import { styles } from "./styles";

const { Extrapolate, interpolateNode } = Animated;
const { height: wHeight } = Dimensions.get("window");

export const HEADER_IMAGE_HEIGHT = wHeight / 4;

export default ({ y, backgroundImage }) => {
  const height = interpolateNode(y, {
    inputRange: [-100, 0],
    outputRange: [HEADER_IMAGE_HEIGHT + 100, HEADER_IMAGE_HEIGHT],
    extrapolateRight: Extrapolate.CLAMP,
  });
  const top = interpolateNode(y, {
    inputRange: [0, 100],
    outputRange: [0, -100],
    extrapolateLeft: Extrapolate.CLAMP,
  });
  return (
    <Animated.Image
      source={{ uri: backgroundImage }}
      style={[styles.image, { top, height }]}
    />
  );
};