import React from "react";
import { StyleSheet, Image } from "react-native";

export default function ImageViewer({ imageSourcePlaceHolder }) {
  //PH - place holder
  return <Image source={imageSourcePlaceHolder} style={styles.image} />;
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
