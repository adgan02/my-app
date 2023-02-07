import * as React from 'react';
import { Image, ScrollView, StatusBar, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native';

const Horoscope = ({ props }) => {
    return (
        <View>
            <View style={{ flexDirection: 'row', paddingTop: StatusBar.currentHeight }}>
                <View style={{ width: '10%' }}></View>
                <Text style={{
                    fontWeight: "bold",
                    fontSize: 18,
                }}>Horoscope</Text>
                <View style={{ width: '50%' }}></View>
                <TouchableHighlight>
                    <Text>View all</Text>
                </TouchableHighlight>
            </View>
            <ScrollView horizontal={true} style={{ paddingTop: StatusBar.currentHeight, margin: '3%' }}>
                <TouchableOpacity onPress={() => { }}>
                    <View style={{
                        borderRadius: 90,
                        backgroundColor: '#E210F5', height: 90, width: 90, alignItems: 'center', justifyContent: 'center'
                    }}>
                        <Text>Love</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { }}>
                    <View style={{
                        borderRadius: 200,
                        backgroundColor: '#17B9FE', height: 90, width: 90, alignItems: 'center', justifyContent: 'center'
                    }}>
                        <Text>work</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { }}>
                    <View style={{
                        borderRadius: 200,
                        backgroundColor: '#F96161', height: 90, width: 90, alignItems: 'center', justifyContent: 'center'
                    }}>
                        <Text>Healthy</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { }}>
                    <View style={{
                        borderRadius: 200,
                        backgroundColor: '#02648E', height: 90, width: 90, alignItems: 'center', justifyContent: 'center'
                    }}>
                        <Text>finance and accounting</Text>
                    </View>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
};

export default Horoscope