import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

export default function ScreenA({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <TouchableOpacity
        style={{
          backgroundColor: '#007aff',
          paddingHorizontal: 30,
          paddingVertical: 5,
          borderRadius: 5,
        }}
        onPress={() =>
          navigation.navigate('ScreenB', {message: 'Come from Screen A'})
        }>
        <Text style={{fontSize: 40, color: '#fff'}}>Go To Screen B</Text>
      </TouchableOpacity>
    </View>
  );
}
