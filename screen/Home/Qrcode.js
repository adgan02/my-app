import { useRef, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Share,
} from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import CountDown from "react-native-countdown-component";
import * as FileSystem from "expo-file-system";
import * as Sharing from "expo-sharing";
import * as Clipboard from "expo-clipboard";
import Constants from "expo-constants";
import QRCode from "react-native-qrcode-svg";

const QrcodeComponent = () => {
  const [QRvalue, setQRValue] = useState("");
  const [state, setState] = useState();
  const fileUri = FileSystem.cacheDirectory + "test.vcf";
  const vcard = `BEGIN:VCARD
    VERSION:4.0
    N:Forrest;Gump;;Mr.;
    FN:Forrest Gump
    ORG:Bubba Gump Shrimp Co.
    TITLE:Shrimp Man
    PHOTO;MEDIATYPE=image/gif:http://www.example.com/dir_photos/my_photo.gif
    TEL;TYPE=work,voice;VALUE=uri:tel:+1-111-555-1212
    TEL;TYPE=home,voice;VALUE=uri:tel:+1-404-555-1212
    ADR;TYPE=WORK,PREF:;;100 Waters Edge;Baytown;LA;30314;United States of Amer
     ica
    LABEL;TYPE=WORK,PREF:100 Waters Edge\nBaytown\, LA 30314\nUnited States of 
     America
    ADR;TYPE=HOME:;;42 Plantation St.;Baytown;LA;30314;United States of America
    LABEL;TYPE=HOME:42 Plantation St.\nBaytown\, LA 30314\nUnited States of Ame
     rica
    EMAIL:forrestgump@example.com
    REV:20080424T195243Z
    x-qq:21588891
    END:VCARD`;
  const ref = useRef();
  const [copiedText, setCopiedText] = useState("");

  const copyToClipboard = async () => {
    await Clipboard.setStringAsync(QRvalue);
  };

  return (
    <SafeAreaView style={styles.sectionContainer}>
      <View style={styles.sectionContainer1}>
        <View style={styles.columnrow}>
          <View style={styles.qrcodecontainer}>
            <QRCode
              style={styles.qrcode}
              size={155}
              value={QRvalue ? QRvalue : "Generate QRCode"}
              getRef={ref}
            />
          </View>

          <View style={{ height: 1, width: "50%" }}></View>
          <Text style={styles.sectionTitle}>This is Your invite code</Text>
          <TextInput
            placeholder="Value to My QRCode"
            style={styles.textInput}
            autoCapitalize="characters"
            value={QRvalue}
            onChangeText={(text) => setQRValue(text)}
          />
          <View
            style={{ height: 1, width: "50%", backgroundColor: "#5585FF" }}
          ></View>
          <TouchableOpacity
            onPress={() => setCopiedText(QRvalue)}
            style={styles.Button}
          >
            <Text>Generate QRCode</Text>
          </TouchableOpacity>
        </View>
        <View style={{ height: "3%", width: "100%" }}></View>
        <View
          style={{ height: 1, width: "100%", backgroundColor: "#5585FF" }}
        ></View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.Button} onPress={copyToClipboard}>
            <Icon name="copy1" size={30} />
            <Text>copy</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.Button}>
            <Icon name="download" size={30} />
            <Text>dowload</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              const options = {
                mimeType: "text/x-vcard",
                dialogTitle: "Share vcard",
                UTI: "text/vcard",
              };

              FileSystem.writeAsStringAsync(fileUri, vcard)
                .then((data) => {
                  setState("Wrote vcard file");
                })
                .catch((err) => {
                  setState("Error writing vcard file");
                  console.log(JSON.stringify(err));
                });

              Sharing.shareAsync(fileUri, options)
                .then((data) => {
                  setState("Shared");
                })
                .catch((err) => {
                  setState("Error sharing vcard");
                  console.log(JSON.stringify(err));
                });
            }}
            style={styles.Button}
          >
            <Icon name="sharealt" size={30} />
            <Text>share</Text>
          </TouchableOpacity>
        </View>
        <View style={{ height: "3%", width: "100%" }}></View>
        <View style={styles.columnrow}>
          <Text>Your code will expire in</Text>
          {/* <CountDown
                        value={QRvalue}
                        until={60 * 60}
                        onFinish={() => setQRValue('Finished')}
                        digitStyle={{ backgroundColor: '#FFF', }}
                        timeToShow={['H', 'M', 'S']}
                        timeLabels={{ m: null, s: null }}
                        
                    /> */}
          <Text>1hours</Text>
        </View>
        <View style={styles.columnrow}>
          <Text style={{ color: "#912" }}>
            Time out Your code is expired to use
          </Text>
          <Text>Your code use by Id ****01</Text>
          <Text>you and your friend will get 2 token</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#EEE1FF",
    justifyContent: "center",
  },
  sectionContainer1: {
    backgroundColor: "white",
    paddingTop: Constants.statusBarHeight,
    width: "96%",
    height: "96%",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5,
  },
  qrcodecontainer: {
    backgroundColor: "white",
    alignItems: "center",
    borderWidth: 9,
    borderRadius: 2,
    borderColor: "#CC63F1",
    justifyContent: "center",
    width: "50%",
    height: "50%",
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
    backgroundColor: "white",
  },
  highlight: {
    fontWeight: "700",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: "white",
  },
  columnrow: {
    alignItems: "center",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  textInput: {
    height: 18,
    color: "#5585FF",
    textAlign: "center",
    borderStyle: "dashed",
    //Font family: Khand
    // Fontstyle: Medium
    // Font size: 18px
    // Line height: 18px
    // Line height: 100%
    // Align: Center
    // Vertical align: Top
    // Letter spacing: -2%
    // color: #5585FF,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: "400",
    backgroundColor: "white",
  },
  Button: {
    marginTop: 10,
    alignItems: "center",
    backgroundColor: "white",
  },
});

export default QrcodeComponent;
