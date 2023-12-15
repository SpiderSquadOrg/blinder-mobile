import React, { useEffect, useState } from "react";
import {
  Dimensions,
  Modal,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
} from "react-native";
import { Searchbar } from "react-native-paper";
import { AntDesign } from "@expo/vector-icons";
import getStates from "../../../api/location/getStates";
const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

function SelectStateContainer({
  ciso,
  setState,
  state,
  stateModalVisible,
  setStateModalVisible,
}) {
  const [searchQuery, setSearchQuery] = useState("");
  const [states, setStates] = useState([]);
  const [filteredStates, setFilteredStates] = useState([]);

  useEffect(() => {
    if (ciso) {
      getStates(ciso).then((data) => {
        const sortedData = data.sort((a, b) =>
          a.stateName.localeCompare(b.stateName)
        );
        setStates(sortedData);
      });
    }
  }, [ciso]);

  useEffect(() => {
    setFilteredStates(
      states.filter((state) =>
        state.stateName.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [states, searchQuery]);

  const onChangeSearch = (query) => setSearchQuery(query);
  return (
    <Modal
      style={styles.container}
      animationType="slide"
      transparent={true}
      visible={stateModalVisible}
      onRequestClose={() => {
        setStateModalVisible(!stateModalVisible);
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <TouchableOpacity
            style={{ position: "absolute", right: 15, top: 15 }}
            onPress={() => {
              setStateModalVisible(false);
              setSearchQuery("");
            }}
          >
            <AntDesign name="close" size={24} color="black" />
          </TouchableOpacity>
          <View style={styles.searchbar}>
            <Searchbar
              placeholder={"Şehir adını giriniz"}
              onChangeText={onChangeSearch}
              value={searchQuery}
            />
          </View>

          <ScrollView style={{ width: "90%" }}>
            {filteredStates.map((state, index) => (
              <TouchableOpacity
                style={styles.listItem}
                key={index}
                onPress={() => {
                  setState(state);
                  setStateModalVisible(false);
                }}
              >
                <Text style={styles.listItemText}>{state.stateName}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </View>
    </Modal>
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
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    width: screenWidth * 0.9,
    height: screenHeight * 0.6,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
