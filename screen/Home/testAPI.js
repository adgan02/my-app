import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import {Country,State,City} from "country-state-city";

const API = () => {
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedState, setSelectedState] = useState(null);

  useEffect(() => {
    setCountries(Country.getCountries());
  }, []);

  useEffect(() => {
    if (selectedCountry) {
        console.log("Selected country: ", selectedCountry);
      setStates(State.getStatesByCountryId(selectedCountry.id));
      setSelectedState(null);
      setCities([]);
    }
  }, [selectedCountry]);

  useEffect(() => {
    if (selectedState) {
      setCities(City.getCitiesByStateId(selectedState.id));
    }
  }, [selectedState]);

  return (
    <View style={styles.container}>
      <FlatList
        data={countries}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={
              selectedCountry === item
                ? styles.selectedItemContainer
                : styles.itemContainer
            }
            onPress={() => setSelectedCountry(item)}
          >
            <Text
              style={
                selectedCountry === item
                  ? styles.selectedItemText
                  : styles.itemText
              }
            >
              {item.name}
            </Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
      <FlatList
        data={states}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={
              selectedState === item
                ? styles.selectedItemContainer
                : styles.itemContainer
            }
            onPress={() => setSelectedState(item)}
          >
            <Text
              style={
                selectedState === item
                  ? styles.selectedItemText
                  : styles.itemText
              }
            >
              {item.name}
            </Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
      <FlatList
        data={cities}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.itemText}>{item.name}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
  itemContainer: {
    backgroundColor: "#eee",
    padding: 8,
    marginVertical: 8,
  },
  selectedItemContainer: {
    backgroundColor: "#ddd",
    padding: 8,
    marginVertical: 8,
  },
  itemText: {
    fontSize: 16,
  },
  selectedItemText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default API;
