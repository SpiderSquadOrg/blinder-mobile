import React, { useEffect, useState } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import Title from "../../components/ui/Title";
import Tabs from "../../components/ui/Tabs";
import { Divider } from "react-native-paper";
import LikesCards from "../../containers/LikesCards";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

function LikesScreen({ navigation, route }) {
  const [selectedTab, setselectedTab] = useState("whoLikesMe");
  const [whoLikesMeList, setWhoLikesMeList] = useState([
    {
      id: "1",
      name: "Batuhan",
    },
    {
      id: "2",
      name: "Oscar",
    },
    {
      id: "3",
      name: "Cem",
    },
    {
      id: "4",
      name: "Batuhan",
    },
    {
      id: "5",
      name: "Oscar",
    },
    {
      id: "6",
      name: "Cem",
    },
  ]);
  const [whoILikeList, setWhoILikeList] = useState([
    {
      id: "1",
      name: "Batuhan",
    },
    {
      id: "2",
      name: "Oscar",
    },
    {
      id: "3",
      name: "Cem",
    },
  ]);

  return (
    <View style={styles.container}>
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
      {selectedTab === "whoLikesMe" && (<LikesCards users={whoLikesMeList} withHeart={true} />)}
      {selectedTab === "whoILike" && (<LikesCards users={whoILikeList} withTakeBack={true} />)}
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
});
