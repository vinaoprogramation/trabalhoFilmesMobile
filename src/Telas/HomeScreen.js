import React from "react";

import { useEffect } from "react";

import { Text, View, StyleSheet, TouchableOpacity, FlatList, Dimensions, Button, Image, ScrollView } from "react-native"

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function HomeScreen({ navigation, filmes, carregarFilmes, adicionaFilme, deletarFilme }) {

  const cabecalho = () => (
    <View style={estilos.topo}>
      <Text style={estilos.titulo}>NerdFLIX</Text>
    </View>
  )

  const rodape = () => (
    <View>
      <TouchableOpacity style={estilos.adicionar}
        onPress={() => {
          navigation.navigate('Adiciona', { adicionaFilme })
        }}>
        <Text style={estilos.adicionarTexto}>Adicionar Filme</Text>
      </TouchableOpacity>
      <Text style={estilos.copyright}>Todos os direitos reservados ©</Text>
    </View>

  )
  
  useEffect(() => {
      carregarFilmes();
    }, []);

  
  return (
    <View style={estilos.fundo}>

      <FlatList
        style={estilos.lista}
        data={filmes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={estilos.filmes}>
            <TouchableOpacity onPress={() => {
              navigation.navigate('Detalhes', { ...item, deletarFilme })
            }}>
              <Image
                source={{ uri: item.capa }}
                style={estilos.imagem}
                resizeMode="contain"
              />
            </TouchableOpacity>

            <Text style={estilos.texto}> {item.nome} - {item.ano}                                   {item.genero}</Text>



          </View>
        )}

        ListHeaderComponent={cabecalho}
        ListFooterComponent={rodape}
      />



    </View>

  )
};


const estilos = StyleSheet.create({
  lista: {
    height: height
  },
  fundo: {
    height: height,
    backgroundColor: 'black'
  },
  topo: {
    backgroundColor: "#9b0000",
    height: height * 0.13,
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'black',
  },
  titulo: {
    color: 'white',
    fontSize: 40,
    marginTop: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    verticalAlign: 'middle',
    textShadowColor: 'black',
    textShadowOffset: { width: 5, height: 0 },
    textShadowRadius: 0.1,
  },
  filmes: {
    width: width * 0.7,
    margin: 'auto',
    marginVertical: 30,

  },
  imagem: {
    height: width,
    borderRadius: 10,
    opacity: 0.9
  },
  texto: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 5,
    backgroundColor: '#7a0000',
    padding: 15,
    borderRadius: 5
  },
  copyright: {
    color: 'white',
    marginBottom: 50,
    marginTop: 20,
    textAlign: 'center'
  },
  adicionar: {
    backgroundColor: 'white',
    marginTop: 30,
    borderRadius: 5,
    padding: 10,
    width: width*0.6,
    margin: 'auto'
  },
  adicionarTexto: {
    color: 'black',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});