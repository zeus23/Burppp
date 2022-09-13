import React, { useLayoutEffect } from "react";
import { View, StyleSheet, Dimensions, Text, StatusBar } from "react-native";
import Animated, {
    useAnimatedScrollHandler,
    useSharedValue,
} from "react-native-reanimated";
import { useNavigation } from '@react-navigation/native'

import Pizza from "./components/Pizza";
import Background from "./components/Background";
import { assets, PIZZA_SIZE } from "./Config";

const { width, height } = Dimensions.get("window");
const pizza = [
    {
        asset: assets.pizza[0],
        name: "Classic margharita with cheery tomatoes and basil",
        price: 10,
        type: 'Veg'
    },
    {
        asset: assets.pizza[1],
        name: "African mushroom and chicken salami pizza",
        price: 10,
        type: 'Non-veg'
    },
    {
        asset: assets.pizza[2],
        name: "Hawaiian pizza with pineapple and bacon",
        price: 10,
        type: 'Non-veg'
    },
    {
        asset: assets.pizza[3],
        name: "Garden special pizza",
        price: 10,
        type: 'Veg'
    },
    {
        asset: assets.pizza[4],
        name: "English cheese retreat pizza",
        price: 10,
        type: 'Veg'
    },
];

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF",
        justifyContent: 'center'
    },
});

const Pizzas = () => {
    const x = useSharedValue(0);
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, []);

    const onScroll = useAnimatedScrollHandler({
        onScroll: (event) => {
            x.value = event.contentOffset.x;
        },
    });

    return (
        <View style={styles.container}>
            <Background x={x} />
            <View style={{ width: '100%', height: PIZZA_SIZE + 100 }}>
                <Animated.ScrollView
                    onScroll={onScroll}
                    scrollEventThrottle={16}
                    decelerationRate="fast"
                    snapToInterval={width}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{
                        alignItems: "center",
                    }}
                    horizontal
                >
                    {pizza.map(({ asset, name, price, type }, index) => (
                        <Pizza
                            id={`${index}`}
                            key={index}
                            x={x}
                            index={index}
                            asset={asset}
                            name={name}
                            price={price}
                            type={type}
                        />
                    ))}
                </Animated.ScrollView>
            </View>
        </View>
    );
};

export default Pizzas;