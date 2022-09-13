import React from "react";
import { StyleSheet, Image, View, Dimensions, TouchableOpacity } from "react-native";
import Animated, {
    Extrapolate,
    interpolate,
    useAnimatedStyle,
} from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";

import { assets, BREAD_PADDING, PIZZA_SIZE } from "../Config";

const { width } = Dimensions.get("window");
const styles = StyleSheet.create({
    container: {
        width: width,
        alignItems: "center",
    },
    pizza: {
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
});

const Pizza = ({ id, x, index, asset, name, price, type }) => {
    const { navigate } = useNavigation();
    const style = useAnimatedStyle(() => {
        const translateX = interpolate(
            x.value,
            [(index - 1) * width, index * width, (index + 1) * width],
            [-width / 2, 0, width / 2]
        );
        const translateY = interpolate(
            x.value,
            [(index - 1) * width, index * width, (index + 1) * width],
            [PIZZA_SIZE / 2, 0, PIZZA_SIZE / 2],
            Extrapolate.CLAMP
        );
        const scale = interpolate(
            x.value,
            [(index - 1) * width, index * width, (index + 1) * width],
            [0.2, 1, 0.2],
            Extrapolate.CLAMP
        );
        return {
            transform: [{ translateX }, { translateY }, { scale }],
        };
    });
    const plateStyle = useAnimatedStyle(() => ({
        opacity: x.value % width === 0 ? 1 : 0,
    }));
    return (
        <View style={styles.container}>
            <TouchableOpacity activeOpacity={0.75} onPress={() => navigate('Pizza', { id, name, price, type })}>
                <Animated.View style={[styles.pizza, style]}>
                    <Animated.Image
                        source={assets.plate}
                        style={[styles.plate, plateStyle]}
                    />
                    <Image source={asset} style={styles.bread} />
                </Animated.View>
            </TouchableOpacity>
        </View>
    );
};

export default Pizza;