import {
  Image,
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
 
} from "react-native";
// import OTPInputView from 'react-native-otp-input';
import React, { useEffect, useState } from "react";
import IconFeather from "react-native-vector-icons/Feather";
import Ionicons from "react-native-vector-icons/Ionicons";

const FirstScreen = ({ props, props_phone }) => {
  return (
    <View style={styles.cardcontainer}>
      <Image source={require("../../assets/bg.png")} style={styles.cardContainer} />

      <View style={styles.card}>
        <View style={styles.Reff}>
          <Text style={styles.text}>Astro</Text>
        </View>
      </View>

      <View style={styles.card2}>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("login");
          }}
          style={styles.button}
        >
          <Ionicons
            name="call"
            size={30}
            style={{ marginLeft: 20, top: "9%", padding: 0, color: "white", }}
          />
          <Text style={styles.buttonText}> Login with Phone Number</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("invite");
          }}
          style={styles.button1}
        >
          <Ionicons
          name="logo-facebook"
            size={30}
            style={{ marginLeft: 20, top: "9%", padding: 0, color: "white" }}
          />
          <Text style={styles.buttonText1}> Log in with Facebook</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("MainHome");
          }}
          style={styles.button2}
        >
          <Ionicons
          name="mail"
            size={30}
            style={{ marginLeft: 20, top: "9%", padding: 0, color: "white", }}
          />
          <Text style={styles.buttonText2}>Log in with Mail</Text>
        </TouchableOpacity>

        <View style={styles.Reff}>
          <Text style={styles.text2}>Powered by Trainee </Text>
          <Text style={styles.text2}>@ East Innovation Company Limited </Text>
        </View>
      </View>
    </View>
  );
};
export default FirstScreen;
const styles = StyleSheet.create({
  cardContainer: {
    alignItems: "center",
    width: "100%",
    height: "100%",
  },

  card: {
    width: "100%",
    padding: 0,
    borderRadius: 5,
    alignItems: "center",
    position: "absolute",
    top: 60,
    flexDirection: "column",
  },
  card2: {
    width: "100%",
    padding: 0,
    borderRadius: 5,
    alignItems: "center",
    position: "absolute",
    top: 500,
    flexDirection: "column",
  },

  text: {
    fontWeight: "bold",
    position: "relative",
    fontSize: 50,
    textAlign: "center",
    color: "white",
    top: "430%",
  },
  text2: {
    fontWeight: "bold",
    position: "relative",
    fontSize: 10,
    textAlign: "center",
    color: "white",
    top: "400%",
  },
  buttonText: {
    fontWeight: " ",
    position: "relative",
    fontSize: 19,
    textAlign: "center",
    color: "white",
    left: 18,
    top: -21,
  },

  buttonText1: {
    fontWeight: " ",
    position: "relative",
    fontSize: 19,
    textAlign: "center",
    color: "white",
    top: -22,
  },
  buttonText2: {
    fontWeight: " ",
    position: "relative",
    fontSize: 19,
    textAlign: "center",
    color: "white",
    left: -20,
    top: -22,
  },

  button: {
    backgroundColor: "#C6A2F5",
    top: 0,
    padding: 2,
    borderRadius: 20,
    borderColor: "white",
    borderWidth: 2,
    width: "80%",
    height: 50,
  },
  button1: {
    backgroundColor: "#C6A2F5",
    top: 25,
    padding: 2,
    borderRadius: 20,
    borderColor: "white",
    borderWidth: 2,
    width: "80%",
    height: 50,
  },
  button2: {
    backgroundColor: "#C6A2F5",
    top: 50,
    padding: 2,
    borderRadius: 20,
    borderColor: "white",
    borderWidth: 2,
    width: "80%",
    height: 50,
  },
});
