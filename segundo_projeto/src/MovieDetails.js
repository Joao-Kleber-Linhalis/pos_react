import {useRoute} from '@react-navigation/native';
import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';

const MovieDetails = () => {
  const route = useRoute();

  const data = route.params.data;

  return (
    <View style={styles.screen}>
      <ScrollView contentContainerStyle={styles.container}>
        <Image source={{uri: data.imagem}} style={styles.image} />
        <Text style={styles.title}>Filme: {data.filme}</Text>
        <Text style={styles.year}>Ano: {data.ano}</Text>
        <Text style={styles.category}>Categoria: {data.estilo}</Text>
        <Text style={styles.description}>Sinopse: {data.descricao}</Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  image: {
    resizeMode: 'contain',
    width: '100%',
    height: 300,
    borderRadius: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  year: {
    fontSize: 18,
    color: '#666',
    marginBottom: 5,
  },
  category: {
    fontSize: 18,
    color: '#666',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#444',
    textAlign: 'center',
  },
});

export default MovieDetails;
