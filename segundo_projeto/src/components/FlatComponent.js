import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const FlatComponent = ({data}) => {
  const navigation = useNavigation();

  const navegar = () => {
    navigation.navigate('Detalhes do Filme', {data: data});
  };

  return (
    <TouchableOpacity style={styles.container} onPress={navegar}>
      <Image
        resizeMode="contain"
        source={{uri: data.imagem}}
        style={{width: 150, height: 150}}
      />
      <View style={styles.subContainer}>
        <Text style={styles.title}>{data.filme}</Text>
        <Text>{data.ano}</Text>
        <Text>{data.estilo}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f0f0f0',
    marginBottom: 5,
    flexDirection: 'row',
  },
  subContainer: {
    marginLeft: 10,
    justifyContent: 'space-around',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default FlatComponent;
