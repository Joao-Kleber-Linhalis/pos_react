/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  Text,
  TouchableOpacity,
  TextInput,
  ImageBackground,
  StyleSheet,
  View,
  Alert,
} from 'react-native';

const App = () => {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [resultado, setResultado] = useState('');

  const Calcula = () => {
    const tempPeso = parseFloat(peso);
    const tempAltura = parseFloat(altura) / 100;
    if (!isNaN(tempPeso) && !isNaN(tempAltura) && tempAltura > 0) {
      const tempResultado = tempPeso / (tempAltura * tempAltura);
      setResultado(tempResultado.toFixed(2).toString());
    } else {
      Alert.alert('Erro', 'Valores não aceitos');
      setResultado('');
    }
    setPeso('');
    setAltura('');
  };

  return (
    <ImageBackground
      style={{
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      source={{
        uri: 'https://media.unimedcampinas.com.br/f7c45c17-a1dc-4710-957f-25ba109cddf8',
      }}>
      <Text style={styles.text2}>Calculatora de IMC</Text>
      <Text style={styles.text}>Saiba qual o seu IMC</Text>
      <TextInput
        value={peso}
        onChangeText={value => setPeso(value)}
        placeholder="Digite o seu Peso em KG"
        keyboardType="numeric"
        style={styles.textInput}
      />
      <TextInput
        value={altura}
        onChangeText={value => setAltura(value)}
        placeholder="Digite a sua Altura em CM"
        keyboardType="numeric"
        style={styles.textInput}
      />
      <TouchableOpacity onPress={Calcula}>
        <Text style={styles.text}>Calcular</Text>
      </TouchableOpacity>
      {resultado !== '' && (
        <View>
          <Text style={styles.text}>Seu IMC é:</Text>
          <Text style={styles.text2}>{resultado}</Text>
        </View>
      )}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  text: {
    backgroundColor: 'black',
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
  text2: {
    backgroundColor: 'black',
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textInput: {
    backgroundColor: 'white',
    width: '90%',
    marginVertical: 10,
  },
});

export default App;
