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
import searchSeries from "../../api/characteristics/searchSeries";
import addTvSeries from "../../api/characteristics/addTvSeries";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

function SeriesOptionsSearch({ selectedSeriesList, setSelectedSeriesList }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [seriesList, setSeriesList] = useState([]);

  useEffect(() => {
    if (searchQuery.length < 3) return;
    searchSeries(searchQuery, 10).then((data) => {
      setSeriesList(data);
    });
  }, [searchQuery]);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleSeriesSelect = async (selectedSeries) => {
    const isSeriesAlreadySelected = selectedSeriesList.some(
      (series) => series.imdbId === selectedSeries.imdbId
    );

    if (!isSeriesAlreadySelected) {
      setSelectedSeriesList((prevList) => [...prevList, selectedSeries]);
    }
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
        {seriesList.map((series, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleSeriesSelect(series)}
            style={[
              styles.seriesContainer,
              selectedSeriesList.includes(series)
                ? styles.selectedSeries
                : null,
            ]}
          >
            <View style={styles.listItems}>
              <View>
                <Image
                  source={{ uri: series.image }}
                  style={{
                    width: 60,
                    height: 60,
                    borderRadius: 12,
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
