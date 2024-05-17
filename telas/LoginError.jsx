import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
 
const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
       <Text style={[styles.title, { fontFamily: 'Verdana, sans-serif' }]}>  Login incorreto</Text>
        <Image
          source={require('../assets/MicrosoftTeams-image.png')}
          style={styles.logo}
        />
      </View>
      <Text style={[styles.errorText, { color: 'red', fontFamily: 'Verdana, sans-serif' }]}>Reescreva seu e-mail:</Text>
      <TextInput
        style={[styles.input, { backgroundColor: '#BFB7FD', fontFamily: 'Verdana, sans-serif' }]}
        placeholder="E-mail:"
        placeholderTextColor="#000" // Definindo a cor preta para o placeholder
      />
      <Text style={[styles.errorText, { color: 'red', fontFamily: 'Verdana, sans-serif' }]}>Insira sua senha:</Text>
      <TextInput
        style={[styles.input, { backgroundColor: '#BFB7FD', fontFamily: 'Verdana, sans-serif' }]}
        placeholder="Senha: "
        placeholderTextColor="#000" // Definindo a cor preta para o placeholder
        secureTextEntry
      />
      <TouchableOpacity>
        <Text style={[styles.forgotPasswordText, { fontFamily: 'Verdana, sans-serif' }]}>
          Esqueceu sua senha? Clique aqui para redefini-la
        </Text>
      </TouchableOpacity>
     
    </View>
  );
};
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {},
  logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  errorText: {
    marginBottom: 10,
    fontFamily: 'Verdana, sans-serif',
  },
  input: {
    width: '80%',
    padding: 10,
    marginBottom: 10,
    borderRadius: 100,
    fontFamily: 'Verdana, sans-serif',
  },
  forgotPasswordText: {
    color: '#BFB7FD',
    marginTop: 10,
    fontFamily: 'Verdana, sans-serif',
    fontSize: 13
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    fontFamily: 'Verdana, sans-serif',
    alignContent: 'center'
  },
});
 
export default LoginScreen;