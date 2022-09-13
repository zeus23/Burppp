import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { assets as pizzaAsset } from "./Config";
import Pizzas from "./Pizzas";
import Pizza from "./Pizza";

const Stack = createNativeStackNavigator();

const PizzaNavigator = () => (
    <Stack.Navigator
        initialRouteName="Pizzas"
        screenOptions={{
            gestureEnabled: false,
            headerShown: false,
            cardOverlayEnabled: true,
            cardStyle: { backgroundColor: "transparent" },
        }}
    >
        <Stack.Screen name="Pizzas" component={Pizzas} />
        <Stack.Screen name="Pizza" component={Pizza} />
    </Stack.Navigator>
);

export default PizzaNavigator;

export const assets = Object.values(pizzaAsset).map((asset) =>
    Array.isArray(asset) ? asset.flat() : asset
); 