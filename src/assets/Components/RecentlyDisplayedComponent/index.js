import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

//component imports
import { Feather } from "@expo/vector-icons";
import CloseButtonSvg from "../../SVGs/CloseButtonSvg";

const RecentlyDisplayedComponent = (props) => {
  const { text } = props;
  return (
    <TouchableOpacity style={styles.mainCntnr}>
      <View>
        <Feather name="search" size={24} />
      </View>
      <View>
        <Text>{text}</Text>
      </View>
      <TouchableOpacity>
        <CloseButtonSvg width={20} height={20} />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default RecentlyDisplayedComponent;

const styles = StyleSheet.create({
  mainCntnr: {
    flexDirection: "row",
    alignItems: "center",
  },
});
