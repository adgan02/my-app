import * as React from 'react';
import { Image, ScrollView, StatusBar, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native';

const MenuVC = ({ props }) => {
    return (
        <View style={{ minHeight: 100, padding:5 }}>
            <ScrollView style={{ flexDirection: 'row', margin: '3%' }} horizontal={true}
                showsHorizontalScrollIndicator={false} >
                <View style={{ backgroundColor: '#eee', borderRadius: 90, width: 80, height: 80 }}>
                    <TouchableOpacity onPress={() => { }}>
                        <Image source={require('../../assets/ไพ่icon/1.png')} style={{ borderRadius: 90, width: 80, height: 80 }}></Image>
                    </TouchableOpacity>
                </View>
                <View style={{ backgroundColor: '#eee', borderRadius: 90, width: 80, height: 80 }}>
                    <TouchableOpacity onPress={() => { }}>
                        <Image source={require('../../assets/ไพ่icon/2.png')} style={{ borderRadius: 90, width: 80, height: 80 }}></Image>
                        <Text></Text>
                    </TouchableOpacity>
                </View>
                <View style={{ backgroundColor: '#eee', borderRadius: 90, width: 80, height: 80 }}>
                    <TouchableOpacity onPress={() => { }}>
                        <Image source={require('../../assets/ไพ่icon/3.png')} style={{ borderRadius: 90, width: 80, height: 80 }}></Image>
                        <Text></Text>
                    </TouchableOpacity>
                </View>
                <View style={{ backgroundColor: '#eee', borderRadius: 90, width: 80, height: 80 }}>
                    <TouchableOpacity onPress={() => { }}>
                        <Image source={require('../../assets/ไพ่icon/4.png')} style={{ borderRadius: 90, width: 80, height: 80 }}></Image>
                        <Text></Text>
                    </TouchableOpacity>
                </View>
                <View style={{ backgroundColor: '#eee', borderRadius: 90, width: 80, height: 80 }}>
                    <TouchableOpacity onPress={() => { }}>
                        <Image source={require('../../assets/ไพ่icon/5.png')} style={{ borderRadius: 90, width: 80, height: 80 }}></Image>
                        <Text></Text>
                    </TouchableOpacity>
                </View>
                <View style={{ backgroundColor: '#eee', borderRadius: 90, width: 80, height: 80 }}>
                    <TouchableOpacity onPress={() => { }}>
                        <Image source={require('../../assets/ไพ่icon/6.png')} style={{ borderRadius: 90, width: 80, height: 80 }}></Image>
                        <Text></Text>
                    </TouchableOpacity>
                </View>
                <View style={{ backgroundColor: '#eee', borderRadius: 90, width: 80, height: 80 }}>
                    <TouchableOpacity onPress={() => { }}>
                        <Image source={require('../../assets/ไพ่icon/7.png')} style={{ borderRadius: 90, width: 80, height: 80 }}></Image>
                        <Text></Text>
                    </TouchableOpacity>
                </View>
                <View style={{ backgroundColor: '#eee', borderRadius: 90, width: 80, height: 80 }}>
                    <TouchableOpacity onPress={() => { }}>
                        <Image source={require('../../assets/ไพ่icon/8.png')} style={{ borderRadius: 90, width: 80, height: 80 }}></Image>
                        <Text></Text>
                    </TouchableOpacity>
                </View>
                <View style={{ backgroundColor: '#eee', borderRadius: 90, width: 80, height: 80 }}>
                    <TouchableOpacity onPress={() => { }}>
                        <Image source={require('../../assets/ไพ่icon/9.png')} style={{ borderRadius: 90, width: 80, height: 80 }}></Image>
                        <Text></Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
};

export default MenuVC