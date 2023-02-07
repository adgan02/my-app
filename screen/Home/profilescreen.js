import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import Occupations from '../Home/Occupation.json';

const Profilescreen = () => {
  return (
    <View>
      <ScrollView>
        {Occupations.Occupations.map((item, i) => (
          <View key={i}>
            <Text style={{fontSize:22}}>{item.Name}</Text>
            <Text> Suitability: {item.suitability}</Text>
            <Text> Good: {item.good}</Text>
            <Text> Not Good: {item.notgood}</Text>


            {item.trycareer && item.trycareer.map((subitem, j) => (
              <View key={j}>
                <Text style={{fontSize:16}}>{subitem.Name}</Text>
                <Text> Suitability: {subitem.suitability}</Text>
                <Text> Good: {subitem.good}</Text>
                <Text> Not Good: {subitem.notgood}</Text>
              </View>
            ))}
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Profilescreen;
