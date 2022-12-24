import { SafeAreaView, StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";

// component imports
import SearchbarComponent from "../../assets/Components/SearchbarComponent";
import RecentlyDisplayedComponent from "../../assets/Components/RecentlyDisplayedComponent";

const SearchScreen = () => {
  const mostRecentSearch = [
    "comment",
    "fashion",
    "lifestyle",
    "entertainment",
    "gaming",
  ];
  return (
    <SafeAreaView style={{ marginHorizontal: 20 }}>
      {console.log(mostRecentSearch)}
      <View>
        <SearchbarComponent placeholder="... Search" />
      </View>
      <View>
        <View>
          <Text>Recently Searched</Text>
        </View>
        {/* <Text>Your most recent searches will appear here</Text> */}
        <ScrollView style={styles.recentSearchContainer}>
          {mostRecentSearch.map((item) => (
            <RecentlyDisplayedComponent text={item} />
          ))}
        </ScrollView>
      </View>
      {/* <View>
        <Text>Most popular searches will appear here</Text>
      </View> */}
    </SafeAreaView>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  recentSearchContainer: {},
});
