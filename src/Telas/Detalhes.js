import React from "react";


import { ScrollView, Text, View, StyleSheet, TouchableOpacity, Dimensions, Image } from "react-native"

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

import { WebView } from "react-native-webview";

export default function Detalhes({ navigation, route }) {
  const { nome, ano, genero, id, capa, trailer, deletarFilme } = route.params


  return (
    <ScrollView style={estilos.fundo}>
      <View style={estilos.topo}>
        <Text style={estilos.sobre}>Sobre o Filme</Text>

      </View>

      <View style={estilos.filmes}>
        <Image
          source={{ uri: capa }}
          style={estilos.imagem}
          resizeMode="contain"
        />
      </View>
      <View style={estilos.informacoes}>
        <Text style={estilos.informacao}>Nome: {nome}</Text>
        <Text style={estilos.informacao}>Ano de Lançamento: {ano}</Text>
        <Text style={estilos.informacao}>Gênero: {genero}</Text>
      </View>


      <View style={estilos.informacoesTrailer}>
        <Text style={estilos.informacaoTrailer}>Confira o Trailer</Text>

      </View>

      <View style={estilos.videos}>


        <WebView
          source={{
            html: `
              <html>
                <body style="margin:0;background:black">
                  <iframe
                  width="100%"
                  height="100%"
                  src="${trailer}"
                  frameborder="0"
                  allow="autoplay; encrypted-media; fullscreen"
                  allowfullscreen
                  ></iframe>
                </body>
              </html>
    `, baseUrl: 'https://youtube.com'
          }}
          javaScriptEnabled
          domStorageEnabled
          allowsFullscreenVideo
          originWhitelist={["*"]}
          style={{ width: "100%", aspectRatio: 16 / 9 }}
        />

      </View>






      <TouchableOpacity style={estilos.deletar}
        onPress={() => {
          { deletarFilme(id) }
          navigation.navigate('HomeScreen')
        }}
      >
        <Text style={estilos.textoDeletar}>Deletar Filme</Text>
      </TouchableOpacity>


      <TouchableOpacity style={estilos.voltar}
        onPress={() =>
          navigation.navigate('HomeScreen')
        }
      >
        <Text style={estilos.textoVoltar}>Voltar</Text>
      </TouchableOpacity>

    </ScrollView>

  )
};

const estilos = StyleSheet.create({
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
  sobre: {
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

  fundo: {
    height: 'fitContent',
    backgroundColor: 'black',
    width: width
  },
  filmes: {
    width: width * 0.7,
    margin: 'auto',
    marginVertical: 30,

  },
  imagem: {
    width: '100%',
    height: width,
    borderRadius: 10,

  },

  voltar: {
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
  deletar: {
    backgroundColor: '#570000',
    width: width * 0.5,
    borderRadius: 12,
    margin: 'auto',
    padding: 10,
    marginTop: 20
  },
  textoDeletar: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  informacoes: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 5,
    backgroundColor: '#550000',
    padding: 15,
  },
  informacao: {
    color: 'white',
    fontWeight: '600',
    fontSize: 20,
    lineHeight: 40,
    marginLeft: 40
  },
  videos: {
    width: width * 0.95,
    height: width * 0.95 * 9 / 16,
    margin: 'auto',
  },
  video: {
    width: '100%',
    height: '100%',
    aspectRatio: 16 / 9,
  },
  informacoesTrailer: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 40,
    backgroundColor: '#550000',
    padding: 10,
    width: width * 0.95,
    margin: 'auto'
  },
  informacaoTrailer: {
    color: 'white',
    fontWeight: '600',
    fontSize: 20,
    lineHeight: 40,
    textAlign: 'center'
  },
});