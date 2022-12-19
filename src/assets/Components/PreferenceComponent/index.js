import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const PreferenceComponent = (props) => {
  const { componentText } = props;
  return (
    <TouchableOpacity style={styles.preferenceCntnr}>
      <Text>{componentText}</Text>
    </TouchableOpacity>
  );
};

export default PreferenceComponent;

const styles = StyleSheet.create({
  preferenceCntnr: {
    borderWidth: 1,
    borderRadius: 7.5,
    padding: 5,
    margin: 5,
  },
});
