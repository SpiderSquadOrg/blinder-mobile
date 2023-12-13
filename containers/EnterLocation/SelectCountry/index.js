import React, { useEffect, useState } from "react";
import {
  Button,
  Dimensions,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Searchbar } from "react-native-paper";
import getCountries from "../../../api/location/getCountries";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

function SelectCountryContainer({ setCiso, setCountry, country }) {
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

  return (
    <View style={styles.container}>
      {country == null ? (
        <View style={styles.searchbar}>
          <Searchbar
            placeholder={"Ülke adını giriniz"}
            onChangeText={onChangeSearch}
            value={searchQuery}
            onPress={() => setCountry(null)}
          />
        </View>
      ) : null}
      {country == null ? (
        <View style={{ width: "90%" }}>
          {filteredCountries.slice(0, 5).map((country, index) => (
            <TouchableOpacity
              style={styles.listItem}
              key={index}
              onPress={() => {
                setCiso(country.iso2);
                setCountry(country);
                setSearchQuery("");
                setCountries([]);
              }}
            >
              <Text style={styles.listItemText}>{country.countryName}</Text>
            </TouchableOpacity>
          ))}
        </View>
      ) : null}
    </View>
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
});
