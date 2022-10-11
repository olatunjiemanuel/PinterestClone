import { StyleSheet, Text, View } from "react-native";
import React from "react";

const PreferenceComponent = () => {
  return (
    <View style={styles.preferenceCntnr}>
      <Text>Prefee1</Text>
    </View>
  );
};

export default PreferenceComponent;

const styles = StyleSheet.create({
  preferenceCntnr: {
    borderWidth: 1,
    borderRadius: 7.5,
    padding: 5,
  },
});
