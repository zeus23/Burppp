import { NavigationProp, RouteProp } from "@react-navigation/native";
import React, { useState } from "react";
import { View, Image, StyleSheet, ScrollView, TouchableOpacity, Text, StatusBar, SafeAreaView, Dimensions } from "react-native";
import Animated, {
    Extrapolate,
    interpolate,
    runOnJS,
    useAnimatedReaction,
    useAnimatedStyle,
    useSharedValue,
    withTiming,
} from "react-native-reanimated";
import { mix } from "react-native-redash";
import { LinearGradient } from 'expo-linear-gradient';

import Header, { HEADER_HEIGHT } from "./components/Header";
import Ingredients from "./components/Ingredients";
import IngredientSelection from "./components/IngredientSelection";
// import PizzaBox from "./components/PizzaBox";
import Checkout from "./components/Checkout";

import { PlusIcon, MinusIcon } from 'react-native-heroicons/solid';
import { ShoppingBagIcon } from 'react-native-heroicons/outline';

import {
    PIZZA_SIZE,
    BREAD_PADDING,
    PADDING,
    assets,
    defaultState,
} from "./Config";

const { width } = Dimensions.get('screen');

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: "#FFF",
        alignItems: "center",
        paddingTop: StatusBar.currentHeight
    },
    container: {
        ...StyleSheet.absoluteFillObject,
        flex: 1,
    },
    content: {
        marginTop: PIZZA_SIZE + PADDING * 2 + HEADER_HEIGHT,
    },
    pizza: {
        margin: 32,
        width: PIZZA_SIZE,
        height: PIZZA_SIZE,
    },
    plate: {
        ...StyleSheet.absoluteFillObject,
        width: undefined,
        height: undefined,
    },
    bread: {
        ...StyleSheet.absoluteFillObject,
        width: undefined,
        height: undefined,
        top: BREAD_PADDING,
        left: BREAD_PADDING,
        right: BREAD_PADDING,
        bottom: BREAD_PADDING,
    },
    qtyBtn: {
        height: 40,
        width: 40,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    qty: {
        height: 40,
        width: 40,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F8F8FA',
        marginLeft: 10
    }
});

const Pizza = ({ route }) => {
    const checkout = useSharedValue(0);
    const [quantity, setQuantity] = useState(1);
    const [totalPrice, setTotalPrice] = useState(0);
    const added = useSharedValue(0);
    const [active, setActive] = useState(false);
    const [state, setState] = useState(defaultState);
    const selected = useSharedValue(false);
    const { id, name, price, type } = route.params;
    const style = useAnimatedStyle(() => ({
        opacity: mix(checkout.value, 1, 0),
        transform: [
            { scale: withTiming(selected.value ? 1.05 : 1) },
            { scale: mix(checkout.value, 1, 0) },
        ],
    }));
    useAnimatedReaction(
        () => checkout.value >= 0.4,
        (v) => {
            if (v) {
                runOnJS(setActive)(true);
            }
        }
    );
    // const pizzaBox = useAnimatedStyle(() => ({
    //     opacity:
    //         checkout.value === 0
    //             ? 0
    //             : interpolate(added.value, [0, 0.75, 1], [1, 1, 0], Extrapolate.CLAMP),
    //     transform: [
    //         { translateX: mix(added.value, 0, PIZZA_SIZE / 2) },
    //         { translateY: mix(added.value, 0, -PIZZA_SIZE / 2) },
    //         { scale: mix(added.value, 1, 0.5) },
    //     ],
    // }));
    return (
        <SafeAreaView style={styles.root}>
            <LinearGradient
                colors={['#FFE8CE', '#FFF']}
                style={{ ...StyleSheet.absoluteFillObject }}
            />
            <View style={{ flex: 1, width: '100%' }}>
                <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
                    <View style={{ width: '100%', height: PIZZA_SIZE, marginTop: 50, justifyContent: "center" }}>
                        {/* <Checkout active={active} /> */}
                        {/* <Animated.View style={[StyleSheet.absoluteFill, pizzaBox]}>
                            <PizzaBox active={active} />
                        </Animated.View> */}
                        <Animated.View style={[styles.pizza, style]}>
                            <Image source={assets.plate} style={styles.plate} />
                            <Image
                                source={assets.pizza[parseInt(id, 10)]}
                                style={styles.bread}
                            />
                            <Ingredients zIndex={state.basil} assets={assets.basil} />
                            <Ingredients zIndex={state.sausage} assets={assets.sausage} />
                            <Ingredients zIndex={state.sausage} assets={assets.sausage} />
                            <Ingredients zIndex={state.onion} assets={assets.onion} />
                            <Ingredients zIndex={state.broccoli} assets={assets.broccoli} />
                            <Ingredients zIndex={state.mushroom} assets={assets.mushroom} />
                        </Animated.View>
                    </View >

                    <Header name={name} type={type} />

                    <View style={styles.container}>
                        <ScrollView
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={styles.content}
                            horizontal
                        >
                            <IngredientSelection
                                asset={assets.basil[2]}
                                ingredient="basil"
                                state={[state, setState]}
                                selected={selected}
                            />
                            <IngredientSelection
                                asset={assets.sausage[3]}
                                ingredient="sausage"
                                state={[state, setState]}
                                selected={selected}
                            />
                            <IngredientSelection
                                asset={assets.onion[1]}
                                ingredient="onion"
                                state={[state, setState]}
                                selected={selected}
                            />
                            <IngredientSelection
                                asset={assets.broccoli[1]}
                                ingredient="broccoli"
                                state={[state, setState]}
                                selected={selected}
                            />
                            <IngredientSelection
                                asset={assets.mushroom[1]}
                                ingredient="mushroom"
                                state={[state, setState]}
                                selected={selected}
                            />
                        </ScrollView>
                    </View>

                    {/*Quantity & price */}
                    <View style={{ width: '100%', padding: 20, marginTop: 80, flexDirection: 'row', alignItems: "center", justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ width: 80, height: 40, backgroundColor: "#272A32", flexDirection: 'row', borderRadius: 20 }}>
                                <TouchableOpacity style={styles.qtyBtn}>
                                    <MinusIcon color={'#FFF'} size={15} />
                                </TouchableOpacity>
                                <TouchableOpacity style={[styles.qtyBtn, { backgroundColor: "#363943" }]}>
                                    <PlusIcon color={'#fff'} size={15} />
                                </TouchableOpacity>
                            </View>

                            <View style={styles.qty}>
                                <Text>1</Text>
                            </View>
                        </View>

                        {/* price */}
                        <Text style={{ color: '#D05C41', fontWeight: '500' }}>$ <Text className='text-2xl text-black font-bold'>10.00</Text></Text>
                    </View>

                    {/* Description */}
                    <View style={{ width: '100%', paddingHorizontal: 20 }}>
                        <Text className='font-semibold mb-2'>Description</Text>
                        <Text className='font-light text-xs' style={{ letterSpacing: 0.5, lineHeight: 20 }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</Text>
                    </View>
                </ScrollView>

                <View style={{ width: '100%', backgroundColor: '#FFF', paddingHorizontal: 20, paddingVertical: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <TouchableOpacity style={{ width: width - 90, height: 40, overflow: 'hidden', borderRadius: 20, alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                        <LinearGradient
                            colors={['#FA8E48', '#EC5168']}
                            style={{ ...StyleSheet.absoluteFillObject }}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                        />
                        <Text className='text-white font-semibold text-xs'>Add to Cart</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ width: 40, height: 40, borderRadius: 20, backgroundColor: "#272A32", alignItems: 'center', justifyContent: 'center' }}>
                        <ShoppingBagIcon color={'#FFF'} size={18} />
                    </TouchableOpacity>
                </View>
            </View>

        </SafeAreaView>
    );
};

export default Pizza;