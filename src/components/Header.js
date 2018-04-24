import React from 'react';
import { View } from 'react-native';

const Header = (props) => {
  return (
    <View style={{flex: 2}}>
      <View style = {{flex: 1, backgroundColor: '#F8C471', flexDirection: 'column'}} />
      <View style={{flex: 1, backgroundColor: '#EC7063', flexDirection: 'column'}} />
      <View style = {{flex: 1, backgroundColor: '#3498DB'}} />
    </View>
  )
}

export default Header;
