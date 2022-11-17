import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

// SVG Import
import CloseButtonSvg from "../../SVGs/CloseButtonSvg/index";

const CloseButtonComponent = (props) => {
  const { onPress } = props;
  return (
    <TouchableOpacity onPress={onPress}>
      <CloseButtonSvg />
    </TouchableOpacity>
  );
};

export default CloseButtonComponent;

const styles = StyleSheet.create({});
