import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";

// SVG Imports
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const index = (props) => {
  const { placeholder, onChangeText, value } = props;
  return (
    <View style={styles.textInputContainer}>
      <View style={{ marginRight: 5 }}>
        <Feather name="search" size={24} />
      </View>
      <View>
        <TextInput
          placeholder={placeholder}
          onChangeText={onChangeText}
          value={value}
          style={styles.textInput}
        />
      </View>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  textInputContainer: {
    borderWidth: 1,
    padding: 10,
    flexDirection: "row",
    borderRadius: 20,
    // backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    alignContent: "space-around",
  },
  textInput: {
    // borderWidth: 1,
    width: 250,
  },
});
