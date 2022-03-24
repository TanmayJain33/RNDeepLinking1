import React from 'react';
import {View, Text, TouchableOpacity, Linking} from 'react-native';

export default function LinkingScreen() {
  const Url_A = 'rndeeplinking1://app/a';
  const Url_B = 'rndeeplinking1://app/b/come-from-url';
  const Url_C = 'rndeeplinking1://app/c';

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <TouchableOpacity
        style={{
          backgroundColor: '#007aff',
          paddingHorizontal: 30,
          paddingVertical: 5,
          borderRadius: 5,
          margin: 5,
        }}
        onPress={() => Linking.openURL(Url_A)}>
        <Text style={{fontSize: 28, color: '#fff'}}>Deep Link to Screen A</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: '#007aff',
          paddingHorizontal: 30,
          paddingVertical: 5,
          borderRadius: 5,
          margin: 5,
        }}
        onPress={() => Linking.openURL(Url_B)}>
        <Text style={{fontSize: 28, color: '#fff'}}>Deep Link to Screen B</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: '#007aff',
          paddingHorizontal: 30,
          paddingVertical: 5,
          borderRadius: 5,
          margin: 5,
        }}
        onPress={() => Linking.openURL(Url_C)}>
        <Text style={{fontSize: 28, color: '#fff'}}>Deep Link to Screen C</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: '#007aff',
          paddingHorizontal: 30,
          paddingVertical: 5,
          borderRadius: 5,
          margin: 5,
        }}
        onPress={() => Linking.openURL('https://reactnative.dev/')}>
        <Text style={{fontSize: 28, color: '#fff'}}>Open Public URL</Text>
      </TouchableOpacity>
    </View>
  );
}
