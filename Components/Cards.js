import react, {
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {deviceHeight, deviceWidth} from './Dimensions';
const Cards = ({name, image, navigation}) => {
  return (
    <>
      <TouchableOpacity
        style={{marginHorizontal: 10, marginTop: 30}}
        onPress={() => navigation.navigate('Details', {name})}>
        <ImageBackground
          source={image}
          style={{
            height: deviceHeight / 5,
            width: deviceWidth / 2 - 50,
          }}
          imageStyle={{borderRadius: 20}}
        />

        <View style={{position: 'absolute', width: '100%', height: '100%'}}>
          <Text
            style={{
              fontSize: 25,
              width: '100%',
              height: '100%',
              textAlignVertical: 'center',
              color: 'white',
              textAlign: 'center',
            }}>
            {name}
          </Text>
        </View>
      </TouchableOpacity>
    </>
  );
};
export default Cards;
