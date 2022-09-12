import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//screen imports
import HomeScreen from "./src/screens/HomeScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          //   tabBarStyle: [
          //     {
          //       display: "flex",
          //       backgroundColor: "#fff",
          //       position: "absolute",
          //       bottom: 20,
          //       height: 65,
          //       width: 352,
          //       marginHorizontal: 18,
          //       borderRadius: 69,
          //       marginBottom: 40,
          //     },
          //     null,
          //   ],
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
                <Text>Home</Text>
                {/* <HomeTabSvg color={focused ? "red" : "black"} /> */}
              </View>
            ),
          }}
        />
        {/* <Tab.Screen
        name="searchScreen"
        component={searchScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.TabIcons}>
              <SearchSVG color={focused ? 'red' : 'black'} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="likesScreen"
        component={likesScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.TabIcons}>
              <LikesSVG color={focused ? 'red' : 'black'} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="cartScreen"
        component={cartScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.TabIcons}>
              <CartSVG color={focused ? 'red' : 'black'} />
            </View>
          ),
        }}
      /> */}
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
