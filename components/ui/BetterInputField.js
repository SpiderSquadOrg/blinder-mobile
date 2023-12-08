import { TextInput, StyleSheet, View } from "react-native";
import React from "react";

function BetterInputField({ placeholder, text, setText, style, onChange }) {
  function inputHandler(enteredText) {
    setText(enteredText);
    onChange(enteredText);
  }
  const multilineStyle = {
    minHeight: 80,
    textAlignVertical: "top",
    marginBottom: 30,
  };

  return (
    <View style={style}>
      <TextInput
        style={[
          styles.input,
          text.includes("\n") ? { ...multilineStyle } : undefined,
        ]}
        onChangeText={inputHandler}
        value={text}
        placeholder={placeholder}
        onSubmitEditing={() => {
          setText(text + "\n");
        }}
        multiline={true}
      />
    </View>
  );
}

export default BetterInputField;

const styles = StyleSheet.create({
  input: {
    minHeight: 35,
    flex: 1,
    margin: 12,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#BDBDBD",
    padding: 10,
  },
});
