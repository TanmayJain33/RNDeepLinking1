import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

export default function ScreenB({route, navigation}) {
  const {message} = route.params;

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      {message && (
        <Text style={{margin: 20, color: '#ff0000', fontSize: 20}}>
          Message: {message}
        </Text>
      )}
      <TouchableOpacity
        style={{
          backgroundColor: '#007aff',
          paddingHorizontal: 30,
          paddingVertical: 5,
          borderRadius: 5,
        }}
        onPress={() => navigation.navigate('ScreenC')}>
        <Text style={{color: '#fff', fontSize: 40}}>Go to Screen C</Text>
      </TouchableOpacity>
    </View>
  );
}
