import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// index
import {
  RegisterScreen,
  LoginScreen,
  OtpScreen,
  Scanscreen,
  FirstScreen,
  SetPinCode,
  ConfirmPinCode,
  SetpassScreen,
} from "../screen/Login";
// Js function Com
import ScreenNotFound from "../screen/screenNotFound";
import {
  EditProfileScreen,
  HomeScreen,
  InviteScreen,
  MessageScreen,
  SettingsScreen,
  RandomOccupations,
  QrcodeComponent,
  MyStatement,
  CountrySelected,
  CountrySelecteds
} from "../screen/Home";

import Ionicons from "react-native-vector-icons/Ionicons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";
import { useState } from "react";
import { InAppService } from "../hook/serviceInapp";
export default function Navigation() {
  const numPhone = React.useRef("");
  const otp = React.useRef("");
  const emeiCode = React.useRef("");
  const scanned = React.useRef("");
  const formattedValue = React.useRef("");
  const refferalcode = React.useRef("");
  const Stack = createNativeStackNavigator();
  const authUser = React.useRef("");
  const tokenUser = React.useRef("");
  const stateLogin = React.useRef("1");
  const userProfile = React.useRef(undefined);

  const selectedCity = React.useRef(undefined);
  const selectedCountry = React.useRef(undefined);
  const selectedState = React.useRef(undefined);

  const selectedCitys = React.useRef(undefined);
  const selectedCountrys = React.useRef(undefined);
  const selectedStates = React.useRef(undefined);

  const beforeCreateUser = React.useRef(undefined);
  const [isSignedIn, setisSignedIn] = useState(false);
  useEffect(() => {
    getToken();
  }, []);
  useEffect(() => {
    if (isSignedIn != false) {
      getProfile();
    }
  }, [isSignedIn]);
  function getToken() {
    AsyncStorage.getItem("@UserBazi:userToken").then((el) => {
      if (el != undefined) {
        tokenUser.current = el;
        AsyncStorage.getItem("@UserBazi:authToken").then((el) => {
          authUser.current = el;
          setisSignedIn(true);
        });
      }
    });
  }
  function getProfile() {
    InAppService(
      5,
      undefined,
      {
        auth: authUser.current,
        token: tokenUser.current,
      },
      "/app/user/profile"
    ).then((el) => {
      userProfile.current = el;
    });
  }
  function RootNavigator() {
    return (
      <Stack.Navigator>
        {isSignedIn ? (
          <>
            <Stack.Screen
              name="MainHome"
              component={TabHomeNavigator}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Root"
              component={StackLoginNavigator}
              options={{ headerShown: false }}
            />
          </>
        ) : (
          <>
            <Stack.Screen
              name="Root"
              component={StackLoginNavigator}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MainHome"
              component={TabHomeNavigator}
              options={{ headerShown: false }}
            />
          </>
        )}

        {/* byPass */}
        {/* <Stack.Screen
          name="MainHome"
          component={TabHomeNavigator}
          options={{ headerShown: false }}
        /> */}
        <StackLogin.Screen name="notfound" options={{ headerShown: false }}>
          {(props) => {
            return (
              <ScreenNotFound props_Header={""} props_Body={""} props={props} />
            );
          }}
        </StackLogin.Screen>
      </Stack.Navigator>
    );
  }
  const getObj = (event) => {
    otp.current = event.otp;
    numPhone.current = event.username;
    formattedValue.current = event.formattedValue;
    refferalcode.current = event.refCode;
    emeiCode.current = event.emeiCode;
    stateLogin.current = event.typeLogin;
    beforeCreateUser.current = event;
    console.log(beforeCreateUser);
  };

  const getCity = (event) => {
    selectedCity.current = event?.selectedCity;
    selectedCountry.current = event?.selectedCountry;
    selectedState.current = event?.selectedState;
  };

const getCitys = (event) => {
  selectedCitys.current = event?.selectedCitys;
  selectedCountrys.current = event?.selectedCountrys;
  selectedStates.current = event?.selectedStates;
}

  const getUserProfile = async (event) => {
    setisSignedIn(true);
    await AsyncStorage.setItem("@UserBazi:authToken", event.auth);
    await AsyncStorage.setItem("@UserBazi:userToken", event.token);
    setTimeout(() => {
      getToken();
    }, 1000);
  };
  const logoutUser = () => {
    AsyncStorage.removeItem("@UserBazi:authToken");
    AsyncStorage.removeItem("@UserBazi:userToken");
    authUser.current = "";
    tokenUser.current = "";
    userProfile.current = undefined;
    setTimeout(() => {
      setisSignedIn(false);
    }, 500);
  };
  const EditUser = (event) => {
    userProfile.current = event;
  };
  const StackLogin = createNativeStackNavigator();
  function StackLoginNavigator() {
    return (
      //หน้าแรก
      <StackLogin.Navigator initialRouteName="regis">
        <StackLogin.Screen name="regis" options={{ headerShown: false }}>
          {(props) => {
            return <RegisterScreen props={props} callback_objSendToOtp={getObj} />;
          }}
        </StackLogin.Screen>

        <StackLogin.Screen name="login" options={{ headerShown: false }}>
          {(props) => {
            return <LoginScreen props={props} callback_objSendToOtp={getObj} />;
          }}
        </StackLogin.Screen>
        <StackLogin.Screen name="otp" options={{ headerShown: false }}>
          {(props) => {
            return (
              <OtpScreen
                props={props}
                props_phone={numPhone.current}
                props_otp={otp.current}
                props_formattedValue={formattedValue.current}
                props_refferalcode={refferalcode.current}
              />
            );
          }}
        </StackLogin.Screen>
        <StackLogin.Screen name="setPass" options={{ headerShown: false }}>
          {(props) => {
            return (
              <SetpassScreen
                props={props}
                valueSet={beforeCreateUser.current}
                stateLogin={stateLogin.current}
                callback_ComfirmUser={getUserProfile}
              />
            );
          }}
        </StackLogin.Screen>

        <StackLogin.Screen
          name="setPin"
          options={{
            headerShown: true,
            title: "PIN SET",
            headerStyle: { backgroundColor: "#E0BCEE" },
            headerBackTitleVisible: false,
            headerTintColor: "white",
            headerTitleAlign: "center",
          }}
        >
          {(props) => {
            return <SetPinCode props={props} />;
          }}
        </StackLogin.Screen>

        <StackLogin.Screen
          name="confirmPin"
          options={{
            headerShown: true,
            title: "PIN CONFIRM",
            headerStyle: { backgroundColor: "#E0BCEE" },
            headerBackTitleVisible: false,
            headerTintColor: "white",
            headerTitleAlign: "center",
          }}
        >
          {(props) => {
            return <ConfirmPinCode props={props} />;
          }}
        </StackLogin.Screen>
        <StackLogin.Screen name="notfound" options={{ headerShown: false }}>
          {(props) => {
            return (
              <ScreenNotFound
                props_Header={"หน้านี้"}
                props_Body={"หาไม่เจอครับ"}
                props={props}
              />
            );
          }}
        </StackLogin.Screen>
      </StackLogin.Navigator>
    );
  }
  //**********MainHome**************
  const TabNavigate = createBottomTabNavigator();
  function TabHomeNavigator() {
    const homeName = "Astro";
    const messageName = "Notifications";
    const settingsName = "Settings";
    return (
      <TabNavigate.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;
            if (rn === messageName) {
              iconName = focused ? "notifications" : "notifications-outline";
            } else if (rn == homeName) {
              iconName = focused ? "home" : "home-outline";
            } else if (rn === settingsName) {
              iconName = focused ? "grid" : "grid-outline";
            }
            return <Ionicons name={iconName} size={30} color={color} />;
          },

          tabBarActiveTintColor: "white",
          tabBarInactiveTintColor: "white",
          tabBarShowLabel: false,
          headerTitleStyle: [{ color: "white", fontSize: 25 }],
          headerStyle: [{ backgroundColor: "#B972DA" }],
          tabBarStyle: [
            {
              position: "relative",
              display: "flex",
              backgroundColor: "#B672DA",
            },
            null,
          ],
        })}
      >
        <TabNavigate.Screen
          name={messageName}
          component={MessageScreen}
          options={{}}
        />
        <TabNavigate.Screen
          name={homeName}
          component={StackHomeNavigator}
          options={{}}
        />
        <TabNavigate.Screen
          name={settingsName}
          component={StackProfileNavigator}
          options={{ headerShown: false }}
        />
      </TabNavigate.Navigator>
    );
  }
  //**********Profile*******************
  const StackProfile = createNativeStackNavigator();

  function StackProfileNavigator() {
    return (
      <StackProfile.Navigator initialRouteName="Setting">
        <StackProfile.Screen name="Setting" options={{ headerShown: false }}>
          {(props) => {
            return (
              <SettingsScreen
                props={props}
                props_UserProfile={userProfile?.current}
                callback_logoutUser={logoutUser}
              />
            );
          }}
        </StackProfile.Screen>
        <StackProfile.Screen
          name="editprofile"
          options={{
            headerStyle: { backgroundColor: "#B972DA" },
            headerBackTitleVisible: false,
            headerTintColor: "white",
            headerTitleAlign: "center",
          }}
        >
          {(props) => {
            return (
              <EditProfileScreen
                props={props}
                props_SettingCity={{
                  city: selectedCity.current,
                  Country: selectedCountry.current,
                  State: selectedState.current,
                }}
                props_SettingCitys={{
                  city: selectedCitys.current,
                  Country: selectedCountrys.current,
                  State: selectedStates.current,
                }}
                props_UserProfile={userProfile.current}
                callback_EditUser={EditUser}
              />
            );
          }}
        </StackProfile.Screen>

        <StackProfile.Screen
          name="invite"
          options={{
            headerStyle: { backgroundColor: "#B972DA" },
            headerBackTitleVisible: false,
            headerTintColor: "white",
            headerTitleAlign: "center",
          }}
        >
          {(props) => {
            return (
              <InviteScreen props={props} props_scanned={scanned.current} />
            );
          }}
        </StackProfile.Screen>
        <StackProfile.Screen
          name="scan"
          // component={Scanscreen}
          options={{
            headerStyle: { backgroundColor: "#B972DA" },
            headerBackTitleVisible: false,
            headerTintColor: "white",
            headerTitleAlign: "center",
          }}
        >
          {(props) => {
            return <Scanscreen props={props} callback_objSendToInv={getObj} />;
          }}
        </StackProfile.Screen>
        <StackProfile.Screen
          name="qrCode"
          options={{
            headerStyle: { backgroundColor: "#B972DA" },
            headerBackTitleVisible: false,
            headerTintColor: "white",
            headerTitleAlign: "center",
          }}
        >
          {(props) => {
            return <QrcodeComponent props={props} />;
          }}
        </StackProfile.Screen>
        <StackProfile.Screen
          name="statement"
          options={{
            headerStyle: { backgroundColor: "#B972DA" },
            headerBackTitleVisible: false,
            headerTintColor: "white",
            headerTitleAlign: "center",
          }}
        >
          {(props) => {
            return <MyStatement props={props} />;
            w;
          }}
        </StackProfile.Screen>
        <StackProfile.Screen
          name="country"
          options={{
            headerStyle: { backgroundColor: "#B972DA" },
            headerBackTitleVisible: false,
            headerTintColor: "white",
            headerTitleAlign: "center",
          }}
        >
          {(props) => {
            return (
              <CountrySelected
                callback_objSendToEditprof={getCity}
                props={props}
                props_selectedCountry={selectedCountry.current}
                props_selectedState={selectedState.current}
                props_selectedCity={selectedCity.current}
              />
            );
          }}
        </StackProfile.Screen>

        <StackProfile.Screen
          name="countrys"
          options={{
            headerStyle: { backgroundColor: "#B972DA" },
            headerBackTitleVisible: false,
            headerTintColor: "white",
            headerTitleAlign: "center",
          }}
        >
          {(props) => {
            return (
              <CountrySelecteds
                callback_objSendToEditprof={getCitys}
                props={props}
                props_selectedCountrys={selectedCountrys.current}
                props_selectedStates={selectedStates.current}
                props_selectedCitys={selectedCitys.current}
              />
            );
          }}
        </StackProfile.Screen>
      </StackProfile.Navigator>
    );
  }
  const StackHome = createNativeStackNavigator();
  function StackHomeNavigator() {
    return (
      <StackHome.Navigator initialRouteName="Setting">
        <StackProfile.Screen
          name="Setting"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <StackProfile.Screen
          name="card"
          component={RandomOccupations}
          options={{ headerShown: false }}
        />
      </StackHome.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}
