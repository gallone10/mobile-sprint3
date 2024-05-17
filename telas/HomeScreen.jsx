import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  const navigateToLogin = () => {
    navigation.navigate('Login');
  };

  const navigateToCadastro = () => {
    navigation.navigate('Cadastro');
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/MicrosoftTeams-image.png')}
        style={styles.logo}
      />
      <TouchableOpacity
        style={[styles.button, { backgroundColor: '#BFB7FD' }]}
        onPress={navigateToCadastro}
      >
        <Text style={[styles.buttonText, { fontFamily: 'Verdana, sans-serif' }]}>
          Clique aqui para realizar seu cadastro
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={navigateToLogin}>
        <Text style={[styles.loginText, { fontFamily: 'Verdana, sans-serif', textDecorationLine: 'underline' }]}>
          Já possui cadastro? Login
        </Text>
      </TouchableOpacity>
      <Text style={styles.termsText}>
        Ao se inscrever, você concorda com os Termos de Serviço e a Política de
        Privacidade, incluindo o Uso de Cookies.
      </Text>
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
    width: 200,
    height: 300,
    marginBottom: 20,
  },
  button: {
    padding: 10,
    borderRadius: 5,
    borderRadius: 100
  },
  buttonText: {
    fontSize: 15,
  },
  loginText: {
    color: '#FFF',
    marginTop: 10,
  },
  termsText: {
    color: 'grey',
    marginTop: 15,
    fontSize: 12,
    textAlign: 'center',
  },
});

export default HomeScreen;
