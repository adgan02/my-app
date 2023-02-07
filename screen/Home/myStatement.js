import * as React from "react";
import { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, SafeAreaView } from "react-native";

const MyStatement = ({ navigation }) => {
  const [notifications, setNotifications] = useState([]);
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [currentDate, setCurrentDate] = useState('');
  useEffect(() => {
    // fetch notifications data from backend or other source
    const data = [
      {
        id: 1,
        title: "withdraw",
        body: "26-01-23@19:09 Account X-XX794-6 : deposit -146.00 baht",
        avatar: require("../../assets/wallets.png"),
      },
      {
        id: 2,
        title: "withdraw",
        body: "26-01-23@19:09 Account X-XX794-6 : withdraw  -196.00 baht",
        avatar: require("../../assets/wallets.png"),
      },
      {
        id: 3,
        title: "deposit",
        body: "26-01-23@19:09 Account X-XX794-6 : deposit +200.00 baht",
        avatar: require("../../assets/wallet.png"),
      },

      {
        id: 4,
        title: "deposit",
        body: "26-01-23@19:09 Account X-XX794-6 : deposit -200.00 baht",
        avatar: require("../../assets/wallets.png"),
      },
      {
        id: 5,
        title: "deposit",
        body: "26-01-23@19:09 Account X-XX794-6 : deposit +200.00 baht",
        avatar: require("../../assets/wallet.png"),
      },
      {
        id: 6,
        title: "deposit",
        body: "26-01-23@19:09 Account X-XX794-6 : deposit +200.00 baht",
        avatar: require("../../assets/wallet.png"),
      },

    ];

    setNotifications(data);
    const intervalId = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    var hours = new Date().getHours(); //Current Hours
    var min = new Date().getMinutes(); //Current Minutes
    var sec = new Date().getSeconds(); //Current Seconds
    setCurrentDate(
      date + '/' + month + '/' + year + ' ' + hours + ':' + min + ':' + sec
    );
  }, []);

  return (
    <View style={styles.firstcontainer}>
      <SafeAreaView style={{ flex: -1 }}>



        <Text style={styles.textStyle}>{currentDate}</Text>


      </SafeAreaView>

      <View style={styles.container}>

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
      </View></View>
  );
};
export default MyStatement;
const styles = StyleSheet.create({
  firstcontainer: {
    flex: 1,
    backgroundColor: "#EEE1FF",
    width: "100%",

  },
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
  textStyle: {
  
    marginLeft: 15,
    fontSize: 15,
    marginTop: 18,

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
