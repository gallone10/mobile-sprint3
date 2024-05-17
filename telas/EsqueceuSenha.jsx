import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Importe useNavigation corretamente

const ForgotPasswordScreen = () => {
  const navigation = useNavigation();

  const handleReceiveCode = () => {
    navigation.navigate('RedefinirSenha');
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/MicrosoftTeams-image (1).png')}
        style={styles.logo}
      />
      <Text style={styles.title}>Esqueceu sua senha?</Text>
      <Text style={styles.subtitle}>
        Receba o código para redefinir sua senha por email ou SMS
      </Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input, { backgroundColor: '#BFB7FD', color: '#000' }]}
          placeholder="Digite seu email:"
          placeholderTextColor="#black"
        />
        <TextInput
          style={[styles.input, { backgroundColor: '#BFB7FD', color: '#000' }]}
          placeholder="Digite seu número com DDD:"
          placeholderTextColor="#black"
        />
        <TouchableOpacity style={styles.button} onPress={handleReceiveCode}>
          <Text style={styles.buttonText}>RECEBER CODIGO</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 20,
  },
  subtitle: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    marginHorizontal: 40,
    marginTop: 10,
  },
  inputContainer: {
    marginTop: 20,
    backgroundColor: '#000',
    borderRadius: 10,
    padding: 20,
    width: '90%',
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    padding: 10,
    marginBottom: 20,
    borderRadius: 100
  },
  button: {
    backgroundColor: '#6200EE',
    padding: 15,
    borderRadius: 100,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default ForgotPasswordScreen;
