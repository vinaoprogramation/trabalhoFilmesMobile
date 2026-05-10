import React from "react";
import { useState } from "react";

import { StyleSheet, View, ScrollView, Text, Touchable, TouchableOpacity, TextInput, Dimensions } from "react-native";

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function Adiciona({ navigation, route }) {
  const { adicionaFilme } = route.params
  const [nome, setNome] = useState("");
  const [ano, setAno] = useState("");
  const [genero, setGenero] = useState("");
  const [capa, setCapa] = useState("");


  return (
    <ScrollView style={estilos.adiciona}>


      <Text style={estilos.sobre}>Adicionar</Text>

      <View style={estilos.inputs}>
        <TextInput
          placeholder="Nome do filme"
          value={nome}
          onChangeText={setNome} //arrumar colocar o TEXT
          style={estilos.input}
        />


        <TextInput
          placeholder="Ano de lançamento"
          value={ano}
          onChangeText={setAno}//arrumar colocar o TEXT
          keyboardType="numeric"
          style={estilos.input}
        />

        <TextInput
          placeholder="Gênero"
          value={genero}
          onChangeText={setGenero}//arrumar colocar o TEXT
          style={estilos.input}
        />
        <TextInput
          placeholder="URL da capa"
          value={capa}
          onChangeText={setCapa}//arrumar colocar o TEXT
          style={estilos.input}
        />

      </View>


      <TouchableOpacity
        style={estilos.botaoAdicionar}

        onPress={() => {
          if ((nome, ano, genero, capa)!= "" ){
            const novoFilme = { nome, ano: Number(ano), genero, capa }
          { adicionaFilme(novoFilme) }
          navigation.navigate('HomeScreen')
          }
          else{
            alert("Faltam informações")
          }
          
        }}>

        <Text style={estilos.textoAdiciona}>Adicionar</Text>
      </TouchableOpacity>


      <TouchableOpacity

        style={estilos.botaoVoltar}
        onPress={() => {
          navigation.navigate('HomeScreen')
        }}>

        <Text style={estilos.textoVoltar}>Voltar</Text>
      </TouchableOpacity>
    </ScrollView>
  )
};

const estilos = StyleSheet.create({
  adiciona: {
    backgroundColor: 'black'
  },
  input: {
    backgroundColor: 'white',
    fontSize: 20,
    marginHorizontal: 'auto',
    marginVertical: 10,
    borderRadius: 2,
    fontWeight: '600',
    display: 'flex',
    flexWrap: 'wrap',
    padding: 20

  },
  botaoVoltar: {
    backgroundColor: '#b30000',
    width: width * 0.5,
    borderRadius: 12,
    margin: 'auto',
    padding: 30,
    marginTop: 30,
    marginBottom: 20
  },
  textoVoltar: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  sobre: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    verticalAlign: 'middle',
    textShadowColor: 'black',
    textShadowOffset: { width: 5, height: 0 },
    backgroundColor: "#9b0000",
    paddingVertical: 20,
    textShadowRadius: 0.1,
  },
  inputs:{
    backgroundColor: '#black',
    marginTop: 40,
    width: width*0.8,
    margin: 'auto',
    borderRadius: 10,
    paddingVertical: 20
  },
  botaoAdicionar:{
    backgroundColor: '#570000',
    width: width*0.5,
    borderRadius: 12,
    margin: 'auto',
    padding: 10,
    marginTop: 20
  },
  textoAdiciona:{
    color:'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});