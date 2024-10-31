import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'; // Importando Firebase Auth


const CadastroScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmaSenha, setConfirmaSenha] = useState('');

  // Função de cadastro usando Firebase Auth
  const cadastrarUsuario = (email, senha) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, senha)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log('Usuário cadastrado:', user);
        Alert.alert('Sucesso', 'Usuário cadastrado com sucesso!');
        navigation.navigate('Login'); // Redireciona para a tela de Login após o cadastro
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log('Erro ao cadastrar:', errorMessage);
        Alert.alert('Erro', errorMessage);

      });
  };

  const navegarToCadastro = () => {
    if (email && senha && confirmaSenha) {
      if (senha === confirmaSenha) {
        cadastrarUsuario(email, senha); // Chamando a função de cadastro
      } else {
        Alert.alert('Erro', 'As senhas não coincidem');
      }
    } else {
      Alert.alert('Erro', 'Todos os campos devem ser preenchidos');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Cadastre-se</Text>
      <View style={styles.logoContainer}>
        <Image source={require('../assets/MicrosoftTeams-image (1).png')} style={styles.logo} />
      </View>
      <View style={styles.formContainer}>
        <TextInput
          style={[styles.input, { backgroundColor: '#BFB7FD' }]}
          placeholder="Email:"
          placeholderTextColor="black"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={[styles.input, { backgroundColor: '#BFB7FD' }]}
          placeholder="Senha:"
          placeholderTextColor="black"
          secureTextEntry
          value={senha}
          onChangeText={setSenha}
        />
        <TextInput
          style={[styles.input, { backgroundColor: '#BFB7FD' }]}
          placeholder="Confirme sua senha:"
          placeholderTextColor="black"
          secureTextEntry
          value={confirmaSenha}
          onChangeText={setConfirmaSenha}
        />
        <TouchableOpacity style={styles.button} onPress={navegarToCadastro}>
          <Text style={styles.buttonText}>Confirmar Cadastro</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text
            style={[styles.loginText, { color: 'white', textDecorationLine: 'underline', fontFamily: 'Verdana, sans-serif' }]}
          >
            Já tem uma conta? Faça login
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 24,
    color: 'white',
    marginBottom: 20,
  },
  logoContainer: {
    // Estilize seu logotipo aqui
  },
  logo: {
    width: 200,
    height: 200,
  },
  formContainer: {
    width: '80%',
  },
  input: {
    fontFamily: 'Verdana, sans-serif',
    padding: 15,
    borderRadius: 100,
    marginTop: 10,
  },
  button: {
    backgroundColor: '#7B1FA2',
    padding: 10,
    borderRadius: 100,
    marginTop: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'Verdana, sans-serif',
  },
  loginText: {
    marginTop: 20,
    textAlign: 'center',
  },
});

export default CadastroScreen;
