import { TextInput, StyleSheet, View, Pressable, Text } from "react-native";
import React from "react";
import Colors from "../../constansts/Colors";

function InputField({ placeholder, onAddInput }) {
  const [text, setEnteredText] = React.useState("");
  const [isVisible, setIsVisible] = React.useState(true);

  function inputHandler(enteredText) {
    setEnteredText(enteredText);
    onAddInput(text);
  }

  function showPasswordHandler() {
    setIsVisible(!isVisible);
  }

  return (
    <>
      <View>
        <View>
          <TextInput
            onChangeText={inputHandler}
            value={text}
            placeholder={placeholder}
            secureTextEntry={isVisible}
            style={styles.inputContainer}
          />
        </View>
      </View>
      <View style={styles.showButton}>
        <Pressable onPress={showPasswordHandler}>
          <Text style={styles.showText}>Show Password</Text>
        </Pressable>
      </View>
    </>
  );
}

export default InputField;

const styles = StyleSheet.create({
  inputContainer: {
    height: 45,
    minWidth: "90%",
    margin: 12,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#BDBDBD",
    padding: 10,
    flexDirection: "row",
    alignItems: "flex-end",
  },

  showText: {
    color: Colors.primary500,
  },
  showButton: {
    alignSelf: "center",
  },
});
