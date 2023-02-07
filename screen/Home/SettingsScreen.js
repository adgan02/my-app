// import * as React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  ScrollView,
  Image,
} from "react-native";
// import OTPInputView from 'react-native-otp-input';
import React, { useEffect, useState } from "react";
import FeatherIcon from "react-native-vector-icons/Feather";
import Ionicons from "react-native-vector-icons/Ionicons";

const SettingsScreen = ({
  props,
  props_UserProfile,
  callback_logoutUser,
  navigate,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    // await Clipboard.setString("HXy245");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.profile}>
          <View style={styles.profile1}>
            <Image
              alt=""
              source={require("../../assets/avatar.png")}
              style={styles.profileAvatar}
            />
            <View style={{ flexDirection: "column" }}>
              <Text style={styles.profileName}>
                {props_UserProfile?.firstName == null &&
                props_UserProfile?.lastName == null
                  ? "Setting Profile"
                  : props_UserProfile?.firstName}
                &nbsp;&nbsp;
                {props_UserProfile?.lastName == null
                  ? ""
                  : props_UserProfile?.lastName}
              </Text>
              {props_UserProfile?.firstName == null &&
              props_UserProfile?.lastName == null ? null : (
                <Text style={{ color: "#FFD700", fontSize: 22 }}>
                  {props_UserProfile?.rankingDetail?.rankingDetail} Lv{" "}
                  {props_UserProfile?.rankingDetail?.rankingId}
                </Text>
              )}
            </View>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-end",
              padding: 10,
            }}
          >
            {props_UserProfile?.firstName != null ? (
              <View style={{ flexDirection: "row" }}>
                <Text style={{ fontSize: 16, color: "white", marginTop: 2 }}>
                  {props_UserProfile?.itemDetail.item1Detail}&nbsp;:&nbsp;
                </Text>
                <Text
                  style={{ fontSize: 20, color: "#FFD700", fontWeight: "bold" }}
                >
                  {props_UserProfile?.itemDetail.item1}
                </Text>
              </View>
            ) : null}

            <View style={styles.profile2}>
              <TouchableOpacity
                onPress={() => {
                  setTimeout(() => {
                    props.navigation.navigate("editprofile");
                  }, 500);
                }}
              >
                <View style={styles.profileAction}>
                  <Text style={styles.profileActionText}>Edit Profile</Text>
                  <FeatherIcon color="#fff" name="edit" size={16} />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.presscontainer}>
          <TouchableOpacity
            style={styles.press}
            onPress={() => {
              console.log(props);
              callback_logoutUser();
              props.navigation.push("invite");
            }}
          >
            <Ionicons
              name="people-outline"
              size={30}
              style={{ marginLeft: 20 }}
            />
            <Text style={styles.pressText}>Recieve invitaion</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.press}
            onPress={() => {
              console.log(props);
              callback_logoutUser();
              props.navigation.navigate("qrCode");
            }}
          >
            <View style={styles.numbercontainer}>
              <Ionicons
                name="mail-outline"
                size={30}
                style={{ marginLeft: 20 }}
              />
            </View>
            <Text style={styles.pressText}> invite your friend</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.press}
            onPress={() => {
              props.navigation.navigate("statement");
              props.navigation.push("statement");
            }}
          >
            <Ionicons
              name="wallet-outline"
              size={30}
              style={{ marginLeft: 20 }}
            />
            <Text style={styles.pressText}> my statement</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.press}
            onPress={() => {
              console.log(props);
            }}
          >
            <Ionicons
              name="chatbox-outline"
              size={30}
              style={{ marginLeft: 20 }}
            />
            <Text style={styles.pressText}> contact us</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.bottonlogout}>
          <TouchableOpacity
            style={styles.button2}
            onPress={() => {
              callback_logoutUser();
            }}
          >
            <Ionicons
              name="exit-outline"
              size={30}
              style={{ marginLeft: -41, top: "9%", padding: 0, color: "grey" }}
            />
            <Text style={styles.buttonText2}> log out</Text>
          </TouchableOpacity>
        </View>

        {/* </SafeAreaView> */}
      </View>
    </ScrollView>
  );
};
export default SettingsScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EEE1FF", //พื้นหลัง
    alignItems: "center",
    width: "100%",
  },
  profile: {
    backgroundColor: "#B672DA", //พื้นหลังโปรไฟล์
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
    width: "100%",
    height: 130,
    marginHorizontal: 2,
  },
  profile1: {
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
    borderRadius: 5,
    width: "65%",
    height: 80,
    marginHorizontal: 2,
    marginTop: 50,
  },
  profile2: {
    alignItems:'flex-end',
    flexDirection: "row",
    borderRadius: 5,
    flex:1,
  },
  profileAvatar: {
    width: 70,
    height: 70,
    borderRadius: 9999,
    borderColor: "#702D80",
    margin: 10,
    justifyContent: "flex-start",
    marginLeft: 15,
  },
  profileName: {
    fontSize: 18,
    fontWeight: "600",
    color: "white",
    margin: 1,
  },
  profileAction: {
    marginLeft: 10,
    paddingVertical: "2.5%",
    paddingHorizontal: "2.5%",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#4B0082", //ปุ่ม
    borderRadius: 20,
    width: 110,
    height: 40,
  },
  profileActionText: {
    marginLeft: 5,
    marginRight: 8,
    fontSize: 13,
    fontWeight: "600",
    color: "white",
    alignItems: "center",
  },

  presscontainer: {
    // backgroundColor: "green",//พื้นหลัง กลาง
    flexWrap: "wrap",
    width: "96%",
    height: 300,
    alignItems: "center",
    justifyContent: "flex-start",

    // borderColor: "#AA87D9",
    // borderWidth: 4,
    margin: 10,
  },
  bottonlogout: {
    flexWrap: "wrap",
    backgroundColor: "#EEE1FF",
    width: "100%",
    height: 500,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    // borderColor: "#AA87D9",
    // borderWidth: 4,
  },

  press: {
    backgroundColor: "white", //ปุ่มกลาง
    alignItems: "flex-start",
    justifyContent: "center",
    flexDirection: "column",

    width: "49%",
    height: 100,
    marginHorizontal: 2,
    borderRadius: 10,
    shadowColor: "#A0A0A0",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 1,
    elevation: 2,
    marginTop: 5,
  },
  numbercontainer: {
    width: "100%",
    height: "35%",
    alignItems: "center",
    justifyContent: "flex-start",
    // borderColor: "#AA87D9",
    // borderWidth: 4,

    flexDirection: "row",
  },

  midpress: {
    backgroundColor: "#ffff",
    width: "100%",
    height: "25%",
    alignItems: "center",
    justifyContent: "center",
    // borderColor: "#AA87D9",
    // borderWidth: 4,
    marginTop: 40,
    flexDirection: "row",
  },

  pressText: {
    margin: 5,
    marginLeft: 20,
    fontSize: 14,
    color: "black",
  },

  buttonText2: {
    position: "relative",
    fontSize: 19,

    color: "black",
    top: -22,
    left: 20,
  },

  button2: {
    backgroundColor: "white",
    top: -10,
    padding: 2,
    borderRadius: 5,
    borderColor: "#ECECEC",
    borderWidth: 1.5,
    borderLeftWidth: 50,
    borderBottomWidth: 4,
    width: "96%",
    height: 50,
    marginHorizontal: 2,
    //ios
    shadowColor: "#A0A0A0",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 1,
    //android
    elevation: 2,
    margin: 5,
  },
});
