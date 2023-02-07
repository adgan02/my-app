import React, { useRef, useState } from "react";
import {
    Animated,Button,
    Dimensions, Text, View, ScrollView, StyleSheet, TouchableOpacity, Image
} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import Occupations from "../Home/Occupation.json";
const SCREEN_WIDTH = Dimensions.get("window").width;

const xOffset = new Animated.Value(0);
const Screen = props => {
    const randomOccupationIndex = Math.floor(
        Math.random() * Occupations.Occupations.length
    );
    const randomOccupation = Occupations.Occupations[randomOccupationIndex];
    const randomTrycareer = randomOccupation.trycareer
        .sort(() => Math.random() - 0.5)
        .slice(0, 10);
    const [open, setOpen] = useState(false);
    const [noopen, setNoopen] = useState(true);
    const selected = useRef(true);
   
    return (
        <View style={styles.scrollPage}>

            <Animated.View style={[styles.screen, transitionAnimation(props.index)]}>
                <ScrollView style={{ height: '100%', width: '100%' }}>
                    <View style={{ height: '100%', width: '100%', alignItems: 'center' }}>

                        <TouchableOpacity
                            onPress={() => setOpen(noopen)}
                            style={{
                                width: '90%', justifyContent: 'center', alignItems: "center", marginTop: 15, marginLeft: 5, marginRight: 5, backgroundColor: '#DD95FF', elevation: 5, borderRadius: 10
                            }}>
                            {selected !== 1 &&
                                <View key={randomOccupationIndex}
                                    style={{
                                        width: "100%", justifyContent: 'center', alignItems: "center",
                                    }}>

                                    <View style={{
                                        height: 80, width: 80, borderRadius: 100, backgroundColor: '#fee4ff', justifyContent: "center", alignItems: 'center', elevation: 3,
                                    }}>
                                        <Image source={require('../../assets/avatar.png')} style={{ height: 75, width: 75, borderRadius: 100 }}></Image>
                                    </View>
                                    <Text style={{ fontSize: 15, color: '#581c72', fontWeight: '700', textAlign: 'center' }}>{randomOccupation.Name}</Text>

                                    <View style={{
                                        justifyContent: 'center', alignItems: "center",
                                    }}>
                                        <Text style={{ fontSize: 16, color: '#421555' }}> Suitability: {randomOccupation.suitability}</Text>
                                        <View style={{
                                            flexDirection: 'row'
                                        }}>
                                            <Text style={{ fontSize: 16, color: '#421555' }}> Good: {randomOccupation.good}</Text>
                                            <Text style={{ fontSize: 16, color: '#421555', paddingBottom: 10 }}> Not Good: {randomOccupation.notgood}</Text>
                                        </View>
                                    </View>
                                </View>
                            }

                        </TouchableOpacity>
                        {open && (
                            <View style={{
                                width: '100%', justifyContent: 'center', alignItems: "center", marginTop: 10
                            }}>
                                {randomTrycareer.map((subitem, j) => (
                                    <View key={j} style={{
                                        marginTop: 15, width: '90%', backgroundColor: '#E7B3FF', borderRadius: 10
                                    }}>
                                        <View style={{
                                            justifyContent: 'center', alignItems: "center",
                                        }}>
                                            <View style={{
                                                height: 80, width: 80, borderRadius: 100, backgroundColor: '#fee4ff', justifyContent: "center", alignItems: 'center', elevation: 3,
                                            }}>
                                                <Image source={require('../../assets/avatar.png')} style={{ height: 75, width: 75, borderRadius: 100 }}></Image>
                                            </View>
                                        </View>
                                        <Text style={{ fontSize: 15, color: '#581c72', fontWeight: '700', textAlign: 'center' }}>{subitem.Name}</Text>
                                        <View style={{
                                            justifyContent: 'center', alignItems: "center",
                                        }}>
                                            <Text style={{ fontSize: 16, color: '#421555' }}> Suitability: {subitem.suitability}</Text>
                                            <View style={{
                                                flexDirection: 'row'
                                            }}>
                                                <Text style={{ fontSize: 16, color: '#421555' }}> Good: {subitem.good}</Text>
                                                <Text style={{ fontSize: 16, color: '#421555', paddingBottom: 10 }}> Not Good: {subitem.notgood}</Text>
                                            </View>
                                        </View>
                                    </View>
                                ))

                                }
                            </View>
                        )}

                    </View>
                </ScrollView>
            </Animated.View>
        </View>
    );
};
const transitionAnimation = index => {
    return {
        transform: [
            { perspective: 1000 },
            // {
            //   scale: xOffset.interpolate({
            //     inputRange: [
            //       (index - 1) * SCREEN_WIDTH,
            //       index * SCREEN_WIDTH,
            //       (index + 1) * SCREEN_WIDTH
            //     ],
            //     outputRange: [0.25, 1, 0.25]
            //   })
            // },
            // {
            //   rotateY: xOffset.interpolate({
            //     inputRange: [
            //       (index - 1) * SCREEN_WIDTH,
            //       index * SCREEN_WIDTH,
            //       (index + 1) * SCREEN_WIDTH
            //     ],
            //     outputRange: ["45deg", "0deg", "45deg"]
            //   })
            // },
            // {
            //   rotateX: xOffset.interpolate({
            //     inputRange: [
            //       (index - 1) * SCREEN_WIDTH,
            //       index * SCREEN_WIDTH,
            //       (index + 1) * SCREEN_WIDTH
            //     ],
            //     outputRange: ["-45deg", "0deg", "45deg"]
            //   })
            // }
        ]
    };
};
const RandomOccupations = () => {

    const [scrollEnabled, setScrollEnabled] = useState(false);
    const age = 30;
    return (
        // <View style={{
        //     flex: 1, 
        // }}>
        <View style={styles.container1}>
        <Animated.ScrollView
           scrollEnabled={scrollEnabled}
           scrollEventThrottle={20}
           onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { x: xOffset } } }],
              { useNativeDriver: true }
           )}
                showsHorizontalScrollIndicator={false}
                horizontal
                pagingEnabled
                style={styles.scrollView}
                snapToAlignment="center"
                decelerationRate='normal'
            >
                <View style={styles.age1}>
                    <View style={styles.age}>
                        <Text style={styles.agetext}> 10 - 19 </Text>
                    </View>
                    <Screen index={0} />
                </View>
                <View style={styles.age1}>
                    <View style={styles.age}>
                        <Text style={styles.agetext}> 20 - 29 </Text>
                    </View>
                    <Screen index={1} />
                </View>
                <View style={styles.age1}>
                    <View style={styles.age}>
                        <Text style={styles.agetext}> 30 - 39 </Text>
                    </View>
                    <Screen index={2} />
                </View>
                <View style={styles.age1}>
                    <View style={styles.age}>
                        <Text style={styles.agetext}> 40 - 49 </Text>
                    </View>
                    <Screen index={3} />
                </View>
                <View style={styles.age1}>
                    <View style={styles.age}>
                        <Text style={styles.agetext}> 50 - 59 </Text>
                    </View>
                    <Screen index={4} />
                </View>
                </Animated.ScrollView>
         <View style={styles.buttonContainer}>
            <Button
               title="Toggle Scroll"
               onPress={() => setScrollEnabled(!scrollEnabled)}
            />
         </View>
      </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    container1: {
        flex: 1,
       
     },
     buttonContainer: {
        position: 'absolute',
        right: 20,
        bottom: 20
     },
    card: {
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 8,
        padding: 20,
        borderRadius: 10,
    },
    age: {
        backgroundColor: '#E7B3FF',
        alignItems: 'center',
        width: '100%'
    },
    age1: {
        alignItems: 'center',
        flexDirection: 'column',

    },
    agetext: {
        fontSize: 25,
        fontWeight: "bold"
    },
    cardText: {
        fontSize: 20,
        marginBottom: 20,
    },
    scrollView: {
        flexDirection: "row",
        backgroundColor: '#fee4ff',

    },
    scrollPage: {
        width: SCREEN_WIDTH,
        padding: 20
    },
    screen: {
        width: '100%',
        height: '100%',
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 25,
        // backgroundColor: "white"
    },
    text: {
        fontSize: 45,
        fontWeight: "bold"
    }
});
export default RandomOccupations;
