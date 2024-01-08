import React, { useEffect, useState } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import GenderFilter from "../../containers/GenderFilter";
import AgeFilter from "../../containers/AgeFilter";
import LocationFilter from "../../containers/LocationFilter";
import PrimaryButton from "../../components/Button/PrimaryButton";
import getGenders from "../../api/gender/getGenders";
import { useLocation } from "../../contexts/LocationContext";
import updateFilterByUserId from "../../api/filter/updateFilterByUserId";
import { useUser } from "../../contexts/UserContext";
import getFilterByUserId from "../../api/filter/getFilterByUserId";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

function FilterScreen({ navigation, route }) {
  const { user } = useUser();

  const [genders, setGenders] = useState([]);
  const [selectedGenders, setSelectedGenders] = useState([]);
  const [ageRange, setAgeRange] = useState([25, 45]);
  const { country, state, setCountryIso2, setStateIso2 } = useLocation();

  const [isLoading, setIsLoading] = useState(false);
  const [filter, setFilter] = useState(null);

  useEffect(() => {
    getGenders()
      .then((res) => {
        setGenders(res.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    getFilterByUserId(user.userId)
      .then((res) => {
        setFilter(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    if (filter) {
      setSelectedGenders(filter.genders);
      setCountryIso2(filter.countryIso2);
      setStateIso2(filter.stateIso2);
      setAgeRange([filter.ageLowerBound, filter.ageUpperBound]);
    }
  }, [filter]);

  const gendersHandler = (gender) => {
    if (selectedGenders.map((s) => s.name).includes(gender.name)) {
      setSelectedGenders((prevGenders) =>
        prevGenders.filter((g) => g.name != gender.name)
      );
      return;
    }
    setSelectedGenders((prevGenders) => [...prevGenders, gender]);
  };

  const handleApplyFilter = async () => {
    setIsLoading(true);

    await updateFilterByUserId(user.userId, {
      genders: selectedGenders?.map((g) => g.name),
      countryIso2: country?.countryIso2,
      stateIso2: state?.stateIso2,
      ageLowerBound: ageRange[0],
      ageUpperBound: ageRange[1],
    });
    navigation.goBack();
    setIsLoading(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.filterContainer}>
        <GenderFilter
          genders={genders}
          selectedGenders={selectedGenders}
          gendersHandler={gendersHandler}
        />
        <AgeFilter
          style={{ marginVertical: 20 }}
          values={ageRange}
          setValues={setAgeRange}
        />
        <LocationFilter
          navigation={navigation}
          selectedLocation={
            route.params?.selectedLocation ? route.params.selectedLocation : ""
          }
          style={{ marginVertical: 20 }}
        />
      </View>
      <PrimaryButton
        style={styles.button}
        height={50}
        onPress={handleApplyFilter}
        disabled={isLoading}
      >
        Filtreleri Uygula
      </PrimaryButton>
    </View>
  );
}

export default FilterScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    marginVertical: screenHeight * 0.05,
    height: "100%",
  },
  filterContainer: {
    width: "100%",
    height: "80%",
    backgroundColor: "#fff",
    alignItems: "center",
  },
  button: {
    width: "80%",
    alignSelf: "center",
  },
});
