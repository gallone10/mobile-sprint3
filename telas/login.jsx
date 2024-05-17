import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const api = {
  LoginUsuario:(email, senha) => {
  },
}

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const navigateToLoginSuccess = () => {
    navigation.navigate('LoginSuccesso');
  };

  const navigateToLoginError = () => {
    navigation.navigate('LoginError');
  };

  const handleLogin = () => {
    // Verifica se o e-mail contém '@'
    if (email.includes('@')) {
      navigateToLoginSuccess();
    } else {
      navigateToLoginError();
    }
  };

  const navigateToForgotPassword = () => {
    navigation.navigate('EsqueceuSenha');
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/MicrosoftTeams-image (1).png')} style={styles.logo} />
      <Text style={[styles.header, { fontFamily: 'Verdana, sans-serif' }]}>Login</Text>
      <TextInput
        style={[styles.input, { borderColor: '#BFB7FD', fontFamily: 'Verdana, sans-serif' }]}
        onChangeText={setEmail}
        value={email}
        placeholder="Digite seu e-mail:"
        placeholderTextColor="#000" // Definindo a cor preta para o placeholder
      />
      <TextInput
        style={[styles.input, { borderColor: '#BFB7FD', fontFamily: 'Verdana, sans-serif' }]}
        onChangeText={setPassword}
        value={password}
        secureTextEntry
        placeholder="Digite sua senha:"
        placeholderTextColor="#000" // Definindo a cor preta para o placeholder
      />
      <TouchableOpacity onPress={navigateToForgotPassword}>
        <Text style={[styles.forgotPassword, { fontFamily: 'Verdana, sans-serif' }]}>Esqueceu sua senha? Clique aqui.</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={[styles.buttonText, { fontFamily: 'Verdana, sans-serif' }]}>ENTRE</Text>
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
  logo: {
    width: 140,
    height: 130,
    marginBottom: 20
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 20,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    color: '#FFF',
    backgroundColor: '#BFB7FD',
    width: '80%',
    borderRadius: 100
  },
  forgotPassword: {
    color: '#FFF',
    marginTop: 15,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#6200EE',
    padding: 10,
    marginTop: 20,
    width: '80%',
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
});

export default LoginScreen;
