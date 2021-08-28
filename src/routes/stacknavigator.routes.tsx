import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import {TimeLine, ONG, Mensagem, Criar} from '../pages'

const Stack = createStackNavigator();

export default function App() {
    return (
        <Stack.Navigator headerMode={"none"}>
          <Stack.Screen name="TimeLine" component={TimeLine} />
          <Stack.Screen name="ONG" component={ONG} />
          <Stack.Screen name="Mensagem" component={Mensagem} />
          <Stack.Screen name="Criar" component={Criar} />
          <Stack.Screen name="Cancela" component={TimeLine} />
        </Stack.Navigator>
    );
  }