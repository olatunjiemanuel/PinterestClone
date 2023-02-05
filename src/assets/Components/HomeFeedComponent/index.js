import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const HomeFeedComponent = (props) => {
  const { author, ImgSrc } = props;

  //console.log(ImgSrc);
  return (
    <View>
      <View style={styles.authorInitialsCntnr}>
        <Text>{author[0]}</Text>
      </View>
      <View>
        <Text>{author}</Text>
      </View>
      <View>
        <Image source={ImgSrc} style={styles.feedImage} />
      </View>
    </View>
  );
};

export default HomeFeedComponent;

const styles = StyleSheet.create({
  feedImage: {
    height: 200,
    width: 200,
  },
  authorInitialsCntnr: {
    borderWidth: 1,
    width: 20,
    height: 20,
    borderRadius: 10,
    alignItems: "center",
  },
});
