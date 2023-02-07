import {
  KeyboardAvoidingView,
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  ImageBackground,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
// import OTPInputView from 'react-native-otp-input';
import React, { useEffect, useState } from "react";
import OTPTextInput from "react-native-otp-textinput";
import RnOtpTimer from "rn-otp-timer";
import { LoginService } from "../../hook/serviceAuth";
import { AuthStorageService } from "../../hook/serviceASyncStore";
import IconFeather from "react-native-vector-icons/Feather";
const OtpScreen = ({ props, props_phone, props_otp, props_formattedValue, props_refferalcode, callback_ComfirmUser }) => {
  const [otpText, setotpText] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [otpcode, setOtpcode] = useState(props_otp);
  const [refferalcode, setRefferalcode] = useState(props_refferalcode);
  return (
    // <KeyboardAvoidingView behavior="padding" style={styles.container}>
    <ImageBackground
      source={require("../../assets/wallpaperr.png")}
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss(50)} style={{ flex: 1 }}>
        <View style={styles.container}>
          {/* Title&Subtitle */}
          <View style={styles.TextBox}>
            <Text style={styles.text1}>A code was sent to</Text>

            <Text style={styles.text2}>{props_formattedValue} </Text>
            <TouchableOpacity
              onPress={() => {
                props.navigation.goBack();
              }}
            >
              <Text style={styles.subtext}>Change your number</Text>
            </TouchableOpacity>
          </View>

          {/* Card */}
          <View style={styles.Reff}>
            <OTPTextInput handleTextChange={(text) => setotpText(text)} inputCount={6} />
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', }}>
              <View style={[styles.Rpcon, { justifyContent: 'center' }]}>
                <Text>refferalcode : {refferalcode}</Text>
              </View>
              <View style={[styles.Rpcon]}>
                <RnOtpTimer
                  resendButtonTextStyle={styles.timerText}
                  timerStyle={styles.timerText}
                  defaultCode="TH"
                  underlineColorAndroid="transparent"
                  minutes={0}
                  seconds={0}
                  resendButtonText={"Sent again"}
                  resendButtonAction={async () => {
                    let getLoginService = await LoginService(
                      2,
                      JSON.stringify({ username: props_phone }),
                      "/auth/otp"
                    );
                    if (getLoginService) {
                      setOtpcode(getLoginService.otp);
                      setRefferalcode(getLoginService.refCode);
                    }
                  }}
                />

              </View>
            </View>
          </View>
          <View style={styles.Vrcon}>
            {errorMessage == "" ? (null) : (<Text style={styles.errorText}>{errorMessage}</Text>)}
            <TouchableOpacity
              onPress={async () => {
                if (otpText == otpcode) {
                  // login Service
                  let body = {
                    otp: otpText,
                    refCode: refferalcode,
                    username: props_phone,
                    countryPhone: 66,
                    imeiCode: "UIFMWOEK-61698466584646843564001"
                  }
                  console.log(body);
                  try {
                    let postLoginService = await LoginService(2, JSON.stringify(body), '/auth/verify-otp');
                    console.log(postLoginService);
                    setTimeout(() => {
                      props.navigation.navigate("setPass")
                    }, 500);
                  } catch (error) {
                    console.log(error);
                  }
                  // by Pass

                } else {
                  props.navigation.navigate("setPass")

                  // setErrorMessage("The OTP input is incorrect");
                }
              }}
              style={styles.button}
            >
              <Text style={styles.buttonText}>Verify</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </ImageBackground >
    // </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, flexDirection: 'column',
    justifyContent: 'center'
  },
  errorText: {
    color: "red",
    fontSize: 18,
  },

  TextBox: {
    flex: 1,
    maxHeight: 180,
    justifyContent: "center", alignItems: 'center'


  },
  subtext: {
    fontSize: 18,
    textAlign: "center",
    color: "white",
    top: "10%",
    textDecorationLine: "underline",
  },
  text1: {
    paddingTop: 50,
    fontSize: 20,
    textAlign: "center",
    color: "#161616",
    paddingBottom: 10,

  },
  text2: {
    fontSize: 20,
    textAlign: "center",
    color: "#4D4D4D",
    fontWeight: "bold",
  },
  Reff: {
    height: 100,
    flexDirection: "column",
    paddingHorizontal: 10,
  },
  timerText: {
    fontSize: 16
  },
  Rpcon: {
    height: 40,
  },
  Vrcon: {
    paddingHorizontal: 10,
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#9758E8",
    borderRadius: 5,
    height: 45,
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default OtpScreen;
