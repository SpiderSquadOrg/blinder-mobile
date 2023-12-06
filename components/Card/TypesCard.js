import { View, StyleSheet, Dimensions, ScrollView, Text } from "react-native";

import SubTitle from "../ui/SubTitle";
import Colors from "../../constansts/Colors";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

function TypesCard({ typeList, title }) {
  return (
    <View>
      <View style={styles.titleContainer}>
        <SubTitle style={{ color: "gray" }}>{title}</SubTitle>
      </View>
      <ScrollView horizontal>
        {typeList.map((type, index) => (
          <View style={styles.outerContainer}>
            <View key={index} style={styles.innerContainer}>
              <Text style={styles.title}>{type}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

export default TypesCard;

const styles = StyleSheet.create({
  outerContainer: {
    borderRadius: 28,
    margin: 8,
    overflow: "hidden",
    borderColor: Colors.accent500,
    borderWidth: 1,
    backgroundColor: "#e6dcdc",
    marginTop: screenHeight * 0.02,
  },
  innerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    height: screenHeight * 0.05,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  titleContainer: {
    alignItems: "flex-start",
    marginLeft: screenWidth * 0.05,
  },
});
