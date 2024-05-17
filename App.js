

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './telas/HomeScreen.jsx';
import CadastroScreen from './telas/cadastro.jsx';
import LoginScreen from './telas/login.jsx';
import LoginSucesso from './telas/LoginSucesso.jsx';
import LoginError from './telas/LoginError.jsx';
import EsqueceuSenha from './telas/EsqueceuSenha.jsx';
import RedefinirSenha from './telas/RedefinirSenha.jsx';
import CadastroError from './telas/CadastroError.jsx'

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Cadastro" component={CadastroScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="LoginSuccesso" component={LoginSucesso} />
        <Stack.Screen name="LoginError" component={LoginError} />
        <Stack.Screen name="EsqueceuSenha" component={EsqueceuSenha} />
        <Stack.Screen name="RedefinirSenha" component={RedefinirSenha} />
        <Stack.Screen name="CadastroError" component={CadastroError} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
