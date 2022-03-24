import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

export default function ScreenC({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <TouchableOpacity
        style={{
          backgroundColor: '#007aff',
          paddingHorizontal: 30,
          paddingVertical: 5,
          borderRadius: 5,
        }}
        onPress={() => navigation.navigate('LinkingScreen')}>
        <Text style={{color: '#fff', fontSize: 40}}>Go to Linking</Text>
      </TouchableOpacity>
    </View>
  );
}
