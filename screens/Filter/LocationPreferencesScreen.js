import React, { useEffect, useState } from "react";
import {
  Dimensions,
  StyleSheet,
  View,
  TouchableOpacity,
} from "react-native";
import Tabs from "../../components/ui/Tabs";
import { Searchbar } from "react-native-paper";
import Header from "../../components/ui/Header";
import { FlatList, Text } from "react-native";

// Define your state variable
const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

function LocationPreferencesScreen({ navigation }) {
  const [selectedTab, setselectedTab] = useState("city");
  const [selectedLocation, setSelectedLocation] = useState({
    type: selectedTab,
    id: -1,
    name: "",
  }); // ["city", "country", "region"
  const [searchQuery, setSearchQuery] = useState("");
  const [cityData, setCityData] = useState([
    "Adana",
    "Adıyaman",
    "Afyonkarahisar",
    "Ağrı",
    "Amasya",
    "Ankara",
    "Antalya",
    "Artvin",
    "Aydın",
    "Balıkesir",
    "Bilecik",
    "Bingöl",
    "Bitlis",
    "Bolu",
    "Burdur",
    "Bursa",
  ]);
  const [countryData, setCountryData] = useState([
    "Türkiye",
    "Almanya",
    "İngiltere",
    "Fransa",
    "İtalya",
    "İspanya",
    "Portekiz",
    "Yunanistan",
    "Bulgaristan",
    "Rusya",
    "Amerika",
    "Çin",
    "Japonya",
    "Hindistan",
    "Pakistan",
    "İran",
    "Irak",
    "Suriye",
    "Mısır",
    "Libya",
    "Tunus",
    "Cezayir",
    "Fas",
    "Nijerya",
    "Gana",
    "Güney Afrika",
    "Avustralya",
    "Yeni Zelanda",
    "Kanada",
    "Meksika",
    "Arjantin",
    "Brezilya",
    "Şili",
    "Peru",
    "Kolombiya",
    "Venezuela",
    "Küba",
    "Honduras",
    "Guatemala",
    "Panama",
    "Kosta Rika",
    "Nikaragua",
    "El Salvador",
    "Belize",
    "Haiti",
    "Dominik Cumhuriyeti",
    "Porto Riko",
    "Küba",
    "Jamaika",
    "Bahamalar",
    "Trinidad ve Tobago",
    "Barbados",
    "Dominika",
    "Saint Lucia",
    "Antigua ve Barbuda",
    "Saint Vincent ve Grenadinler",
    "Grenada",
    "Saint Kitts ve Nevis",
    "Haiti",
    "Dominik Cumhuriyeti",
    "Porto Riko",
    "Küba",
    "Jamaika",
    "Bahamalar",
    "Trinidad ve Tobago",
    "Barbados",
    "Dominika",
    "Saint Lucia",
    "Antigua ve Barbuda",
    "Saint Vincent ve Grenadinler",
    "Grenada",
    "Saint Kitts ve Nevis",
  ]);
  const [regionData, setRegionData] = useState([]);
  const [listData, setListData] = useState([]);
  const onChangeSearch = (query) => setSearchQuery(query);

  useEffect(() => {
    let filteredData = [];
    if (selectedTab === "city") {
      filteredData = cityData.filter((city) =>
        city.toLowerCase().includes(searchQuery.toLowerCase())
      );
    } else if (selectedTab === "country") {
      filteredData = countryData.filter((country) =>
        country.toLowerCase().includes(searchQuery.toLowerCase())
      );
    } else if (selectedTab === "region") {
      filteredData = regionData.filter((region) =>
        region.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    setListData(filteredData);
  }, [selectedTab, searchQuery]);

  useEffect(() => {
    setSelectedLocation({
      type: selectedTab,
      id: -1,
      name: "",
    });
  }, [selectedTab]);

  const getHeader = () => {
    switch (selectedTab) {
      case "city":
        return "Şehir";
      case "country":
        return "Ülke";
      case "region":
        return "Kıta";
    }
  };

  const onPressListItem = (index, item) => {
    setSelectedLocation({
      type: selectedTab,
      id: index,
      name: item,
    });
  };

  useEffect(() => {
    if (selectedLocation.id !== -1) {
      navigation.navigate("FilterScreen", {
        selectedLocation: selectedLocation,
      });
    }
  }, [selectedLocation]);

  return (
    <View style={styles.container}>
      <View style={styles.tabs}>
        <Tabs
          buttons={[
            {
              value: "city",
              label: "Şehir",
            },
            {
              value: "country",
              label: "Ülke",
            },
            {
              value: "region",
              label: "Kıta",
            },
          ]}
          value={selectedTab}
          setValue={setselectedTab}
        />
      </View>
      <Header style={styles.header}>{getHeader()}</Header>
      <View style={styles.searchbar}>
        <Searchbar
          placeholder={`Seçmek istediğiniz ${
            getHeader().charAt(0).toLowerCase() + getHeader().slice(1)
          } adını giriniz`}
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </View>
      <FlatList
        style={{ width: "90%" }}
        data={listData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            style={styles.listItem}
            onPress={() => onPressListItem(index, item)}
          >
            <Text style={styles.listItemText}>{item}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

export default LocationPreferencesScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    marginVertical: screenHeight * 0.05,
    height: "100%",
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
