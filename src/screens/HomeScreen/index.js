import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  Modal,
  Image,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";

// component import
import PreferenceComponent from "../../assets/Components/PreferenceComponent";
import PreferenceData from "../../assets/API Calls/RandomImageAPI";
import CloseButtonComponent from "../../assets/Components/CloseButtonComponent";
import ButtonComponent from "../../assets/Components/ButtonComponent";
import HomeFeedComponent from "../../assets/Components/HomeFeedComponent";

const HomeScreen = () => {
  //const [preferenceModal, setPreferenceModal] = useState(true);
  const [isShow, setShow] = useState(true);
  //console.log(PreferenceData[0]);
  return (
    <SafeAreaView style={styles.homeContainer}>
      <Modal visible={isShow} animationType={"slide"} transparent={true}>
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
              <PreferenceComponent componentText="Art" />
              <PreferenceComponent componentText="Sport" />
              <PreferenceComponent componentText="Fashion" />
              <PreferenceComponent componentText="Shoes" />
              <PreferenceComponent componentText="Technology" />
              <PreferenceComponent componentText="Programming" />
              <PreferenceComponent componentText="Google" />
              <PreferenceComponent componentText="Something" />
              <PreferenceComponent componentText="Something" />
              <PreferenceComponent componentText="Something" />
              <PreferenceComponent componentText="Something" />
              <PreferenceComponent componentText="Something" />
            </View>
            <View style={styles.buttonComponentCtnr}>
              <ButtonComponent
                buttonText="Confirm"
                buttonStyle={styles.buttonComponent}
                buttonTextStyle={styles.buttonTextStyle}
              />
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
        style={{ backgroundColor: "red", padding: 20 }}
        contentContainerStyle={{
          alignItems: "center",
          //flex: 1,
          // alignItems: "center",
          // justifyContent: "center",
          height: 50,
        }}
      >
        <TouchableOpacity onPress={() => setShow(true)}>
          <View style={{ backgroundColor: "blue", height: 50 }}>
            <Text>For you</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setShow(true)}>
          <View style={{ backgroundColor: "green", height: 50 }}>
            <Text>Preferences </Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
      <View style={styles.homeScreenCntnr}>
        <Text>HomeScreen</Text>
        <View style={styles.homeFeedCntnr}>
          <FlatList
            data={PreferenceData}
            renderItem={({ item }) => (
              <HomeFeedComponent
                author={item.author}
                ImgSrc={{ uri: item.url }}
              />
            )}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
    </SafeAreaView>
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
    paddingTop: 70,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  buttonComponentCtnr: {
    paddingTop: 60,
  },
  buttonComponent: {
    backgroundColor: "red",
    padding: 15,
  },
  buttonTextStyle: {
    color: "white",
    fontWeight: "700",
    fontSize: 20,
  },
  homeScreenCntnr: {
    paddingHorizontal: 10,
  },
});
