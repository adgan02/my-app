import * as React from 'react';
import { Image, ScrollView, StatusBar, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native';

const Promotion = ({ props }) => {
    return (
        <View>
            <View style={{ flexDirection: 'row', paddingTop: StatusBar.currentHeight }}>
                <View style={{ width: '10%' }}></View>
                <Text style={{
                    fontWeight: "bold",
                    fontSize: 18,
                }}>Promotion</Text>
                <View style={{ width: '50%' }}></View>
                <TouchableHighlight>
                    <Text>View all</Text>
                </TouchableHighlight>
            </View>
            <ScrollView style={{ flexDirection: 'row', paddingTop: StatusBar.currentHeight }} horizontal={true}>
                <View style={{ width: '5%' }}></View>
                <TouchableOpacity onPress={() => { }}>
                    <Image source={require('../../assets/jojo.jpg')} style={{ width: 320, height: 100 }}></Image>
                </TouchableOpacity>
                <View style={{ width: '5%' }}></View>
                <TouchableOpacity onPress={() => { }}>
                    <Image source={require('../../assets/jojo.jpg')} style={{ width: 320, height: 100 }}></Image>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
};

export default Promotion