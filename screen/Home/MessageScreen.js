import * as React from "react";
import { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from "react-native";

const MessageScreen = ({ navigation }) => {
  const [notifications, setNotifications] = useState([]);
  useEffect(() => {
    // fetch notifications data from backend or other source
    const data = [
      {
        id: 1,
        title: "your code is accept bt id 6525956",
        body: " your invited will get 2 ivitation ",
        avatar: require("../../assets/getinvite.png"),
      },
      {
        id: 2,
        title: "Time out Your code is expired to use   ",
        body: "Qr code or invite code not use in time",
        avatar: require("../../assets/timeout.png"),
      },
      {
        id: 3,
        title: " timer run you start gennarate  invite code   ",
        body: "plese tell your friend accapt in  1 hours",
        avatar: require("../../assets/timein.png"),
      },

      {
        id: 4,
        title: "your get 1 ivitation",
        body: " your invited will get 2 ivitation ",
        avatar: require("../../assets/getcoin.png"),
      },
      {
        id: 5,
        title: "your get 1 ivitation",
        body: " your invited will get 2 ivitation ",
        avatar: require("../../assets/getcoin.png"),
      },
      {
        id: 6,
        title: "Now you are Platinum class",
        body: "Goodluck Gold Lv.1 ",
        avatar: require("../../assets/diamond.png"),
      },
      {
        id: 7,
        title: "Now you are Gold class  ",
        body: "Goodluck Gold Lv.1 ",
        avatar: require("../../assets/01.png"),
      },
      {
        id: 8,
        title: "Now you are Silver class  ",
        body: "Goodluck Silver Lv.1 ",
        avatar: require("../../assets/ruby.png"),
      },
      {
        id: 9,
        title: "Now you are Bronze class  ",
        body: "Goodluck Bronze Lv.5 ",
        avatar: require("../../assets/emeral.png"),
      },
      {
        id: 10,
        title: "Now you are Bronze class  ",
        body: "Goodluck Bronze Lv.4 ",
        avatar: require("../../assets/emeral.png"),
      },
      {
        id: 11,
        title: "Now you are Bronze class  ",
        body: "Goodluck Bronze Lv.3 ",
        avatar: require("../../assets/emeral.png"),
      },
      {
        id: 12,
        title: "Now you are Bronze class  ",
        body: "Goodluck Bronze Lv.2 ",
        avatar: require("../../assets/emeral.png"),
      },
      {
        id: 13,
        title: "Now you are Bronze class  ",
        body: "Goodluck Bronze Lv.1 ",
        avatar: require("../../assets/emeral.png"),
      },
    ];
    setNotifications(data);
  }, []);

  return (

    <View style={styles.container}>
      <ScrollView >
        <View style={{ flex: 1, paddingHorizontal: 5 }}>
          {notifications.map((item) => (
            <TouchableOpacity
              key={item.id}
              onPress={() => navigation.navigate("NotificationDetails", { item })}
            >
              <View style={styles.card}>
                <View style={styles.cardHeader}>
                  <Image source={item.avatar} style={styles.avatar} />
                  <View>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.subtitle}>{item.body}</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>

      </ScrollView>
    </View>

  );
};
export default MessageScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#EEE1FF",
  },
  card: {
    backgroundColor: "#fff",
    marginBottom: 10,
    borderRadius: 10,
    elevation: 2,
    padding: 10,
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  avatar: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 5,
  },
  subtitle: {
    color: "#555",
    fontSize: 12,
    width: 300
  },
});
