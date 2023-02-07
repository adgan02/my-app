import {
    Image,
    KeyboardAvoidingView,
    View,
    StyleSheet,
    TouchableOpacity,
    Text,
    TouchableWithoutFeedback,
    Keyboard,
    TextInput,
  } from "react-native";
  // import OTPInputView from 'react-native-otp-input';
  import React, { useEffect, useState } from "react";
 
  
  const LoadingScreen = ({ props, props_phone }) => {
  
      return (
  
        <View style={styles.cardcontainer}>
              <Image
                source={require("../../assets/bg.png")}
                style={styles.bg}
              />

              


<View style={styles.loadcontainer}>



</View>




               </View>


  
  
  
  
             
               
               
              
                
                



  );
};

const styles = StyleSheet.create({

    cardContainer: {
        alignItems: "center",
        width: "100%",
        top: '10%',
      },
      bg: {
        position: "absolute",
        
        
        top: 35,
        
        width: "100%",
       
      },

});


export default LoadingScreen ;