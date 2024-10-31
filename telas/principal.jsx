import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Conteúdo Central */}
      <View style={styles.content}>
        {/* Logo e Nome da Empresa */}
        <View style={styles.logoContainer}>
          <Image
            source={require('../assets/logo1.png')} // Insira o caminho correto da logo
            style={styles.logo}
          />
          <Text style={styles.companyName}></Text>
        </View>

        {/* Texto Principal */}
        <Text style={styles.mainText}>IA que prevê, tecnologia que transforma.</Text>

        {/* Subtexto */}
        <Text style={styles.subText}>
          Decisões certeiras, insights precisos: tudo com nossa IA de previsão de tendências.
        </Text>

        {/* Imagem do celular */}
        <Image
          source={require('../assets/logo2.png')}
          style={styles.phoneImage}
        />

        {/* Botão de Cadastro */}
        <TouchableOpacity
          style={styles.registerButton}
          onPress={() => navigation.navigate('CadastroEmpresa')}
        >
          <Text style={styles.registerButtonText}>Clique aqui para cadastrar sua empresa</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000', 
    padding: 20,
    justifyContent: 'space-between',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 250,  
    height: 80, 
  },
  companyName: {
    fontSize: 24,
    color: '#6A00F4', 
    marginLeft: 10,
  },
  mainText: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  subText: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  phoneImage: {
    width: 350, 
    height: 300,
    resizeMode: 'contain',
  },
  registerButton: {
    backgroundColor: '#6A00F4',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 20,
  },
  registerButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
