import MatchScreen from "../../screens/Home/MatchScreen";
import LikesScreen from "../../screens/Home/LikesScreen";
import ChatScreen from "../../screens/Home/ChatScreen";
import { StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Colors from "../../constansts/Colors";
import { DefaultTheme, Provider } from "react-native-paper";

const Tab = createMaterialBottomTabNavigator();

function BottomNavigation() {
  return (
    <Provider theme={theme}>
      <Tab.Navigator
        initialRouteName={"MatchScreen"}
        labeled={false}
        shifting={true}
        barStyle={{
          position: "absolute",
          elevation: 0,
          backgroundColor: Colors.primary600,
          height: 65,
        }}
        screenOptions={({ navigation, route, options }) => ({
          tabBarIcon: ({ focused }) => {
            let size = 30;
            let color = focused ? "white" : Colors.accent500;
            if (route.name === "LikesScreen") {
              return focused ? (
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    bottom: 5,
                  }}
                >
                  <Ionicons name={"heart"} size={size} color={color} />
                </View>
              ) : (
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    bottom: 5,
                  }}
                >
                  <Ionicons name={"heart-outline"} size={size} color={color} />
                </View>
              );
            } else if (route.name === "MatchScreen") {
              return focused ? (
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    bottom: 5,
                  }}
                >
                  <MaterialCommunityIcons
                    name="cards"
                    size={size}
                    color={color}
                  />
                </View>
              ) : (
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    bottom: 5,
                  }}
                >
                  <MaterialCommunityIcons
                    name="cards-outline"
                    size={size}
                    color={color}
                  />
                </View>
              );
            } else if (route.name === "ChatScreen") {
              return focused ? (
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    bottom: 5,
                  }}
                >
                  <Ionicons name={"chatbubbles"} size={size} color={color} />
                </View>
              ) : (
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    bottom: 5,
                  }}
                >
                  <Ionicons
                    name={"chatbubbles-outline"}
                    size={size}
                    color={color}
                  />
                </View>
              );
            }
          },
        })}
      >
        <Tab.Screen name="LikesScreen" component={LikesScreen} />
        <Tab.Screen name="MatchScreen" component={MatchScreen} />
        <Tab.Screen name="ChatScreen" component={ChatScreen} />
      </Tab.Navigator>
    </Provider>
  );
}

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    secondaryContainer: "transparent", // Use transparent to disable the little highlighting oval
  },
};
export default BottomNavigation;
