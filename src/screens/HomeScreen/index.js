import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  Modal,
  Image,
} from "react-native";
import React, { useState } from "react";

// component import
import PreferenceComponent from "../../assets/Components/PreferenceComponent";
import PreferenceData from "../../assets/API Calls/RandomImageAPI";

const HomeScreen = () => {
  //const [preferenceModal, setPreferenceModal] = useState(true);
  const [isShow, setShow] = useState(true);
  console.log(PreferenceData[0].url);
  return (
    <View style={styles.homeContainer}>
      <Modal visible={isShow} animationType={"fade"} transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modal}>
            <Text style={styles.text}>
              {/* What are you interested in ? */}
              {PreferenceData[0].id}
            </Text>
            <Image
              style={{ height: 200, width: 200 }}
              source={{ uri: "https://picsum.photos/200/300" }}
            />
            <View
              style={{
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "space-around",
              }}
            >
              <PreferenceComponent />
              <PreferenceComponent />
              <PreferenceComponent />
              <PreferenceComponent />
              <PreferenceComponent />
              <PreferenceComponent />
              <PreferenceComponent />
              <PreferenceComponent />
              <PreferenceComponent />
              <PreferenceComponent />
              <PreferenceComponent />
            </View>
            {/* <Button
              title="Click Here To Hide Modal"
              onPress={() => setShow(!isShow)}
            /> */}
          </View>
        </View>
      </Modal>
      <ScrollView
        horizontal={true}
        style={{ backgroundColor: "red", height: 30 }}
      >
        <View>
          <Text>For you</Text>
        </View>
        <View>
          <Text>Preferences </Text>
        </View>
      </ScrollView>
      <Text>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  homeContainer: {
    //paddingTop: Platform.OS === "ios" ? 40 : null,
    paddingTop: 40,
  },
  // preferenceModal: {
  //   flex: 1,
  //   backgroundColor: "blue",
  //   width: 200,
  //   height: 200,
  // },
  modalContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modal: {
    width: 350,
    height: 500,
    backgroundColor: "#fff",
    // justifyContent: "center",
    // alignItems: "center",
    borderRadius: 7,
  },
});
