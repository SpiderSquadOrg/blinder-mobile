import React, { useEffect, useState } from "react";
import {
  Button,
  Dimensions,
  FlatList,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Searchbar } from "react-native-paper";
import { AntDesign } from "@expo/vector-icons";
import getCountries from "../../../api/location/getCountries";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

function SelectCountryContainer({
  setCiso,
  setCountry,
  country,
  countryModalVisible,
  setCountryModalVisible,
}) {
  const [searchQuery, setSearchQuery] = useState("");
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    getCountries().then((data) => {
      setCountries(data);
    });
  }, []);

  useEffect(() => {
    setFilteredCountries(
      countries.filter((country) =>
        country.countryName.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [countries, searchQuery]);

  const onChangeSearch = (query) => setSearchQuery(query);

  const handleCountryButtonPress = (country) => {
    setCiso(country.iso2);
    setCountry(country);
    setSearchQuery("");
    setCountryModalVisible(false);
  };

  return (
    <Modal
      style={styles.container}
      animationType="slide"
      transparent={true}
      visible={countryModalVisible}
      onRequestClose={() => {
        setCountryModalVisible(!countryModalVisible);
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <TouchableOpacity
            style={{ position: "absolute", right: 15, top: 15 }}
            onPress={() => {
              setCountryModalVisible(!countryModalVisible);
              setSearchQuery("");
            }}
          >
            <AntDesign name="close" size={24} color="black" />
          </TouchableOpacity>

          <View style={styles.searchbar}>
            <Searchbar
              placeholder={"Ülke adını giriniz"}
              onChangeText={onChangeSearch}
              value={searchQuery}
            />
          </View>

          <ScrollView style={{ width: "90%" }}>
            {filteredCountries.map((country, index) => (
              <TouchableOpacity
                style={styles.listItem}
                key={index}
                onPress={() => handleCountryButtonPress(country)}
              >
                <Text style={styles.listItemText}>{country.countryName}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
}

export default SelectCountryContainer;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
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
