import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {TimeLine, ONG} from "../pages";
 
const Tab = createBottomTabNavigator();
 
export default function App() {
  return (
    <Tab.Navigator>
        <Tab.Screen name="TimeLine" component={TimeLine} />
        <Tab.Screen name="ONG" component={ONG} />
    </Tab.Navigator>
  );
}
