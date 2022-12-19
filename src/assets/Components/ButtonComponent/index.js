import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const ButtonComponent = (props) => {
  const { buttonText, buttonStyle, buttonTextStyle } = props;
  return (
    <TouchableOpacity style={[styles.buttonCtnr, buttonStyle]}>
      <Text style={[buttonTextStyle]}>{buttonText}</Text>
    </TouchableOpacity>
  );
};

export default ButtonComponent;

const styles = StyleSheet.create({
  buttonCtnr: {
    padding: 10,
    borderRadius: 20,
    alignItems: "center",
  },
});
