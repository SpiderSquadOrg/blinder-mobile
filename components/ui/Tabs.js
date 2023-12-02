import { SafeAreaView, StyleSheet } from "react-native";
import { SegmentedButtons } from "react-native-paper";
import { DefaultTheme, Provider } from "react-native-paper";
import Colors from "../../constansts/Colors";

/*
buttons={[
    {
        value: "walk",
        label: "Walking",
    },
    {
        value: "train",
        label: "Transit",
    }
*/
const Tabs = ({ buttons, value, setValue, style }) => {
  return (
    <Provider theme={theme}>
      <SafeAreaView style={{ ...styles.container, ...style }}>
        <SegmentedButtons
          value={value}
          onValueChange={setValue}
          buttons={buttons}
        />
      </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
});

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    secondaryContainer: Colors.primary600,
    onSecondaryContainer: "white",
  },
};

export default Tabs;
