import React, { useCallback, useRef } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import Title from "../../components/ui/Title";
import UserProfileCard from "../../containers/UserProfileCard/index";
import { Appbar } from "react-native-paper";
import Colors from "../../constansts/Colors";
import { useFocusEffect } from "@react-navigation/native";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

function MatchScreen({ navigation, route }) {
  const userProfileCardRef = useRef();

  useFocusEffect(
    useCallback(() => {
      userProfileCardRef.current.fetchUserProfile();
    }, [])
  );

  return (
    <View style={styles.container}>
      <View style={styles.appbar}>
        <Appbar.Action
          icon="menu"
          iconColor={Colors.primary600}
          size={32}
          onPress={() => navigation.openDrawer()}
        />

        <Appbar.Action
          icon="filter-variant"
          iconColor={Colors.primary600}
          size={32}
          onPress={() => navigation.navigate("FilterScreen")}
        />
      </View>

      <View style={styles.content}>
        <Title>BLINDER</Title>
        <UserProfileCard ref={userProfileCardRef} />
      </View>
    </View>
  );
}

export default MatchScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    height: "100%",
  },
  appbar: {
    marginTop: screenHeight * 0.04,
    width: "100%",
    height: 50,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  content: {
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
});
