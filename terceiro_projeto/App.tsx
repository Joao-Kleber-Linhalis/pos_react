import Geolocation from '@react-native-community/geolocation';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {
  Button,
  Image,
  PermissionsAndroid,
  StyleSheet,
  View,
} from 'react-native';
import * as ImagePicker from 'react-native-image-picker';
import LocationGetter from './src/LocationGetter';
import Map from './src/Map';

const App = () => {
  // const [response, setResponse] = React.useState<any>(null);

  // const getPhoto = () => {
  //   ImagePicker.launchCamera(
  //     {
  //       mediaType: 'photo',
  //       includeBase64: true,
  //     },
  //     setResponse,
  //   );
  // };

  // return (
  //   <View>
  //     {response?.assets &&
  //       response?.assets.map(({uri}: {uri: string}) => (
  //         <View key={uri} style={styles.imageContainer}>
  //           <Image
  //             resizeMode="cover"
  //             resizeMethod="scale"
  //             style={styles.image}
  //             source={{uri: uri}}
  //           />
  //         </View>
  //       ))}
  //       {/* <Image source={{uri: response?.assets[0].uri}}></Image> */}
  //     <Button title="Selecionar Imagem" onPress={getPhoto}></Button>
  //   </View>
  // );

  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen component={LocationGetter} name="Pegar Localização" />
        <Stack.Screen component={Map} name="Mapa" />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
