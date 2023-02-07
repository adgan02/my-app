import * as React from 'react';
import { Image, ScrollView, StatusBar, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native';

const Zodiac = ({ props }) => {
    return (
        <View>
            <View style={{ flexDirection: 'row', paddingTop: StatusBar.currentHeight }}>
                <View style={{ width: '10%' }}></View>
                <Text style={{
                    fontWeight: "bold",
                    fontSize: 18,
                }}>Zodiac</Text>
                <View style={{ width: '50%' }}></View>
                <TouchableHighlight>
                    <Text>View all</Text>
                </TouchableHighlight>
            </View>
            <ScrollView style={{ flexDirection: 'row', paddingTop: StatusBar.currentHeight, margin: '3%' }} horizontal={true}>
                <View style={{ backgroundColor: '#eee', borderRadius: 90, width: 100, height: 100 }}>
                    <TouchableOpacity onPress={() => { }}>
                        <Image source={require('../../assets/ปี/1.png')} style={{ width: 100, height: 100 }}></Image>
                    </TouchableOpacity>
                </View>
                <View style={{ backgroundColor: '#eee', borderRadius: 90, width: 100, height: 100 }}>
                    <TouchableOpacity onPress={() => { }}>
                        <Image source={require('../../assets/ปี/2.png')} style={{ width: 100, height: 100 }}></Image>
                    </TouchableOpacity>
                </View>
                <View style={{ backgroundColor: '#eee', borderRadius: 90, width: 100, height: 100 }}>
                    <TouchableOpacity onPress={() => { }}>
                        <Image source={require('../../assets/ปี/3.png')} style={{ width: 100, height: 100 }}></Image>
                    </TouchableOpacity>
                </View>
                <View style={{ backgroundColor: '#eee', borderRadius: 90, width: 100, height: 100 }}>
                    <TouchableOpacity onPress={() => { }}>
                        <Image source={require('../../assets/ปี/4.png')} style={{ width: 100, height: 100 }}></Image>
                    </TouchableOpacity>
                </View>
                <View style={{ backgroundColor: '#eee', borderRadius: 90, width: 100, height: 100 }}>
                    <TouchableOpacity onPress={() => { }}>
                        <Image source={require('../../assets/ปี/5.png')} style={{ width: 100, height: 100 }}></Image>
                    </TouchableOpacity>
                </View>
                <View style={{ backgroundColor: '#eee', borderRadius: 90, width: 100, height: 100 }}>
                    <TouchableOpacity onPress={() => { }}>
                        <Image source={require('../../assets/ปี/6.png')} style={{ width: 100, height: 100 }}></Image>
                    </TouchableOpacity>
                </View>
                <View style={{ backgroundColor: '#eee', borderRadius: 90, width: 100, height: 100 }}>
                    <TouchableOpacity onPress={() => { }}>
                        <Image source={require('../../assets/ปี/7.png')} style={{ width: 100, height: 100 }}></Image>
                    </TouchableOpacity>
                </View>
                <View style={{ backgroundColor: '#eee', borderRadius: 90, width: 100, height: 100 }}>
                    <TouchableOpacity onPress={() => { }}>
                        <Image source={require('../../assets/ปี/8.png')} style={{ width: 100, height: 100 }}></Image>
                    </TouchableOpacity>
                </View>
                <View style={{ backgroundColor: '#eee', borderRadius: 90, width: 100, height: 100 }}>
                    <TouchableOpacity onPress={() => { }}>
                        <Image source={require('../../assets/ปี/9.png')} style={{ width: 100, height: 100 }}></Image>
                    </TouchableOpacity>
                </View>
                <View style={{ backgroundColor: '#eee', borderRadius: 90, width: 100, height: 100 }}>
                    <TouchableOpacity onPress={() => { }}>
                        <Image source={require('../../assets/ปี/10.png')} style={{ width: 100, height: 100 }}></Image>
                    </TouchableOpacity>
                </View>
                <View style={{ backgroundColor: '#eee', borderRadius: 90, width: 100, height: 100 }}>
                    <TouchableOpacity onPress={() => { }}>
                        <Image source={require('../../assets/ปี/11.png')} style={{ width: 100, height: 100 }}></Image>
                    </TouchableOpacity>
                </View>
                <View style={{ backgroundColor: '#eee', borderRadius: 90, width: 100, height: 100 }}>
                    <TouchableOpacity onPress={() => { }}>
                        <Image source={require('../../assets/ปี/12.png')} style={{ width: 100, height: 100 }}></Image>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
};

export default Zodiac