import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, TextInput, Button, FlatList, ActivityIndicator, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { collection, addDoc, getDocs, deleteDoc, doc, db } from '../firebase/firebaseConfig'; // Certifique-se de apontar para seu arquivo firebaseConfig

export default function HomeScreen() {
  const [nomeEmpresa, setNomeEmpresa] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [endereco, setEndereco] = useState('');
  const [empresasList, setEmpresasList] = useState([]);
  const [loading, setLoading] = useState(false);

  const addEmpresa = async () => {
    setLoading(true);
    try {
      const docRef = await addDoc(collection(db, "Empresas"), {
        nomeEmpresa: nomeEmpresa,
        cnpj: cnpj,
        endereco: endereco,
      });
      alert("EMPRESA CADASTRADA");
      console.log("Empresa cadastrada com ID: ", docRef.id);
      setNomeEmpresa('');
      setCnpj('');
      setEndereco('');
      getEmpresas();
    } catch (e) {
      console.error("Erro ao adicionar documento: ", e);
    } finally {
      setLoading(false);
    }
  };

  const getEmpresas = async () => {
    setLoading(true);
    try {
      const empresas = [];
      const querySnapshot = await getDocs(collection(db, "Empresas"));
      querySnapshot.forEach((doc) => {
        empresas.push({
          id: doc.id,
          nomeEmpresa: doc.data().nomeEmpresa,
          cnpj: doc.data().cnpj,
          endereco: doc.data().endereco,
        });
      });
      setEmpresasList(empresas);
      console.log("Empresas carregadas: ", empresas);
    } catch (e) {
      console.error("Erro ao carregar documentos: ", e);
    } finally {
      setLoading(false);
    }
  };

  const deleteEmpresas = async () => {
    setLoading(true);
    try {
      const querySnapshot = await getDocs(collection(db, "Empresas"));
      await Promise.all(querySnapshot.docs.map((item) => deleteDoc(doc(db, "Empresas", item.id))));
      alert("Todas as empresas foram excluídas.");
      getEmpresas();
    } catch (e) {
      console.error("Erro ao deletar documentos: ", e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getEmpresas();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Cadastro de Empresa</Text>

      <TextInput
        placeholder="Nome da Empresa"
        value={nomeEmpresa}
        onChangeText={setNomeEmpresa}
        style={styles.input}
      />
      <TextInput
        placeholder="CNPJ"
        value={cnpj}
        onChangeText={setCnpj}
        style={styles.input}
      />
      <TextInput
        placeholder="Endereço"
        value={endereco}
        onChangeText={setEndereco}
        style={styles.input}
      />
      
      <Button title="Cadastrar Empresa" onPress={addEmpresa} color="#6200ea" disabled={loading} />

      <View style={styles.listContainer}>
        <Text style={styles.heading}>Empresas Cadastradas</Text>
        <MaterialIcons name="delete" size={24} color="black" onPress={deleteEmpresas} />
        {loading ? (
          <ActivityIndicator size="large" color="#6200ea" />
        ) : empresasList.length > 0 ? (
          <FlatList
            data={empresasList}
            renderItem={({ item }) => (
              <View style={styles.item}>
                <Text>Nome: {item.nomeEmpresa}</Text>
                <Text>CNPJ: {item.cnpj}</Text>
                <Text>Endereço: {item.endereco}</Text>
              </View>
            )}
            keyExtractor={(item) => item.id}
          />
        ) : (
          <Text style={styles.noData}>Nenhuma empresa cadastrada</Text>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginVertical: 10,
  },
  input: {
    backgroundColor: '#fff',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
  listContainer: {
    marginTop: 20,
  },
  item: {
    backgroundColor: '#333',
    padding: 15,
    marginVertical: 5,
    borderRadius: 5,
  },
  noData: {
    color: '#fff',
    textAlign: 'center',
    marginTop: 10,
  },
});
