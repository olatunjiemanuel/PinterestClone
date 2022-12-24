import { SafeAreaView, StyleSheet, Text, View, ScrollView } from "react-native";
import React, { useState } from "react";

// component imports
import SearchbarComponent from "../../assets/Components/SearchbarComponent";
import RecentlyDisplayedComponent from "../../assets/Components/RecentlyDisplayedComponent";

const SearchScreen = () => {
  const [searching, setSeaching] = useState(false);
  const [searchText, setSearchText] = useState(null);
  const [mostRecentSearch, setMostRecentSearch] = useState([]);

  const handleSubmit = () => {
    setMostRecentSearch([searchText, ...mostRecentSearch]);
    setSeaching(false);
  };
  return (
    <SafeAreaView style={{ marginHorizontal: 20 }}>
      <View>
        <SearchbarComponent
          placeholder="... Search"
          onFocus={() => {
            setSeaching(true);
          }}
          onChangeText={(value) => {
            setSearchText(value);
          }}
          onSubmitEditing={() => {
            // setMostRecentSearch([searchText, ...mostRecentSearch]);
            // setSeaching(false);
            handleSubmit();
          }}
          value={searchText}
          // onBlur={() => {
          //   setSeaching(false);
          // }}
        />
      </View>
      {searching ? (
        <View>
          <View style={styles.recentSearchTxtContainer}>
            <Text style={styles.recentSearchTxt}>Recently Searched</Text>
          </View>
          {/* <Text>Your most recent searches will appear here</Text> */}
          <ScrollView style={styles.recentSearchContainer}>
            {mostRecentSearch.map((item, index) => (
              <RecentlyDisplayedComponent
                text={item}
                index={index}
                onPress={() => {
                  setSearchText(item);
                  handleSubmit();
                }}
              />
            ))}
          </ScrollView>
        </View>
      ) : null}
      {/* <View>
        <Text>Most popular searches will appear here</Text>
      </View> */}
    </SafeAreaView>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  recentSearchContainer: {},
  recentSearchTxtContainer: {
    paddingVertical: 10,
    paddingLeft: 5,
  },
  recentSearchTxt: {
    fontSize: "30px",
    fontWeight: "500",
    color: "grey",
  },
});
