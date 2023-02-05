import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";

const ConnectScreen = () => {
  const [selected, setSelected] = useState("updates");

  const Updates = () => {
    return (
      <View>
        <Text>Updates</Text>
      </View>
    );
  };

  const Messages = () => {
    return (
      <View>
        <Text>Messages</Text>
      </View>
    );
  };
  return (
    <SafeAreaView style={{ paddingTop: 40 }}>
      <View style={styles.pageNavigator}>
        <TouchableOpacity
          style={
            selected === "updates"
              ? styles.selectedPageBtn
              : styles.UpdatesBtnCntnr
          }
          onPress={() => {
            setSelected("updates");
          }}
        >
          <Text style={{ color: selected === "updates" ? "#fff" : "#000" }}>
            Updates
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={
            selected === "messages"
              ? styles.selectedPageBtn
              : styles.MessagesBtnCntnr
          }
          onPress={() => {
            setSelected("messages");
          }}
        >
          <Text style={{ color: selected === "messages" ? "#fff" : "#000" }}>
            Messages
          </Text>
        </TouchableOpacity>
      </View>
      <View>{selected === "updates" ? Updates() : Messages()}</View>
    </SafeAreaView>
  );
};

export default ConnectScreen;

const styles = StyleSheet.create({
  pageNavigator: {
    flexDirection: "row",
    justifyContent: "center",
  },
  UpdatesBtnCntnr: {
    padding: 10,
    borderRadius: 20,
  },
  MessagesBtnCntnr: {
    padding: 10,
    borderRadius: 20,
  },
  selectedPageBtn: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 20,
    backgroundColor: "black",
  },
});
