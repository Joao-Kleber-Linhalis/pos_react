import {StyleSheet, View} from 'react-native';
import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import {useRoute} from '@react-navigation/native';

const Map = () => {
  const route = useRoute();

  const {latitude, longitude} = route.params || {};

  const INITIAL_REGION = {
    latitude: latitude || 37.78825, //Valores padrões do google qualquer coisa
    longitude: longitude || -122.4324, 
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  return (
    <View style={styles.container}>
      <MapView style={styles.map} initialRegion={INITIAL_REGION}>
        <Marker
          coordinate={{
            latitude: INITIAL_REGION.latitude,
            longitude: INITIAL_REGION.longitude,
          }}
          title="Localização atual"
          description="Localização atual do usuario"
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default Map;
