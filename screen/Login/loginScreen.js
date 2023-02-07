import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  ImageBackground,
  SafeAreaView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import PhoneInput from "react-native-phone-number-input";
import React, { useState, useRef } from "react";
import { LoginService, PutService } from "../../hook/serviceAuth";
import Ionicons from "react-native-vector-icons/Ionicons";
const LoginScreen = ({ props, callback_objSendToOtp }) => {
  const phoneInputRef = useRef(null);
  const [countryCode, setCountryCode] = useState("");
  const [phone, setphoneNumber] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [formattedValue, setFormattedValue] = useState("");
  return (
    <ImageBackground
      source={require("../../assets/wallpaperr.png")}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss(50)}>
        <SafeAreaView style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}>
          {/* Title&Subtitle */}
          <View style={styles.TextBox}>
            <Text style={styles.text}>Astro</Text>
            {/* <Text style={styles.subtext}>
          Add your phone number, I’ll end you verification code so weknow
          you’re real
        </Text> */}
          </View>
          {/*Phone */}
          <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-start' }}>
            <PhoneInput
              ref={phoneInputRef}
              autoFocus={true}
              containerStyle={{ borderRadius: 7 }}
              textContainerStyle={{ borderRadius: 7 }}
              defaultCode="TH"
              onChangeText={(text) => setphoneNumber(text)}
              onChangeFormattedText={(text) => {
                setFormattedValue(text);
                setCountryCode(phoneInputRef.current?.getCountryCode() || "");
              }}
              value={phone}
              textStyle={{ fontSize: 15, color: "black" }}
              placeholder="Enter your phone number"
              placeholderTextColor="#C7C7CD"
              underlineColorAndroid="transparent"
              flagStyle={{ width: 10, height: 20 }}
              textProps={{ placeholder: "+1" }}
              textInputProps={{ maxLength: 9 }}
            />
            {errorMessage != "" ? (
              <Text style={{ color: 'red', marginTop: 5, textAlign: 'center' }} >
                {errorMessage}
              </Text>) : (null)}
            <TouchableOpacity
              onPress={async () => {
                if (phone.length < 9) {
                  setErrorMessage("Phone number should be at least 10 digits");
                } else if (!/^\d+$/.test(phone)) {
                  setErrorMessage(
                    "Phone number should contain only numbers between 0-9."
                  );
                } else {
                  // login Service
                  // UIFMWOEK-61698466584646843564001
                  // UIFMWOEK-61698466584646843564002
                  let getLoginService = await LoginService(2, JSON.stringify({
                    username: phone,
                    imeiCode: "UIFMWOEK-61698466584646843564001"
                  }), "/auth/otp");
                  try {
                    console.log(getLoginService);
                    if (getLoginService != undefined) {
                      setTimeout(() => {
                        callback_objSendToOtp({ formattedValue, ...getLoginService, });
                        if (getLoginService.checkUserExists == true && getLoginService.checkPassword == false) {
                          callback_objSendToOtp({ formattedValue, ...getLoginService, countryPhone: 66, typeLogin: 2 });
                          props.navigation.navigate("setPass");
                        } if (getLoginService.checkPassword == true) {
                          callback_objSendToOtp({ formattedValue, ...getLoginService, countryPhone: 66, typeLogin: 1 });
                          props.navigation.navigate("setPass");
                        } else {
                          callback_objSendToOtp({ formattedValue, ...getLoginService, countryPhone: 66, typeLogin: 2 });
                          props.navigation.navigate("otp");
                        }
                      }, 500);
                    } else {
                      console.log("test");
                      setErrorMessage("...Phone number is in Processing...")
                    }
                  } catch (error) {
                    console.log(error);
                  }
                  // by Pass
                  // setTimeout(() => {
                  //   callback_objSendToOtp({
                  //     formattedValue,
                  //     otp: "064076",
                  //     username: "884005798",
                  //     refferalcode: "NJSANDS",
                  //   });
                  //   props.navigation.navigate("otp");
                  // }, 500);
                }
              }}
              style={styles.button} >
              <Text style={styles.buttonText}>Sign in</Text>
            </TouchableOpacity>
            <View style={{ height: 0.89, backgroundColor: 'white', marginTop: 10, opacity: 0.5 }} />
            <View style={{ height: 50, marginTop: 5, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
              <TouchableOpacity
                onPress={() => {
                  props.navigation.navigate("MainHome");
                }}
                style={{
                  flex: 1,
                  backgroundColor: "#C6A2F5",
                  borderRadius: 20,
                  borderColor: "white",
                  borderWidth: 2,
                  paddingHorizontal: 10,
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <Ionicons
                  name="mail"
                  size={30}
                  style={{ color: "white", }}
                />
                <Text style={{ fontSize: 19, color: 'white' }}>
                  Email
                </Text>
              </TouchableOpacity>
              <Text style={{ marginHorizontal: 20, fontSize: 20, color: 'white' }}>
                OR
              </Text>
              <TouchableOpacity
                onPress={() => {
                  props.navigation.navigate("MainHome");
                }}
                style={{
                  flex: 1,
                  backgroundColor: "#C6A2F5",
                  borderRadius: 20,
                  borderColor: "white",
                  borderWidth: 2,
                  paddingHorizontal: 10,
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <Ionicons
                  name="logo-facebook"
                  size={30}
                  style={{ color: "white", }}
                />
                <Text style={{ fontSize: 19, color: 'white' }}>
                  Facebook
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ height: 50, flexDirection: 'column', }}>
            <Text style={styles.text2}>Powered by Trainee </Text>
            <Text style={styles.text2}>@ East Innovation Company Limited </Text>
          </View>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </ImageBackground >
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, },
  errorText: {
    color: "red",
    fontSize: 15,
  },
  TextBox: {
    justifyContent: 'center',
    flex: 0.8
  },
  subtext: {
    fontSize: 18,
    textAlign: "center",
    color: "white",
  },
  text: {
    fontWeight: "bold",
    fontSize: 50,
    textAlign: "center",
    color: "white",
  },
  button: {
    backgroundColor: "#9758E8",
    borderRadius: 5,
    justifyContent: 'center',
    height: 40,
    marginTop: 10
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  flag: {
    width: 30,
    height: 20,
  },
  pickercontainerStyle: {
    width: "100%",
  },

  text2: {
    fontWeight: "bold",
    fontSize: 10,
    textAlign: "center",
    color: "white",
  },
});

export default LoginScreen;
