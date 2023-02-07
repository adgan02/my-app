import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  TextInput,
} from "react-native";
import { Country, State, City } from "country-state-city";
const CountrySelecteds = ({ props, callback_objSendToEditprof }) => {
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedCountrys, setselectedCountrys] = useState(null);
  const [selectedStates, setSelectedStates] = useState(null);
  const [selectedCitys, setselectedCitys] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [showOtherFlatLists, setShowOtherFlatLists] = useState(true);
  const [showOtherFlatLists2, setShowOtherFlatLists2] = useState(true);
  useEffect(() => {
    let allCountries = Country.getAllCountries();
    let arrayList = allCountries
      .filter((country) =>
        country.timezones.find((timezone) =>
          timezone.zoneName.startsWith("Asia")
        )
      )
      .map((country) => ({
        name: country.name,
        isoCode: country.isoCode,
        zoneName: country.timezones.find((timezone) =>
          timezone.zoneName.startsWith("Asia")
        ).zoneName,
      }));
    setCountries(arrayList);
  }, []);

  useEffect(() => {
    if (selectedCountrys) {
      let states = State.getStatesOfCountry(selectedCountrys.isoCode);
      let stateData = states.map((state) => ({
        name: state.name,
        isoCode: state.isoCode,
        countryCode: selectedCountrys.isoCode,
      }));
      setStates(stateData);
    }
  }, [selectedCountrys]);
  useEffect(() => {
    if (selectedStates) {
      let cities = City.getCitiesOfState(
        selectedStates.countryCode,
        selectedStates.isoCode
      );
      if (cities.length === 0) {
        callback_objSendToEditprof({
          selectedCountrys,
          selectedStates,
          selectedCitys,
        });
        setTimeout(() => {
          props.navigation.goBack();
        }, 200);
      } else {
        let cityData = cities.map((city) => ({
          name: city.name,
          stateCode: selectedStates.isoCode,
          countryCode: selectedStates.countryCode,
        }));
        setCities(cityData);
      }
    }
  }, [selectedStates]);

  const filteredCountries = countries.filter((country) =>
    country.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredStates = states.filter((state) =>
    state.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredCities = cities.filter((city) =>
    city.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <View style={styles.container}>
      <View style={{ width: "100%", alignItems: "center",flexDirection:'row' ,justifyContent:'center' }}>
        <TouchableOpacity
          onPress={() => {
            setselectedCountrys(null);
            setSelectedStates(null);
            setselectedCitys(null);
            setShowOtherFlatLists(false);
          }}
        >
          <Text style={styles.statusText}>
            {selectedCountrys ? selectedCountrys.name : ""}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setSelectedStates(null);
            setselectedCitys(null);
            setShowOtherFlatLists2(false);
          }}
        >
          <Text style={styles.statusText}>
            {selectedStates ? selectedStates.name : ""}
          </Text>
        </TouchableOpacity>
      </View>

          
      <TextInput
        placeholder=" Search..."
        value={searchTerm}
        onChangeText={setSearchTerm}
        style={{ height: 40, borderColor: "gray", borderWidth: 1, width: 400 }}
      />
      {selectedCountrys === null && (
        <FlatList
          data={filteredCountries}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={
                selectedCountrys === item
                  ? styles.selectedItemContainer
                  : styles.itemContainer
              }
              onPress={() => {
                setselectedCountrys(item);
              }}
            >
              <Text
                style={
                  selectedCountrys === item
                    ? styles.selectedItemText
                    : styles.itemText
                }
              >
                {item.name}
              </Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.name}
        />
      )}
      {selectedStates === null && showOtherFlatLists && (
        <FlatList
          data={filteredStates}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={
                selectedStates === item
                  ? styles.selectedItemContainer
                  : styles.itemContainer
              }
              onPress={() => setSelectedStates(item)}
            >
              <Text
                style={
                  selectedStates === item
                    ? styles.selectedItemText
                    : styles.itemText
                }
              >
                {item.name}
              </Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.name}
        />
      )}
      {showOtherFlatLists && showOtherFlatLists2 && (
        <FlatList
          data={filteredCities}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={
                selectedStates === item
                  ? styles.selectedItemContainer
                  : styles.itemContainer
              }
              onPress={() => {
                console.log(item);
                callback_objSendToEditprof({
                  selectedCountrys,
                  selectedStates,
                  selectedCitys: item,
                });
                setTimeout(() => {
                    console.log("OUTPUT:",callback_objSendToEditprof)
                  props.navigation.goBack();
                }, 500);
              }}
            >
              <Text
                style={
                  selectedStates === item
                    ? styles.selectedItemText
                    : styles.itemText
                }
              >
                {item.name}
              </Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.name}
        />
      )}
      <View style={[styles.underline]} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#EEE1FF",
    justifyContent: "center",
    alignItems: "center",
  },
  itemContainer: {
    backgroundColor: "white",
    padding: 8,
    width: 400,
    margin: 1,
  },
  underline: {
    height: 2,
    backgroundColor: "black",
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
  card: {
    alignItems: "center",
    backgroundColor: "red",
  },
  statusText: {
    backgroundColor:'#C6A2F5',
    margin:5,
    fontSize: 15,
    borderRadius:5,
    padding:3,
    paddingHorizontal:8
  },
});

export default CountrySelecteds;
