import React from "react";
import { View, Image, StyleSheet, Dimensions } from "react-native";
import Animated, {
    interpolate,
    useAnimatedStyle,
} from "react-native-reanimated";
import { polar2Canvas } from "react-native-redash";

import { LinearGradient } from 'expo-linear-gradient';

import { assets, PIZZA_SIZE } from "../Config";

const { width } = Dimensions.get("window");
const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: "center",
        alignItems: "center",

    },
    pizza: {
        width: width + 50,
        height: width + 50,
        justifyContent: "center",
        alignItems: "center",
    },
    plate: {
        width: PIZZA_SIZE,
        height: PIZZA_SIZE,
    },
});

const images = [
    assets.basil[0],
    assets.onion[3],
    assets.mushroom[1],
    assets.broccoli[0],
    assets.sausage[2],
    assets.extra[0],
    assets.extra[1],
];

const Ingredient = ({ index, source, total }) => {
    const dim = Image.resolveAssetSource(source);
    const w = 50;
    const h = (50 * dim.height) / dim.width;
    const radius = width / 2;
    const theta = (index * (2 * Math.PI)) / total;
    const { x, y } = polar2Canvas({ theta, radius }, { x: radius, y: radius });
    const style = {
        ...StyleSheet.absoluteFillObject,
        width: w,
        height: h,
        top: y,
        left: x,
    };
    return <Image source={source} style={style} />;
};

const Background = ({ x }) => {
    const style = useAnimatedStyle(() => ({
        transform: [
            { rotate: `${interpolate(x.value, [0, width], [0, 2 * Math.PI])}rad` },
        ],
    }));
    return (
        <View style={styles.container}>
            <LinearGradient
                colors={['#FFE8CE', '#FFF']}
                style={{ ...StyleSheet.absoluteFillObject }}
            />
            <Animated.View style={[styles.pizza, style]}>
                {images.map((image, index) => (
                    <Ingredient
                        key={index}
                        index={index}
                        source={image}
                        total={images.length}
                    />
                ))}
                <Image source={assets.plate} style={styles.plate} />
            </Animated.View>
        </View>
    );
};

export default Background;