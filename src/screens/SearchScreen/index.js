import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";

// component imports
import SearchbarComponent from "../../assets/Components/SearchbarComponent";

const SearchScreen = () => {
  return (
    <SafeAreaView style={{ marginHorizontal: 20 }}>
      <SearchbarComponent placeholder="... Search" />
    </SafeAreaView>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({});
