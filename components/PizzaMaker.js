import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'

import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from "@react-navigation/native";

function PizzaMaker() {
    const { navigate } = useNavigation();
    return (
        <View className="px-4 my-2">
            <TouchableOpacity style={styles.adContanier} onPress={() => navigate("PizzaMake")}>
                <LinearGradient
                    colors={['#FA8E48', '#EC5168']}
                    style={styles.background}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                />
                <View className='flex-row p-3'>
                    <View style={{ height: '100%', justifyContent: 'center' }}>
                        <Text className='font-bold text-white mb-2 text-2xl' style={styles.adTitle}>PAPA JACK'S</Text>
                        <Text className='text-orange-100 mb-1 text-xs'>Create your own pizza & get</Text>
                        <Text className='text-orange-100 text-xs'>discount <Text className='font-bold text-white text-lg'>upto 25%</Text></Text>
                        <Text className='text-orange-100' style={{ fontSize: 8 }}>*tnc applied</Text>
                    </View>
                    <Image
                        source={require("../assets/pizzaMaker.png")}
                        style={{
                            width: 200,
                            height: 200,
                            position: 'absolute',
                            right: -20,
                            bottom: -30
                        }}
                        resizeMode='contain'
                        resizeMethod='resize'
                    />
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    adContanier: {
        width: '100%',
        height: 150,
        position: 'relative',
    },
    adTitle: {
        textShadowColor: 'rgba(0, 0, 0, 0.2)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 7
    },
    background: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        right: 0,
        top: 0,
        borderRadius: 20
    },
})

export default PizzaMaker