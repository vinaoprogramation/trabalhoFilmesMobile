import React, { useEffect, useState } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

import HomeScreen from "./src/Telas/HomeScreen";
import Detalhes from "./src/Telas/Detalhes";

import { API } from "./src/api";


export default function App() {
  const [filmes, setFilmes] = useState([])

  async function carregarFilmes() {
    const resposta = await fetch(API);
    const dados = await resposta.json();
    setFilmes(dados)
  }

  useEffect(() => {
    carregarFilmes();
  }, []);
  return (

    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="HomeScreen">
          {(props) => (

            <HomeScreen

              {...props}
              filmes={filmes}
              carregarFilmes={carregarFilmes}
            />
          )}


        </Stack.Screen>
        <Stack.Screen
          name="Detalhes"
          component={Detalhes}

        />
      </Stack.Navigator>
    </NavigationContainer>
  )
};

