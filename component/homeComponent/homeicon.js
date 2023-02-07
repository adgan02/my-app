import {
  View,
  StyleSheet,
  Text,
  TouchableHighlight,
  StatusBar,
} from "react-native";
import IconFeather from "react-native-vector-icons/Feather";
import IconFontAwesome5 from "react-native-vector-icons/FontAwesome5";
import IconIonicons from "react-native-vector-icons/Ionicons";

const Homeicon = () => {
  return (
    <View style={[styles.container]}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <TouchableHighlight onPress={() => {}}>
          <IconFeather name="bell" color="#e15" size={25} />
        </TouchableHighlight>
        <View style={{ width: "3%" }}></View>
        <View
          style={{
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <TouchableHighlight onPress={() => {}}>
            <IconIonicons name="home-sharp" color="#8F49EE" size={50} />
          </TouchableHighlight>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text>100</Text>
          <TouchableHighlight onPress={() => {}}>
            <IconFeather name="database" color="#FF9D01" size={25} />
          </TouchableHighlight>
          <Text>100</Text>
          <TouchableHighlight onPress={() => {}}>
            <IconFontAwesome5 name="coins" color="#FF9D01" size={25} />
          </TouchableHighlight>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
  },
});

export default Homeicon;
