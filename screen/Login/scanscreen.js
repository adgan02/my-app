import {
  Button,
  TextInput,
  Text,
  TouchableOpacity,
  View,
  Platform,
  StyleSheet,
  Image,
  scannedData,
} from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import React, { useState, useEffect } from "react";
// import Print from 'react-native-print';
import Ionicons from "react-native-vector-icons/Ionicons";

const Scanscreen = ({ props, callback_objSendToInv }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState("");
  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);
  const handleBarCodeScanned = ({ type, data }) => {
    if (Platform.OS === "android") {
      if (type == 256) {
        console.log(data);
        setScanned(data);
        setTimeout(() => {
            props.navigation.navigate("Astro");
          }, 500);
        // service Phone,Code => Bn => เบอร์นี , ใช้โค้ดแล้ว
      }
    } else if (Platform.OS === "ios") {
      if (type == "org.iso.QRCode") {
        console.log(data);
        setScanned(data);
        setTimeout(() => {
            props.navigation.navigate("Astro");
          }, 500);
        // setScanned({ scannedData: data });
        // service Phone,Code => Bn => เบอร์นี , ใช้โค้ดแล้ว
      }

      // printData = () => {
      //   Print.printText(this.state.scannedData)
      // import Print from 'react-native-print';
    }
  };
  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  console.log(scanned);
  return (
    <View style={styles.container}>
      <View style={styles.saturncontainer}></View>

      <View style={styles.card}>
        <View style={{ flex: 1, padding: 30, flexDirection: "column" }}>
          <View
            style={{
              top: 80,
              height: 300,
              width: 300,
              justifyContent: "center",
              overflow: "hidden",
              borderRadius: 50,
            }}
          >
            <BarCodeScanner
              onBarCodeScanned={
                hasPermission === true && scanned == false
                  ? handleBarCodeScanned
                  : null
              }
              style={{ flex: 1, maxHeight: 300 }}
            />
          </View>
        </View>

        <View style={styles.card3}>
          <Ionicons name="scan" size={300} style={{ color: "white" }} />
        </View>

        <View style={styles.card2}>
          <View style={styles.card4}>
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              {scanned ? (
                <TouchableOpacity
                  onPress={() => {
              setTimeout(() => {
                alert("Your code is actived ${scanned}")
                props.navigation.navigate("scan");
              }, 500);
              // handle onPress
            }}
                >
                  <Text style={styles.text}>Scan อีกครั้ง</Text>
                </TouchableOpacity>
              ) : null}
            </View>
            <Text style={styles.text1}>Your invitation Code: {scanned}</Text>
          </View>

          <View style={styles.button}>
            <TouchableOpacity
              onPress={() => {
                callback_objSendToInv({ scanned });
                props.navigation.navigate("invite");
              }}
            >
              <Text style={styles.buttonText}>กลับหน้าก่อนหน้า</Text>
            </TouchableOpacity>
          </View>
          <View></View>
        </View>
      </View>
    </View>
    // </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E0C8FF",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    // backgroundColor: 'red',
    width: "100%",
    height: "100%",

    alignItems: "center",
    justifyContent: "center",
  },
  card2: {
    // backgroundColor: 'purple',
    width: "70%",
    height: "60%",
    alignItems: "center",
  },
  card3: {
    // backgroundColor: 'green',
    width: "80%",
    height: "45%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
  },
  card4: {
    // backgroundColor: 'blue',
    width: "100%",
    height: "42.5%",
    alignItems: "center",
    justifyContent: "center",
  },

  button: {
    backgroundColor: "#9758E8",

    width: "70%",
    borderRadius: 20,

    height: "13.5%",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 19,
    fontWeight: "bold",
    width: "50%",
    height: "60%",
  },
  text: {
    color: "red",
    fontWeight: "bold",

    fontSize: 20,
    textAlign: "center",
  },
  text1: {
    fontWeight: "bold",

    fontSize: 15,

    color: "#4D4D4D",
  },
});

export default Scanscreen;
