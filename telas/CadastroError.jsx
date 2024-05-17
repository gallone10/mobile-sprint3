import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Importe o useNavigation
import { db, doc, updateDoc, deleteDoc } from '../firebase/firebaseConfig';

export default function App() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigation = useNavigation(); // Inicialize o useNavigation

  const handleConfirmPassword = () => {
    if (password === confirmPassword) {
      navigation.navigate('Login'); 
    } else {

    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => { /* Implementar ação de voltar */ }}>
          <Text style={styles.backButton}>{'<'}</Text>
        </TouchableOpacity>
        <Text style={styles.headerText}>Cadastro incorreto</Text>
      </View>
      <Text style={styles.errorText}>Erro: As senhas não coincidem. Por favor, verifique e tente novamente.</Text>
      <Text style={styles.promptText}>Tente novamente aqui:</Text>
      <TextInput
        style={styles.input}
        placeholder="Senha:"
        placeholderTextColor="#9c92be"
        secureTextEntry={true}
        onChangeText={setPassword}
        value={password}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirme sua senha:"
        placeholderTextColor="#9c92be"
        secureTextEntry={true}
        onChangeText={setConfirmPassword}
        value={confirmPassword}
      />
      <TouchableOpacity style={styles.confirmButton} onPress={handleConfirmPassword}>
        <Text style={styles.confirmButtonText}>Confirmar Senha</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  backButton: {
    fontSize: 24,
    color: '#fff',
  },
  headerText: {
    flex: 1,
    textAlign: 'center',
    fontSize: 24,
    color: '#fff',
  },
  errorText: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 20,
  },
  promptText: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    backgroundColor: '#7a45e5',
    color: '#fff',
    borderRadius: 5,
    height: 50,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 100
  },
  confirmButton: {
    backgroundColor: '#7B1FA2',
    padding: 15,
    borderRadius: 100,
    alignItems: 'center',
  },
  confirmButtonText: {
    color: 'white',
    fontSize: 18,
  },
});
