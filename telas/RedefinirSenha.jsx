import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
 
const App = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/MicrosoftTeams-image (1).png')}
        style={styles.logo}
      />
      <Text style={styles.title}>Esqueceu sua senha?</Text>
      <Text style={styles.subtitle}>Digite o código recebido por email ou SMS</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite o código recebido:"
        keyboardType="numeric"
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Clique aqui para redefinir</Text>
      </TouchableOpacity>
    </View>
  );
};
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000', // Fundo escuro
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    width: 150,
    height: 100,
    marginBottom: 20,
  },
  title: {
    color: '#fff',
    fontSize: 22,
    marginBottom: 10,
  },
  subtitle: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center', // Centraliza o texto
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    backgroundColor: '#BFB7FD', // Cor alterada para BFB7FD
    width: '100%',
    marginBottom: 20,
    paddingHorizontal: 10,
    textAlign: 'center',
    borderRadius: 100
  },
  button: {
    backgroundColor: '#8e44ad', // Botão roxo
    paddingVertical: 10, // Diminui o padding vertical
    paddingHorizontal: 10, // Diminui o padding horizontal
    borderRadius: 100, // Diminui o borderRadius
    width: '65%',
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
});
 
export default App;