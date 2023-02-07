import {
  Image,
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  ImageBackground,
} from "react-native";
import React, { useEffect, useState } from "react";
import IconFeather from "react-native-vector-icons/Feather";
import OTPTextInput from "react-native-otp-textinput";

const InviteScreen = ({ props, props_scanned }) => {
  const [inviteOTP, setinviteOTP] = useState("");
  function inviteCodeActive() {
    console.log(inviteOTP);
  }
  return (
    <View style={{ flex: 1, }} >
      <ImageBackground
        source={require("../../assets/wallpaperr.png")}
        style={[styles.container, styles.columnFlex]}
      >
        <View style={styles.Image}>
          <Image
            source={require("../../assets/invite-Logo.png")}
            style={styles.Llogo}
          />
        </View>
        <View style={styles.TextBox}>
          <Text style={styles.text}>Invitation</Text>
          <Text>Enter your invitation number</Text>
        </View>
        <View style={styles.cardContainer}>
          <View style={styles.card}>
            <View style={styles.OTP}>
              <OTPTextInput
                autoFocus={false}
                textInputStyle={{ width: 25 }}
                inputCount={8}
                handleTextChange={(text) => setinviteOTP(text)}
              />
            </View>
            <View style={[{ flexDirection: "row", justifyContent: "center" }]}>
              <TouchableOpacity
                onPress={() => {
                  console.log(inviteCodeActive());
                  setTimeout(() => {
                    console.log(props);
                    props.navigation.push("MainHome")
                  }, 500);
                }} style={styles.button} >
                <Text style={styles.buttonText}>Next</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{ justifyContent: 'center', alignItems: 'center', marginLeft: 5 }}
                onPress={() => { props.navigation.navigate("scan"); }}>
                <IconFeather
                  name="maximize"
                  size={40}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View >
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  columnFlex: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  Image: {
    flexDirection: 'column',
    alignItems: "center",
  },
  Llogo: {
    width: 150,
    height: 180,
  },
  TextBox: {
    flexDirection: 'column',
    alignItems: "center",
  },
  text: {
    fontWeight: "bold",
    fontSize: 22,
    color: "black",
  },
  cardContainer: {
    bottom: 25,
    justifyContent: "center",
    flex: 1,
    alignItems: "center",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 4,
  },
  card: {
    backgroundColor: "#F3EAFF",
    width: "90%",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },

  button: {
    backgroundColor: "#9758E8",
    borderRadius: 5,
    padding: 8,
    marginVertical: 5,
    flex: 1
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },

  TextInput: {
    alignItems: "center",
    letterSpacing: 15,
    fontSize: 30,
    fontWeight: "bold",
    color: "#383838",
  },
});

export default InviteScreen;