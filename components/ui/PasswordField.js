import React from "react";
import { TextInput, StyleSheet, View, Pressable } from "react-native";
import { Octicons } from "@expo/vector-icons";
import Colors from "../../constansts/Colors";

function InputField({ placeholder, onAddInput }) {
  const [text, setEnteredText] = React.useState("");
  const [isVisible, setIsVisible] = React.useState(true);

  function inputHandler(enteredText) {
    setEnteredText(enteredText);
    onAddInput(enteredText);
  }

  function showPasswordHandler() {
    setIsVisible(!isVisible);
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        onChangeText={inputHandler}
        value={text}
        placeholder={placeholder}
        secureTextEntry={isVisible}
        style={styles.input}
      />
      <Pressable style={styles.showButton} onPress={showPasswordHandler}>
        <Octicons name={isVisible ? "eye" : "eye-closed"} size={24} color="black" />
      </Pressable>
    </View>
  );
}

export default InputField;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    height: 45,
    minWidth: "90%",
    margin: 12,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#BDBDBD",
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
  },
  showButton: {
    marginLeft: 8,
  },
});
