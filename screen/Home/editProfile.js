// import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from "react-native";
import {
  KeyboardAvoidingView,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  
} from "react-native";
import  ValidateEmail  from './../Function/ValidateEmail'
import { SelectList } from "react-native-dropdown-select-list";
import React, { useState, useEffect } from "react";
import IconFeather from "react-native-vector-icons/Feather";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import * as ImagePicker from "expo-image-picker";
import ImageViewer from "../Function/imageViewer";
import { Picker, PickerIOS } from "@react-native-picker/picker";
import { InAppService } from "../../hook/serviceInapp";
import { LoginService } from "../../hook/serviceAuth";
import AsyncStorage from "@react-native-async-storage/async-storage";
const PlaceholderImage = require("../../assets/avatar.png");

const EditProfileScreen = ({
  props,
  props_SettingCity,
  props_UserProfile,
  callback_EditUser,
  props_SettingCitys,
}) => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState(props_UserProfile?.firstName);
  const [lastName, setLastName] = useState(props_UserProfile?.lastName);
  const [dateOfBirth, setDateOfBirth] = useState(new Date());
  const [timeOfBirth, setTimeOfBirth] = useState();
  const [birthPlace, setBirthPlace] = useState("");
  const [place, set] = useState("");

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedtime, setSelectedtime] = useState(new Date());

  const [todate, setTodate] = useState(false);
  const [time, setTime] = useState(false);

  const [emailError, setEmailError] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [dateOfBirthError, setDatOfBirthError] = useState("");
  const [TimeOfBirthError, setTimeOfBirthError] = useState("");

  const [selectedImage, setSelectedImage] = useState(null);

  const [focused1, setFocused1] = useState(false);
  const [focused2, setFocused2] = useState(false);
  const [focused3, setFocused3] = useState(false);
  const [focused4, setFocused4] = useState(false);
  const [focused5, setFocused5] = useState(false);
  const [focused6, setFocused6] = useState(false);

  const [selectedValue, setSelectedValue] = useState(props_UserProfile?.gender);

  const handleBlur = () => {
    if (!email) {
      setEmailError("Email is required");
    } else if (!ValidateEmail(email)) {
      setEmailError("Invalid email");
    } else {
      setEmailError("");
    }
  };
  const handleBlurFirstName = () => {
    if (!firstName) {
      setFirstNameError("First name is required");
    } else if (firstName.length > 50) {
      setLastNameError("Last name must be less than 50 characters");
    } else {
      setFirstNameError("");
    }
  };
  const handleBlurLastName = () => {
    if (!lastName) {
      setLastNameError("Last name is required");
    }else if (lastName.length > 50) {
      setLastNameError("Last name must be less than 50 characters");
    }else {
      setLastNameError("");
    }
  };

  const showDatePicker = () => {
    setTodate(true);
  };

  const hideDatePicker = () => {
    setTodate(false);
  };
  const showtimePicker = () => {
    setTime(true);
  };

  const hidetimePicker = () => {
    setTime(false);
  };

  const handleConfirmDate = (date) => {
    setDateOfBirth(date);
    hideDatePicker();
  };
  const handleConfirmtime = (date) => {
    setTimeOfBirth(date);
    hidetimePicker();
  };
  const formatTime = (time = new Date(0)) => {
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    let formattedTime = hours + ':' + minutes + ' ' + ampm;
    return formattedTime;
  }
  

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    } else {
      alert("You did not select any image.");
    }
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <View style={{ flex: 1 }}>
          <View
            style={{
              padding: 20,
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#F0C5FF",
            }}
          >
            <TouchableOpacity
              style={styles.imageContainer}
              onPress={pickImageAsync}
            >
              <ImageViewer
                placeholderImageSource={PlaceholderImage}
                selectedImage={selectedImage}
              />
            </TouchableOpacity>
          </View>

          <View
            style={{
              width: "100%",
              justifyContent: "center",
              backgroundColor: "white",
              shadowColor: "#A0A0A0",
              shadowOffset: { width: 0, height: 1 },
              shadowOpacity: 1,
              shadowRadius: 1,
            }}
          >
            <View
              style={{
                marginLeft: 10,
                width: "100%",
                justifyContent: "center",
                backgroundColor: "white",
              }}
            >
              <Text style={styles.label}>Email*</Text>
              <TextInput
                style={styles.input}
                value={email}
                onFocus={() => setFocused1(true)}
                onBlur={() => {setFocused1(false)
                              handleBlur()}}
                onChangeText={(text) => setEmail(text)}
              />
              {emailError && <Text style={styles.error}>{emailError}</Text>}
              <View
                style={[
                  styles.underline,
                  focused1
                    ? styles.underlineFocused
                    : styles.underlineUnfocused,
                ]}
              />
              <Text style={styles.label}>First Name*</Text>
              <TextInput
                style={styles.input}
                value={firstName}
                onFocus={() => setFocused2(true)}
                onBlur={() => {setFocused2(false)
                                handleBlurFirstName() }}
                onChangeText={(text) => setFirstName(text)}
              />
              {firstNameError && <Text style={styles.error}>{firstNameError}</Text>}
              <View
                style={[
                  styles.underline,
                  focused2
                    ? styles.underlineFocused
                    : styles.underlineUnfocused,
                ]}
              />
              <Text style={styles.label}>Last Name*</Text>
              <TextInput
                style={styles.input}
                value={lastName}
                onFocus={() => setFocused3(true)}
                onBlur={() => {setFocused3(false)
                               handleBlurLastName()}}
                onChangeText={(text) => setLastName(text)}
              />

              {lastNameError && <Text style={styles.error}>{lastNameError}</Text>}  
              <View
                style={[
                  styles.underline,
                  focused3
                    ? styles.underlineFocused
                    : styles.underlineUnfocused,
                ]}
              />
              <View>
                <Text style={styles.label}>Gender:</Text>
                <Picker
                  selectedValue={selectedValue}
                  style={{
                    height: 40,
                    width: "100%",
                    justifyContent: "center",
                  }}
                  onValueChange={(itemValue) => setSelectedValue(itemValue)}
                >
                  <Picker.Item
                    label="Male"
                    value={1}
                    style={{ fontSize: 14 }}
                  />
                  <Picker.Item
                    label="Female"
                    value={2}
                    style={{ fontSize: 14 }}
                  />
                </Picker>
              </View>
              <View
                style={[
                  styles.underline,
                  focused3
                    ? styles.underlineFocused
                    : styles.underlineUnfocused,
                ]}
              />
            </View>
          </View>

          <View
            style={{
              marginTop: 10,
              width: "100%",
              justifyContent: "center",
              backgroundColor: "white",
              shadowColor: "#A0A0A0",
              shadowOffset: { width: 0, height: 1 },
              shadowOpacity: 1,
              shadowRadius: 1,
            }}
          >
            <View
              style={{
                marginLeft: 10,
                width: "100%",
                justifyContent: "center",
                backgroundColor: "white",
              }}
            >
              <Text style={styles.label}>Date of Birth*</Text>
              <Text

                onPress={showDatePicker}
                style={styles.input}
                value={dateOfBirth}
                onFocus={() => setFocused4(true)}
                onBlur={() => setFocused4(false)}
                onChangeText={(text) => setDateOfBirth(text)}
              >
                {dateOfBirth
                  ? dateOfBirth.toDateString()
                  : defaultDate.toDateString()}{""}
              </Text>
              <DateTimePickerModal
                date={dateOfBirth}
                isVisible={todate}
                mode="date"
                onConfirm={handleConfirmDate}
                onCancel={hideDatePicker}
              />
              <View
                style={[
                  styles.underline,
                  focused4
                    ? styles.underlineFocused
                    : styles.underlineUnfocused,
                ]}
              />
              <Text style={styles.label}>Time of birth*</Text>
              <Text
                onPress={showtimePicker}
                style={styles.input}
                value={timeOfBirth}
                onFocus={() => setFocused5(true)}
                onBlur={() => setFocused5(false)}
                onChangeText={(text) => setTimeOfBirth(text)}
              >
                 {timeOfBirth ? formatTime(timeOfBirth) : "No date selected"}
              </Text>
              <DateTimePickerModal
                date={timeOfBirth}
                isVisible={time}
                mode="time"
                onConfirm={handleConfirmtime}
                onCancel={hidetimePicker}
                onPress={showtimePicker}
              />
              <View
                style={[
                  styles.underline,
                  focused5
                    ? styles.underlineFocused
                    : styles.underlineUnfocused,
                ]}
              />
              <Text style={styles.label}>Birth place*</Text>
              <TouchableOpacity
                onPress={() => {
                  // console.log(props_selecteCity,props_selectedCountry,props_selectedState)
                  props.navigation.navigate("country");
                }}
              >
                <Text
                  style={styles.input}
                  value={birthPlace}
                  onFocus={() => setFocused6(true)}
                  onBlur={() => setFocused6(false)}
                  onChangeText={(text) => setBirthPlace(text)}
                >
                  {props_SettingCity?.Country?.name &&
                  props_SettingCity?.State?.name
                    ? props_SettingCity.Country.name +
                      "/" +
                      props_SettingCity.State.name
                    : ""}
                </Text>
              </TouchableOpacity>
                <View
                style={[
                  styles.underline,
                  focused6
                    ? styles.underlineFocused
                    : styles.underlineUnfocused,
                ]}
              />
            </View>
          </View>
          <View
            style={{
              marginTop: 10,
              width: "100%",
              justifyContent: "center",
              backgroundColor: "white",
            }}
          >
            <View
              style={{
                marginLeft: 10,
                width: "100%",
                justifyContent: "center",
                backgroundColor: "white",
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  // console.log(props_selecteCity,props_selectedCountry,props_selectedState)
                  props.navigation.navigate("countrys");
                }}
              >
                <Text style={styles.label}>Place*</Text>
                <Text
                  style={styles.input}
                  value={place}
                  onFocus={() => setFocused4(true)}
                  onBlur={() => setFocused4(false)}
                  onChangeText={(text) => text}
                >
                  {props_SettingCitys?.Country?.name &&
                  props_SettingCitys?.State?.name
                    ? props_SettingCitys.Country.name +
                      "/" +
                      props_SettingCitys.State.name
                    : ""}
                </Text>
              </TouchableOpacity>
              <View
                style={[
                  styles.underline,
                  focused4
                    ? styles.underlineFocused
                    : styles.underlineUnfocused,
                ]}
              />
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={{ height: 60, paddingHorizontal: 5 }}>
        <TouchableOpacity
          style={styles.button}
          onPress={async () => {
            let body = {
              firstName: firstName,
              lastName: lastName,
              gender: String(selectedValue),
              username: "579579573",
            };
            let auth = await AsyncStorage.getItem("@UserBazi:authToken");
            let token = await AsyncStorage.getItem("@UserBazi:userToken");
            let data = await InAppService(
              5,
              JSON.stringify(body),
              { auth: auth, token: token },
              "/app/user/update-profile"
            );
            if (data) {
              console.log(data);
              callback_EditUser(data);
              setTimeout(() => {}, 500);
            }
          }}
        >
          <Text style={styles.buttonText} onPress={()=> {
            console.log(firstName)
          }}>Save</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EEE1FF",
  },
  label: {
    fontWeight: "regular",
    marginTop: 10,
    fontSize: 14,
    color: "#5C5C5C",
  },
  input: {
    fontSize: 14,
    height: 30,
    padding: 1,
    width: "100%",
    color: "black",
    backgroundColor: "white",
  },
  underline: {
    height: 1,
    backgroundColor: "#C4C4C4",
  },
  underlineFocused: {
    backgroundColor: "black",
  },
  underlineUnfocused: {
    backgroundColor: "#CFCFCF",
  },
  error: {
    color: "red",
  },
  button: {
    backgroundColor: "#9758E8",
    borderRadius: 5,
    justifyContent: "center",
    height: 40,
    marginTop: 10,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default EditProfileScreen;
