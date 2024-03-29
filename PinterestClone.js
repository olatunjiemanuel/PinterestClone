import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//screen imports
import HomeScreen from "./src/screens/HomeScreen";
import SearchScreen from "./src/screens/SearchScreen";
import ConnectScreen from "./src/screens/ConnectScreen";
import ProfileScreen from "./src/screens/ProfileScreen";

//SVG imports
import { Octicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          tabBarStyle: [
            {
              display: "flex",
              //   backgroundColor: "red",
              position: "absolute",
              //   height: 65,
              //   width: 352,
              //   marginHorizontal: 18,
              //   borderRadius: 69,
              //   marginBottom: 40,
            },
            null,
          ],
          tabBarActiveTintColor: "red",
          tabBarInActiveTintColor: "gray",
          header: () => null,
        }}
      >
        <Tab.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={styles.TabIcons}>
                {/* <Text>Home</Text> */}
                {/* <HomeTabSvg color={focused ? "red" : "black"} /> */}
                <Octicons
                  name="home"
                  size={24}
                  color={focused ? "black" : "grey"}
                />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="SearchScreen"
          component={SearchScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={styles.TabIcons}>
                <Feather
                  name="search"
                  size={24}
                  color={focused ? "black" : "grey"}
                />
                {/* <Text>SearchScreen</Text> */}
                {/* <SearchSVG color={focused ? "red" : "black"} /> */}
              </View>
            ),
          }}
        />

        <Tab.Screen
          name="ConnectScreeen"
          component={ConnectScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={styles.TabIcons}>
                <AntDesign
                  name="message1"
                  size={24}
                  color={focused ? "black" : "grey"}
                />
                {/* <Text>ConnectScreen</Text> */}
                {/* <LikesSVG color={focused ? 'red' : 'black'} /> */}
              </View>
            ),
          }}
        />

        <Tab.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={styles.TabIcons}>
                {/* user profile picture will be shown here*/}
                <View
                  style={{
                    backgroundColor: focused ? "black" : "grey",
                    width: 20,
                    height: 20,
                    borderRadius: 10,
                  }}
                ></View>
                {/* <CartSVG color={focused ? 'red' : 'black'} /> */}
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
