import React from "react";
import { Dimensions, FlatList, StyleSheet, View } from "react-native";
import MiniUserCard from "../UserCards/MiniUserCard";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

function LikesCards({ users, withHeart, withTakeBack }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={users}
        renderItem={({ item }) => (
          <MiniUserCard
            user={item}
            withHeart={withHeart}
            withTakeBack={withTakeBack}
          />
        )}
        keyExtractor={(item) => item.id}
        numColumns={2}
        style={styles.flatList}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  flatList: {
    width: "100%",
    marginTop: screenHeight * 0.02,
  },
});

export default LikesCards;
