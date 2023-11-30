import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainPage from "./screens/Main/MainPage";
import LoginScreen from "./screens/Main/LoginScreen";
import SignUpScreen from "./screens/Main/SignUpScreen";
import Colors from "./constansts/Colors";
import RegistrationNameScreen from "./screens/Main/RegistrationScreens/RegistrationNameScreen";
import RegistrationGenderScreen from "./screens/Main/RegistrationScreens/RegistrationGenderScreen";
import RegistrationBirthDateScreen from "./screens/Main/RegistrationScreens/RegistrationBirthDateScreen";
import RegistrationPartnerGenderScreen from "./screens/Main/RegistrationScreens/RegistrationPartnerGenderScreen";
import RegistrationMusicTypeScreen from "./screens/Main/RegistrationScreens/RegistrationMusicTypeScreen";
import FilterScreen from "./screens/Filter/FilterScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: "#ffffff",
            },
            headerTintColor: Colors.primary600,
            contentStyle: { backgroundColor: "#ffffff" },
          }}
        >
          <Stack.Screen
            name="MainPage"
            component={MainPage}
            options={{ title: "" }}
          />
          <Stack.Screen
            name="LoginScreen"
            component={LoginScreen}
            options={{ title: "" }}
          />
          <Stack.Screen
            name="SignUpScreen"
            component={SignUpScreen}
            options={{ title: "" }}
          />
          <Stack.Screen
            name="RegistrationNameScreen"
            component={RegistrationNameScreen}
            options={{ title: "" }}
          />
          <Stack.Screen
            name="RegistrationGenderScreen"
            component={RegistrationGenderScreen}
            options={{ title: "" }}
          />
          <Stack.Screen
            name="RegistrationBirthDateScreen"
            component={RegistrationBirthDateScreen}
            options={{ title: "" }}
          />
          <Stack.Screen
            name="RegistrationPartnerGenderScreen"
            component={RegistrationPartnerGenderScreen}
            options={{ title: "" }}
          />
          <Stack.Screen
            name="RegistrationMusicTypeScreen"
            component={RegistrationMusicTypeScreen}
            options={{ title: "" }}
          />
          <Stack.Screen
            name="FilterScreen"
            component={FilterScreen}
            options={{
              title: "Eşleşmeleri Filtrele",
              headerTitleStyle: styles.headerTitleStyle,
              headerBackTitle: "Geri",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  headerTitleStyle: {
    fontWeight: "medium",
    fontSize: 20,
    color: "black",
  },
});
