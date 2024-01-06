import { View, StyleSheet, Pressable, Text } from "react-native";
import Colors from "../../constansts/Colors";

function PrimaryButton({
  children,
  onPress,
  style,
  backgroundColor,
  textColor,
  fontSize,
  height,
  width,
  disabled,
}) {
  return (
    <View style={[styles.outerContainer, style]}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [
                {
                  ...styles.innerContainer,
                  backgroundColor: backgroundColor
                    ? backgroundColor
                    : styles.innerContainer.backgroundColor,
                  height: height ? height : styles.innerContainer.height,
                  width: width ? width : styles.innerContainer.width,
                },
                styles.pressed,
              ]
            : {
                ...styles.innerContainer,
                opacity: disabled ? 0.5 : 1,
                backgroundColor: backgroundColor
                  ? backgroundColor
                  : styles.innerContainer.backgroundColor,
                height: height ? height : styles.innerContainer.height,
                width: width ? width : styles.innerContainer.width,
              }
        }
        onPress={onPress}
        disabled={disabled}
      >
        <Text
          style={{
            ...styles.text,
            color: textColor ? textColor : styles.text.color,
            fontSize: fontSize ? fontSize : styles.text.fontSize,
          }}
        >
          {children}
        </Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  outerContainer: {
    borderRadius: 28,
    margin: 8,
    overflow: "hidden",
    borderColor: "#DADCE0",
    borderWidth: 1,
  },
  innerContainer: {
    backgroundColor: Colors.primary500,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 8,
    paddingHorizontal: 32,
    elevation: 2,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  pressed: {
    opacity: 0.75,
  },
  text: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
});
