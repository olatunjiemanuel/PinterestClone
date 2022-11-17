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
import CloseButtonComponent from "../../assets/Components/CloseButtonComponent";

const HomeScreen = () => {
  //const [preferenceModal, setPreferenceModal] = useState(true);
  const [isShow, setShow] = useState(true);
  console.log(PreferenceData[0].url);
  return (
    <View style={styles.homeContainer}>
      <Modal visible={isShow} animationType={"fade"} transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modal}>
            <CloseButtonComponent
              onPress={() => {
                setShow(false);
              }}
            />
            <View style={styles.PreferenceHeaderCntr}>
              <Text style={styles.PreferenceHeaderTxt}>
                What are you interested in ? You can select up to 5 now and make
                changes as you go
                {/* {PreferenceData[0].id} */}
              </Text>
            </View>
            {/* <Image
              style={{ height: 200, width: 200 }}
              source={{ uri: "https://picsum.photos/200/300" }}
            /> */}
            <View style={styles.PreferenceComponentCntr}>
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
    padding: 20,
  },
  PreferenceHeaderCntr: {
    paddingTop: 20,
  },
  PreferenceHeaderTxt: {
    textAlign: "center",
    fontWeight: "500",
  },
  PreferenceComponentCntr: {
    paddingTop: 40,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
});
