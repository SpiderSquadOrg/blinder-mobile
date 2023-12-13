import React, { useEffect, useState } from "react";
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { Searchbar } from "react-native-paper";
import getStates from "../../../api/location/getStates";
import { Text } from "react-native";
const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

function SelectStateContainer({ ciso, setState, state }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [states, setStates] = useState([]);
  const [filteredStates, setFilteredStates] = useState([]);

  useEffect(() => {
    getStates(ciso).then((data) => {
      setStates(data);
    });
  }, []);

  useEffect(() => {
    setFilteredStates(
      states.filter((state) =>
        state.stateName.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [states, searchQuery]);

  const onChangeSearch = (query) => setSearchQuery(query);
  return (
    <View style={styles.container}>
      {state == null ? (
        <View style={styles.searchbar}>
          <Searchbar
            placeholder={"Şehir adını giriniz"}
            onChangeText={onChangeSearch}
            value={searchQuery}
          />
        </View>
      ) : null}
      {state == null ? (
        <View style={{ width: "90%" }}>
          {filteredStates.slice(0, 5).map((state, index) => (
            <TouchableOpacity
              style={styles.listItem}
              key={index}
              onPress={() => {
                setState(state)
              }}
            >
              <Text style={styles.listItemText}>{state.stateName}</Text>
            </TouchableOpacity>
          ))}
        </View>
      ) : null}
    </View>
  );
}

export default SelectStateContainer;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    marginVertical: screenHeight * 0.05,
    height: "100%",
    width: "100%",
  },
  button: {
    width: "80%",
    alignSelf: "center",
  },
  tabs: {
    width: "90%",
    height: screenHeight * 0.1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  searchbar: {
    width: "90%",
    minHeight: screenHeight * 0.05,
    marginBottom: screenHeight * 0.05,
  },
  header: {
    width: "90%",
    marginBottom: screenHeight * 0.02,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  listItem: {
    padding: 20,
    backgroundColor: "#f8f8f8",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  listItemText: {
    fontSize: 18,
  },
});
