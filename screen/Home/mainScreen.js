import * as React from "react";
import { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const HomeScreen = (props) => {
  return (
    <View style={styles.container}>
    <TouchableOpacity onPress={() => {
              setTimeout(() => {
                console.log(props)
                props.navigation.navigate("card");
              }, 500);
              // handle onPress
            }}>
    <View style={styles.card}>
      <Text style={styles.cardText}>Predict yor Occupations</Text>
        <Text style={styles.buttonText}>Press me</Text>

    </View>
    </TouchableOpacity>
  </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop:20,
    backgroundColor:'#EEE1FF'
  },
  card: {
    width: 350,
    height: 200,
    backgroundColor: '#DD95FF',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8,
    padding: 20,
    borderRadius: 10,
  },
  cardText: {
    fontSize: 20,
    marginBottom: 20,
  },
  buttonContainer: {
    backgroundColor: '#4285F4',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
  },
});

export default HomeScreen;

