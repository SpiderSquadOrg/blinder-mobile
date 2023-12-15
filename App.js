import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, TouchableOpacity } from "react-native";
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
import RegistrationMovieTypeScreen from "./screens/Main/RegistrationScreens/RegistrationMovieTypeScreen";
import RegistrationSeriesTypeScreen from "./screens/Main/RegistrationScreens/RegistrationSeriesTypeScreen";
import RegistrationFavoriteMusicScreen from "./screens/Main/RegistrationScreens/RegistrationFavoriteMusicScreen";
import RegistrationFavoriteMovieScreen from "./screens/Main/RegistrationScreens/RegistrationFavoriteMovieScreen";
import RegistrationFavoriteSeriesScreen from "./screens/Main/RegistrationScreens/RegistrationFavoriteSeriesScreen";
import RegistrationHobbyTypeScreen from "./screens/Main/RegistrationScreens/RegistrationHobbyTypeScreen";
import RegistrationLocationScreen from "./screens/Main/RegistrationScreens/RegistrationLocationScreen";
import RegistrationPhoneNumberScreen from "./screens/Main/RegistrationScreens/RegistrationPhoneNumberScreen";
import RegistrationSurnameScreen from "./screens/Main/RegistrationScreens/RegistrationSurnameScreen";
import RegistrationUsernameScreen from "./screens/Main/RegistrationScreens/RegistrationUsernameScreen";
import RegistrationNicknameScreen from "./screens/Main/RegistrationScreens/RegistrationNicknameScreen";
import RegistrationImageScreen from "./screens/Main/RegistrationScreens/RegistrationImageScreen";
import FilterScreen from "./screens/Filter/FilterScreen";
import LocationPreferencesScreen from "./screens/Filter/LocationPreferencesScreen";
import ChatScreen from "./screens/Home/ChatScreen";
import UpdateMusicOptionsScreen from "./screens/UpdateOptions/UpdateMusicOptionsScreen";
import UpdateMovieOptionsScreen from "./screens/UpdateOptions/UpdateMovieOptionsScreen";
import UpdateSeriesOptionsScreen from "./screens/UpdateOptions/UpdateSeriesOptionsScreen";
import UpdateMusicCategoryScreen from "./screens/UpdateOptions/UpdateMusicCategoryScreen";
import UpdateMovieCategoryScreen from "./screens/UpdateOptions/UpdateMovieCategoryScreen";
import UpdateSeriesCategoryScreen from "./screens/UpdateOptions/UpdateSeriesCategoryScreen";
import UpdateHobbyScreen from "./screens/UpdateOptions/UpdateHobbyScreen";
import { UserProvider } from "./contexts/UserContext";
import { ActiveChatProvider } from "./contexts/ActiveChatContext";
import DrawerContainer from "./containers/Drawer";
import SettingsScreen from "./screens/Profile/SettingsScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <UserProvider>
          <ActiveChatProvider>
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
                options={({ navigation }) => ({
                  title: "",
                  headerRight: () => (
                    <TouchableOpacity
                      onPress={() =>
                        navigation.navigate("RegistrationSurnameScreen")
                      }
                    >
                      <Text
                        style={{ color: Colors.primary600, fontWeight: "600" }}
                      >
                        İleri
                      </Text>
                    </TouchableOpacity>
                  ),
                })}
              />
              <Stack.Screen
                name="RegistrationSurnameScreen"
                component={RegistrationSurnameScreen}
                options={({ navigation }) => ({
                  title: "",
                  headerRight: () => (
                    <TouchableOpacity
                      onPress={() =>
                        navigation.navigate("RegistrationUsernameScreen")
                      }
                    >
                      <Text
                        style={{ color: Colors.primary600, fontWeight: "600" }}
                      >
                        İleri
                      </Text>
                    </TouchableOpacity>
                  ),
                })}
              />
              <Stack.Screen
                name="RegistrationUsernameScreen"
                component={RegistrationUsernameScreen}
                options={({ navigation }) => ({
                  title: "",
                  headerRight: () => (
                    <TouchableOpacity
                      onPress={() =>
                        navigation.navigate("RegistrationNicknameScreen")
                      }
                    >
                      <Text
                        style={{ color: Colors.primary600, fontWeight: "600" }}
                      >
                        İleri
                      </Text>
                    </TouchableOpacity>
                  ),
                })}
              />
              <Stack.Screen
                name="RegistrationNicknameScreen"
                component={RegistrationNicknameScreen}
                options={({ navigation }) => ({
                  title: "",
                  headerRight: () => (
                    <TouchableOpacity
                      onPress={() =>
                        navigation.navigate("RegistrationImageScreen")
                      }
                    >
                      <Text
                        style={{ color: Colors.primary600, fontWeight: "600" }}
                      >
                        İleri
                      </Text>
                    </TouchableOpacity>
                  ),
                })}
              />
              <Stack.Screen
                name="RegistrationImageScreen"
                component={RegistrationImageScreen}
                options={({ navigation }) => ({
                  title: "",
                  headerRight: () => (
                    <TouchableOpacity
                      onPress={() =>
                        navigation.navigate("RegistrationGenderScreen")
                      }
                    >
                      <Text
                        style={{ color: Colors.primary600, fontWeight: "600" }}
                      >
                        İleri
                      </Text>
                    </TouchableOpacity>
                  ),
                })}
              />
              <Stack.Screen
                name="RegistrationGenderScreen"
                component={RegistrationGenderScreen}
                options={({ navigation }) => ({
                  title: "",
                  headerRight: () => (
                    <TouchableOpacity
                      onPress={() =>
                        navigation.navigate("RegistrationBirthDateScreen")
                      }
                    >
                      <Text
                        style={{ color: Colors.primary600, fontWeight: "600" }}
                      >
                        İleri
                      </Text>
                    </TouchableOpacity>
                  ),
                })}
              />
              <Stack.Screen
                name="RegistrationBirthDateScreen"
                component={RegistrationBirthDateScreen}
                options={({ navigation }) => ({
                  title: "",
                  headerRight: () => (
                    <TouchableOpacity
                      onPress={() =>
                        navigation.navigate("RegistrationPhoneNumberScreen")
                      }
                    >
                      <Text
                        style={{ color: Colors.primary600, fontWeight: "600" }}
                      >
                        İleri
                      </Text>
                    </TouchableOpacity>
                  ),
                })}
              />
              <Stack.Screen
                name="RegistrationPhoneNumberScreen"
                component={RegistrationPhoneNumberScreen}
                options={({ navigation }) => ({
                  title: "",
                  headerRight: () => (
                    <TouchableOpacity
                      onPress={() =>
                        navigation.navigate("RegistrationPartnerGenderScreen")
                      }
                    >
                      <Text
                        style={{ color: Colors.primary600, fontWeight: "600" }}
                      >
                        İleri
                      </Text>
                    </TouchableOpacity>
                  ),
                })}
              />
              <Stack.Screen
                name="RegistrationPartnerGenderScreen"
                component={RegistrationPartnerGenderScreen}
                options={({ navigation }) => ({
                  title: "",
                  headerRight: () => (
                    <TouchableOpacity
                      onPress={() =>
                        navigation.navigate("RegistrationLocationScreen")
                      }
                    >
                      <Text
                        style={{ color: Colors.primary600, fontWeight: "600" }}
                      >
                        İleri
                      </Text>
                    </TouchableOpacity>
                  ),
                })}
              />
              <Stack.Screen
                name="RegistrationMusicTypeScreen"
                component={RegistrationMusicTypeScreen}
                options={({ navigation }) => ({
                  title: "",
                  headerRight: () => (
                    <TouchableOpacity
                      onPress={() =>
                        navigation.navigate("RegistrationFavoriteMusicScreen")
                      }
                    >
                      <Text
                        style={{ color: Colors.primary600, fontWeight: "600" }}
                      >
                        İleri
                      </Text>
                    </TouchableOpacity>
                  ),
                })}
              />
              <Stack.Screen
                name="RegistrationMovieTypeScreen"
                component={RegistrationMovieTypeScreen}
                options={({ navigation }) => ({
                  title: "",
                  headerRight: () => (
                    <TouchableOpacity
                      onPress={() =>
                        navigation.navigate("RegistrationFavoriteMovieScreen")
                      }
                    >
                      <Text
                        style={{ color: Colors.primary600, fontWeight: "600" }}
                      >
                        İleri
                      </Text>
                    </TouchableOpacity>
                  ),
                })}
              />
              <Stack.Screen
                name="RegistrationSeriesTypeScreen"
                component={RegistrationSeriesTypeScreen}
                options={({ navigation }) => ({
                  title: "",
                  headerRight: () => (
                    <TouchableOpacity
                      onPress={() =>
                        navigation.navigate("RegistrationFavoriteSeriesScreen")
                      }
                    >
                      <Text
                        style={{ color: Colors.primary600, fontWeight: "600" }}
                      >
                        İleri
                      </Text>
                    </TouchableOpacity>
                  ),
                })}
              />
              <Stack.Screen
                name="RegistrationFavoriteMusicScreen"
                component={RegistrationFavoriteMusicScreen}
                options={({ navigation }) => ({
                  title: "",
                  headerRight: () => (
                    <TouchableOpacity
                      onPress={() =>
                        navigation.navigate("RegistrationMovieTypeScreen")
                      }
                    >
                      <Text
                        style={{ color: Colors.primary600, fontWeight: "600" }}
                      >
                        İleri
                      </Text>
                    </TouchableOpacity>
                  ),
                })}
              />
              <Stack.Screen
                name="RegistrationFavoriteMovieScreen"
                component={RegistrationFavoriteMovieScreen}
                options={({ navigation }) => ({
                  title: "",
                  headerRight: () => (
                    <TouchableOpacity
                      onPress={() =>
                        navigation.navigate("RegistrationSeriesTypeScreen")
                      }
                    >
                      <Text
                        style={{ color: Colors.primary600, fontWeight: "600" }}
                      >
                        İleri
                      </Text>
                    </TouchableOpacity>
                  ),
                })}
              />
              <Stack.Screen
                name="RegistrationFavoriteSeriesScreen"
                component={RegistrationFavoriteSeriesScreen}
                options={({ navigation }) => ({
                  title: "",
                  headerRight: () => (
                    <TouchableOpacity
                      onPress={() =>
                        navigation.navigate("RegistrationHobbyTypeScreen")
                      }
                    >
                      <Text
                        style={{ color: Colors.primary600, fontWeight: "600" }}
                      >
                        İleri
                      </Text>
                    </TouchableOpacity>
                  ),
                })}
              />
              <Stack.Screen
                name="RegistrationHobbyTypeScreen"
                component={RegistrationHobbyTypeScreen}
                options={{ title: "" }}
              />
              <Stack.Screen
                name="RegistrationLocationScreen"
                component={RegistrationLocationScreen}
                options={() => ({
                  title: "",
                })}
              />
              <Stack.Screen
                name="UpdateMusicOptionsScreen"
                component={UpdateMusicOptionsScreen}
                options={{
                  title: "Müzik Listen",
                  headerBackTitle: "Geri",
                  headerTitleStyle: styles.headerTitleStyle,
                }}
              />
              <Stack.Screen
                name="UpdateMovieOptionsScreen"
                component={UpdateMovieOptionsScreen}
                options={{
                  title: "Film Listen",
                  headerBackTitle: "Geri",
                  headerTitleStyle: styles.headerTitleStyle,
                }}
              />
              <Stack.Screen
                name="UpdateSeriesOptionsScreen"
                component={UpdateSeriesOptionsScreen}
                options={{
                  title: "Dizi Listen",
                  headerBackTitle: "Geri",
                  headerTitleStyle: styles.headerTitleStyle,
                }}
              />
              <Stack.Screen
                name="UpdateMusicCategoryScreen"
                component={UpdateMusicCategoryScreen}
                options={{
                  title: "Müzik Türlerin",
                  headerBackTitle: "Geri",
                  headerTitleStyle: styles.headerTitleStyle,
                }}
              />
              <Stack.Screen
                name="UpdateMovieCategoryScreen"
                component={UpdateMovieCategoryScreen}
                options={{
                  title: "Film Türlerin",
                  headerBackTitle: "Geri",
                  headerTitleStyle: styles.headerTitleStyle,
                }}
              />
              <Stack.Screen
                name="UpdateSeriesCategoryScreen"
                component={UpdateSeriesCategoryScreen}
                options={{
                  title: "Dizi Türlerin",
                  headerBackTitle: "Geri",
                  headerTitleStyle: styles.headerTitleStyle,
                }}
              />
              <Stack.Screen
                name="UpdateHobbyScreen"
                component={UpdateHobbyScreen}
                options={{
                  title: "Hobilerin",
                  headerBackTitle: "Geri",
                  headerTitleStyle: styles.headerTitleStyle,
                }}
              />
              <Stack.Screen
                name="SettingsScreen"
                component={SettingsScreen}
                options={{
                  title: "Ayarlar",
                  headerBackTitle: "Geri",
                  headerTitleStyle: styles.headerTitleStyle,
                }}
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
              <Stack.Screen
                name="LocationPreferencesScreen"
                component={LocationPreferencesScreen}
                options={{
                  title: "Konum Tercihiniz",
                  headerTitleStyle: styles.headerTitleStyle,
                  headerBackTitle: "Geri",
                }}
              />
              <Stack.Screen
                name="ChattingScreen"
                component={ChatScreen}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="Home"
                component={DrawerContainer}
                options={{
                  headerShown: false,
                  headerLeft: null,
                }}
              />
            </Stack.Navigator>
          </ActiveChatProvider>
        </UserProvider>
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
