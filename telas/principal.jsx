import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';


const HomeScreen = () => {
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
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000', // Fundo preto
    padding: 20,
    justifyContent: 'space-between',
  },
  loginButton: {
    alignSelf: 'flex-end',
    padding: 10,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    textDecorationLine: 'underline',
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
    width: 250,  // Aumentando a largura da logo
    height: 80, // Aumentando a altura da logo
  },
  companyName: {
    fontSize: 24,
    color: '#6A00F4', // Cor roxa da logo
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
    width: 350, // Aumentando a largura da imagem do celular
    height: 300, // Aumentando a altura da imagem do celular
    resizeMode: 'contain',
  },
});

export default HomeScreen;
