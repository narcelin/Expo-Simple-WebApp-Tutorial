import React from "react";
import { StyleSheet, Image } from "react-native";

export default function ImageViewer({ source, selectedImage }) {
  //   const imageSource = selectedImage !== null ? { uri: selectedImage } : source;

  return <Image source={source} style={styles.image} />;
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
