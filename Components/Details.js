import React from 'react';
import {View, Text,StyleSheet} from 'react-native';
const Details = props => {
  const {name} = props.route.params;
  return (
    <View>
      <Text style={{color:'black'}}>{name}</Text>
    </View>
  );
};
export default Details;
