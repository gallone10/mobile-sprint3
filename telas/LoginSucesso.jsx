import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoginSuccessScreen = () => {
  const navigation = useNavigation();

  // Função que redireciona para a página principal
  const navigateToPrincipal = () => {
    navigation.navigate('Principal'); // Redireciona para a página 'principal'
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/MicrosoftTeams-image (1).png')} 
        style={styles.logo}
      />
      <Text style={[styles.successMessage, { fontFamily: 'Verdana, sans-serif' }]}>
        Login realizado com sucesso!
      </Text>
      <TouchableOpacity 
        style={[styles.proceedButton, { backgroundColor: '#BFB7FD' }]} 
        onPress={navigateToPrincipal} // Altere aqui para redirecionar à tela 'principal'
      >
        <Text style={[styles.proceedButtonText, { color: '#000', fontFamily: 'Trebuchet MS, sans-serif' }]}>
          Clique aqui para acessar nosso site
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
  logo: {
    width: 200,
    height: 130,
    marginBottom: 20,
  },
  successMessage: {
    color: '#fff',
    fontSize: 20,
    marginBottom: 20,
  },
  proceedButton: {
    padding: 5,
    borderRadius: 100,
  },
  proceedButtonText: {
    fontSize: 16,
  },
});

export default LoginSuccessScreen;
