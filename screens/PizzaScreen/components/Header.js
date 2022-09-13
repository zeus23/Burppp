import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

import { StarIcon } from 'react-native-heroicons/solid';

export const HEADER_HEIGHT = 100;
const styles = StyleSheet.create({
    container: {
        // height: HEADER_HEIGHT,
        paddingVertical: 15,
        width: '100%',
        justifyContent: "center",
        alignItems: "center",
    },
    sizes: {
        flexDirection: "row",
        justifyContent: "space-evenly",
    },
    selected: {
        backgroundColor: "white",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    size: {
        margin: 16,
        width: 50,
        height: 50,
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
    },
    pill: {
        padding: 7,
        borderWidth: 1,
        borderColor: '#c5c5c5',
        borderRadius: 50,
        flexDirection: 'row',
        alignItems: "center"
    },
    box: {
        padding: 7,
        borderWidth: 1,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    dot: {
        height: 20, width: 20, borderRadius: 10,
    }
});

const Header = ({ name, type }) => {
    return (
        <View style={styles.container}>
            <View style={{ width: '100%', flexDirection: 'row', justifyContent: "center" }}>
                <View style={[styles.pill, { marginRight: 10 }]}>
                    <StarIcon color={'#F9B44B'} size={20} />
                    <Text className='ml-1'>4.9</Text>
                </View>
                <View style={[styles.pill, { marginRight: 10 }]}>
                    <Image
                        source={require('../../../assets/delivery-man.png')}
                        style={{ height: 20, width: 20, marginRight: 5 }}
                    />
                    <Text>20 min</Text>
                </View>
                <View style={[styles.box, type === 'Veg' ? { borderColor: 'green' } : { borderColor: '#D02727' }]}>
                    <View style={[styles.dot, type === 'Veg' ? { backgroundColor: 'green' } : { backgroundColor: '#D02727' }]}></View>
                </View>
            </View>
            <Text className='mt-2 mx-5 text-lg font-bold' style={{ textAlign: 'center' }}>{name}</Text>
        </View>
    );
};

export default Header;