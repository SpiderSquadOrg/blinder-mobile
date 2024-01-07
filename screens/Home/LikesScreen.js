import React, { useCallback, useEffect, useState } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import Tabs from "../../components/ui/Tabs";
import { Appbar } from "react-native-paper";
import LikesCards from "../../containers/LikesCards";
import Colors from "../../constansts/Colors";
import getUsersWhoLike from "../../api/possibleMatches/getUsersWhoLike";
import getLikedUsers from "../../api/possibleMatches/getLikedUsers";
import { useFocusEffect } from "@react-navigation/native";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

function LikesScreen({ navigation, route }) {
  const [selectedTab, setselectedTab] = useState("whoLikesMe");
  const [whoLikesMeList, setWhoLikesMeList] = useState([]);
  const [whoILikeList, setWhoILikeList] = useState([]);

  useFocusEffect(
    useCallback(() => {
      getUsersWhoLike()
        .then((res) => {
          const unmatchedUsers = res
            .map((match) => {
              match.from.similarityScore = match.similarityScore;
              match.from.id = match.id;
              return match.from;
            })
          setWhoLikesMeList(unmatchedUsers);

          console.log(whoLikesMeList);
        })
        .catch((err) => {
          console.log(err);
        });
    }, [])
  );

  useFocusEffect(
    useCallback(() => {
      getLikedUsers()
        .then((res) => {
          setWhoILikeList(
            res.map((match) => {
              //console.log(match.id);
              match.to.similarityScore = match.similarityScore;
              match.to.id = match.id;
              return match.to;
            })
          );
        })
        .catch((err) => {
          console.log(err);
        });
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
      </View>
      <View style={styles.tabs}>
        <Tabs
          buttons={[
            {
              value: "whoLikesMe",
              label: "Beni Beğenenler",
            },
            {
              value: "whoILike",
              label: "Benim Beğendiklerim",
            },
          ]}
          value={selectedTab}
          setValue={setselectedTab}
          style={{ width: screenWidth * 0.9 }}
        />
      </View>
      {selectedTab === "whoLikesMe" && (
        <LikesCards users={whoLikesMeList} withHeart={true} />
      )}
      {selectedTab === "whoILike" && (
        <LikesCards users={whoILikeList} withTakeBack={true} />
      )}
    </View>
  );
}

export default LikesScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    alignItems: "center",
    height: "100%",
  },
  tabs: {
    width: "90%",
    marginTop: screenHeight * 0.02,
    height: screenHeight * 0.05,
    backgroundColor: "#ffffff",
    alignItems: "center",
  },
  appbar: {
    marginTop: screenHeight * 0.04,
    width: "100%",
    height: 50,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
});
