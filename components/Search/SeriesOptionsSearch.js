import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Text,
  Image,
  Dimensions,
  TextInput,
} from "react-native";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

function SeriesOptionsSearch({ seiresData, onSelected }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredSeries, setFilteredSeries] = useState(seiresData.slice(0, 9));
  const [selectedSeriesList, setSelectedSeriesList] = useState([]);
  const [selectedSeries, setSelectedSeries] = useState(null);

  useEffect(() => {
    onSelected(selectedSeriesList);
  }, [selectedSeriesList]);

  const handleSearch = (query) => {
    const filtered = seiresData.filter((series) =>
      series.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredSeries(filtered.slice(0, 9));
    setSearchQuery(query);
  };

  const handleSeriesList = (selectedSeries) => {
    setSelectedSeriesList((prevList) => [...prevList, selectedSeries]);
  };

  return (
    <View style={{ padding: screenWidth * 0.03 }}>
      <TextInput
        style={{
          height: screenHeight * 0.05,
          borderRadius: 8,
          borderColor: "gray",
          borderWidth: 1,
          backgroundColor: "#f8f8f8",
          marginBottom: screenHeight * 0.02,
          padding: 5,
        }}
        placeholder="Dizi Ara..."
        value={searchQuery}
        onChangeText={handleSearch}
      />
      <ScrollView>
        {filteredSeries.map((series, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleSeriesList(series)}
            style={[
              styles.seriesContainer,
              selectedSeries === series ? styles.selectedSeries : null,
            ]}
          >
            <View style={styles.listItems}>
              <View>
                <Image
                  source={{ uri: series.imageUrl }}
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: 50,
                    marginRight: screenWidth * 0.03,
                  }}
                />
              </View>
              <View style={{ marginTop: screenHeight * 0.01 }}>
                <Text style={styles.name}>{series.name}</Text>
                <Text style={styles.year}>{series.year}</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

export default SeriesOptionsSearch;

const styles = StyleSheet.create({
  listItems: {
    flexDirection: "row",
    marginVertical: screenHeight * 0.01,
    backgroundColor: "#f8f8f8",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
  year: {
    fontSize: 14,
    color: "gray",
  },
  selectedSeries: {
    opacity: 0.75,
  },
});
