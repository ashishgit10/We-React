import React from 'react';
import {View, Text} from 'react-native';
const Details = props => {
  const {name} = props.route.params;
  return (
    <View>
      <Text>{name}</Text>
    </View>
  );
};
export default Details;
