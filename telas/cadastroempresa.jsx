import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, FlatList, TouchableOpacity, Alert } from 'react-native';
import { db, collection, addDoc, getDocs, doc, updateDoc, deleteDoc } from '../firebase/firebaseConfig';

const CadastroEmpresa = () => {
  const [nome, setNome] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [endereco, setEndereco] = useState('');
  const [empresas, setEmpresas] = useState([]);
  const [editandoId, setEditandoId] = useState(null);

  useEffect(() => {
    carregarEmpresas();
  }, []);

  const carregarEmpresas = () => {

    setEmpresas([]);
  };

  const handleSalvar = () => {
    if (!nome || !cnpj || !endereco) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos antes de cadastrar.');
      return;
    }

    if (editandoId) {
      const empresasAtualizadas = empresas.map((empresa) =>
        empresa.id === editandoId ? { id: editandoId, nome, cnpj, endereco } : empresa
      );
      setEmpresas(empresasAtualizadas);
      Alert.alert('Sucesso', 'Empresa atualizada com sucesso.');
      setEditandoId(null);
    } else {
      
      const novaEmpresa = { id: Date.now().toString(), nome, cnpj, endereco };
      setEmpresas([...empresas, novaEmpresa]);
      Alert.alert('Sucesso', 'Empresa cadastrada com sucesso.');
    }

  
    setNome('');
    setCnpj('');
    setEndereco('');
  };

  const handleExcluir = (id) => {
    const empresasAtualizadas = empresas.filter((empresa) => empresa.id !== id);
    setEmpresas(empresasAtualizadas);
    Alert.alert('Sucesso', 'Empresa excluída com sucesso.');
  };

  const handleEditar = (empresa) => {
    setNome(empresa.nome);
    setCnpj(empresa.cnpj);
    setEndereco(empresa.endereco);
    setEditandoId(empresa.id);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{editandoId ? 'Editar Empresa' : 'Cadastro de Empresa'}</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome da Empresa"
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        style={styles.input}
        placeholder="CNPJ"
        value={cnpj}
        onChangeText={setCnpj}
      />
      <TextInput
        style={styles.input}
        placeholder="Endereço"
        value={endereco}
        onChangeText={setEndereco}
      />

      <TouchableOpacity onPress={handleSalvar} style={styles.cadastrarButton}>
        <Text style={styles.cadastrarButtonText}>{editandoId ? 'Salvar Alterações' : 'Cadastrar'}</Text>
      </TouchableOpacity>

      <Text style={styles.listTitle}>Empresas Cadastradas:</Text>
      <FlatList
        data={empresas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.empresaItem}>
            <Text style={styles.empresaText}>Nome: {item.nome}</Text>
            <Text style={styles.empresaText}>CNPJ: {item.cnpj}</Text>
            <Text style={styles.empresaText}>Endereço: {item.endereco}</Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity onPress={() => handleEditar(item)} style={styles.editButton}>
                <Text style={styles.buttonText}>Editar</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleExcluir(item.id)} style={styles.deleteButton}>
                <Text style={styles.buttonText}>Excluir</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#000',
  },
  title: {
    fontSize: 24,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  cadastrarButton: {
    backgroundColor: '#6A00F4',
    paddingVertical: 12,
    borderRadius: 5,
    marginBottom: 20,
    alignItems: 'center',
  },
  cadastrarButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  listTitle: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  empresaItem: {
    backgroundColor: '#222',
    padding: 15,
    borderRadius: 8,
    marginVertical: 5,
  },
  empresaText: {
    color: '#fff',
    marginBottom: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  editButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 8,
    borderRadius: 5,
    flex: 1,
    marginRight: 5,
  },
  deleteButton: {
    backgroundColor: '#ff4d4d',
    paddingVertical: 8,
    borderRadius: 5,
    flex: 1,
    marginLeft: 5,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
});

export default CadastroEmpresa;
