import React, {
  FlatList,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {View, Text} from 'react-native';
import {deviceHeight, deviceWidth} from './Dimensions';
import Icons from 'react-native-vector-icons/Ionicons';
import Image from 'react-native-vector-icons/AntDesign';
import {useState} from 'react';
import Cards from './Cards';

const Home = props => {
  const [city, setcity] = useState('');

  const cities = [
    {
      name: 'Delhi',
      image: require('../assets/images/Delhi.jpg'),
    },
    {
      name: 'London',
      image: require('../assets/images/london.jpg'),
    },
    {
      name: 'New York',
      image: require('../assets/images/nyc.jpg'),
    },
  ];

  return (
    <>
      <ImageBackground
        source={require('../assets/images/bg1.jpg')}
        style={{height: deviceHeight, width: deviceWidth}}
        imageStyle={{opacity: 0.6, backgroundColor: 'black'}}
      />
      <View style={{position: 'absolute'}}>
        <View
          style={{
            paddingVertical: 20,
            paddingHorizontal: 10,
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: deviceWidth - 20,
          }}>
          <TouchableOpacity>
            <Icons name={'menu'} size={35} color="white"></Icons>
          </TouchableOpacity>

          <Image name={'user'} size={30} color="white"></Image>
        </View>
        <View style={{paddingLeft: 20, marginTop: 100}}>
          <Text style={{fontSize: 22, color: 'white'}}>Hello Ashish</Text>
          <Text style={{fontSize: 20, color: 'white', fontWeight: 'bold'}}>
            Search by City Name
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 20,
            borderWidth: 1,
            borderRadius: 20,
            borderColor: 'white',
            marginTop: 40,
            width: deviceWidth - 20,
            marginLeft: 10,
          }}>
          <TextInput
            value={city}
            onChangeText={val => setcity(val)}
            placeholder="Search City"
            placeholderTextColor={'white'}
            style={{color: 'white', fontSize: 16}}></TextInput>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('Details', {name: city});
            }}>
            <Icons name={'search'} size={20} color="white"></Icons>
          </TouchableOpacity>
        </View>
        <Text
          style={{
            color: 'white',
            fontSize: 20,
            paddingTop: 20,
            paddingLeft: 20,
          }}>
          My Location :
        </Text>

        <FlatList
          horizontal
          scr
          data={cities}
          renderItem={({item}) => (
            <Cards
              name={item.name}
              image={item.image}
              navigation={props.navigation}
            />
          )}
        />
      </View>
    </>
  );
};
export default Home;
