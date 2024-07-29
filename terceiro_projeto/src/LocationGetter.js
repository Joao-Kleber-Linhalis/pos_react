import React, {useState} from 'react';
import {
  Button,
  PermissionsAndroid,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import {useNavigation} from '@react-navigation/native';

const LocationGetter = () => {
  const navigation = useNavigation();
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  const irParaMapa = () => {
    navigation.navigate('Mapa', {latitude: latitude, longitude: longitude});
  };

  const permission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Permissão para usa de sua Localização',
          message:
            'Aplicativo de Localização precisa de autorização para acessar sua localização',
          buttonNeutral: 'Pergunte-me depois',
          buttonNegative: 'Cancelar',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Permissão para localização concedida');
      } else {
        console.log('Permissão para localização negada');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const getLocation = () => {
    permission();
    Geolocation.getCurrentPosition(response => {
      if (response != null) {
        setLatitude(response.coords.latitude);
        setLongitude(response.coords.longitude);
      }
    });
  };

  return (
    <View style={styles.container}>
      {latitude && longitude ? (
        <View style={styles.subContainer}>
          <Text style={styles.title}>Latitude: {latitude}</Text>
          <Text style={styles.title}>Longitude: {longitude}</Text>
        </View>
      ) : null}
      <TouchableOpacity style={styles.bottom} onPress={getLocation}>
        <Text style={styles.buttonText}>Pegar localização</Text>
      </TouchableOpacity>
      {latitude && longitude ? (
        <TouchableOpacity
          style={styles.bottom}
          title="Ir para o Mapa"
          onPress={irParaMapa}>
          <Text style={styles.buttonText}>Ir para o Mapa</Text>
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    marginBottom: 15,
    flexDirection: 'column',
    justifyContent: 'center', // Centraliza o conteúdo verticalmente
    paddingHorizontal: 16, // Adiciona espaçamento horizontal
  },
  subContainer: {
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  bottom: {
    alignItems: 'center',
    marginTop: 5, // Espaçamento superior
    paddingVertical: 10, // Adiciona espaço vertical dentro do botão
    paddingHorizontal: 16, // Adiciona espaço horizontal dentro do botão
    backgroundColor: '#007bff', // Exemplo de cor de fundo do botão
    borderRadius: 5, // Bordas arredondadas
  },
  buttonText: {
    color: '#fff', // Cor do texto do botão
    fontSize: 16,
  },
});

export default LocationGetter;
