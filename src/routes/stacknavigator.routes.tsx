import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import {TimeLine, ONG} from '../pages'

const Stack = createStackNavigator();

export default function App() {
    return (
        <Stack.Navigator headerMode={"none"}>
          <Stack.Screen name="TimeLine" component={TimeLine} />
          <Stack.Screen name="ONG" component={ONG} />
        </Stack.Navigator>
    );
  }