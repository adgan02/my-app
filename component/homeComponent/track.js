import * as React from 'react';
import { Image, ScrollView, StatusBar, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native';

const Track = ({ props }) => {
    return (
        <View>
            <View style={{ flexDirection: 'row', paddingTop: StatusBar.currentHeight }}>
                <View style={{ width: '10%' }}></View>
                <Text style={{
                    fontWeight: "bold",
                    fontSize: 18,
                }}>Track</Text>
                <View style={{ width: '50%' }}></View>
                <TouchableHighlight>
                    <Text>View all</Text>
                </TouchableHighlight>
            </View>
            <ScrollView style={{ flexDirection: 'row', paddingTop: StatusBar.currentHeight, margin: '3%' }} horizontal={true}>
                <View style={{ backgroundColor: '#eee', borderRadius: 90, width: 100, height: 100 }}>
                    <TouchableOpacity onPress={() => { }}>
                        <Image source={require('../../assets/login-logo.png')} style={{ width: 100, height: 100 }}></Image>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
};

export default Track