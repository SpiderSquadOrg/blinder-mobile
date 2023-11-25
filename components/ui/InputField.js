import { TextInput, StyleSheet, View } from "react-native";
import React from "react";

function InputField({ placeholder, onAddInput }) {
  const [text, onChangeText] = React.useState("");

  function inputHandler(enteredText) {
    onChangeText(enteredText);
  }

  function addInputHandler() {
    onAddInput(text);
    onChangeText("");
  }

  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={inputHandler}
        value={text}
        placeholder={placeholder}
      />
    </View>
  );
}

export default InputField;

const styles = StyleSheet.create({
  input: {
    height: 45,
    minWidth: "90%",
    margin: 12,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#BDBDBD",
    padding: 10,
  },
});
