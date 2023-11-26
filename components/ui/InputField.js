import { TextInput, StyleSheet, View } from "react-native";
import React from "react";

function InputField({ placeholder, onAddInput }) {
  const [text, setEnteredText] = React.useState("");

  function inputHandler(enteredText) {
    setEnteredText(enteredText);
    onAddInput(text);
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
