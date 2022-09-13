import { View, Text, SafeAreaView, Image, StatusBar, TextInput, ScrollView, StyleSheet, Platform } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

import { LinearGradient } from 'expo-linear-gradient';

import { UserIcon, ChevronDownIcon, SearchIcon, AdjustmentsIcon } from 'react-native-heroicons/outline';
import Categories from '../components/Categories';
import ContentRow from '../components/ContentRow';
import PizzaMaker from '../components/PizzaMaker';

const HomeScreen = () => {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, []);

    return (
        <>
            <SafeAreaView style={styles.homeContainer}>
                <LinearGradient
                    colors={['#FFE8CE', '#FFF']}
                    style={styles.background}
                />

                {/* Header */}
                <View style={styles.headerContainer}>
                    <View>
                        <Text className='font-bold text-2xl'>Hello 👋</Text>
                        <Text className='text-gray-500 text-xs my-1'>It's lunch time!</Text>
                    </View>

                    {/* Search container */}
                    <View style={styles.searchContainer}>
                        <SearchIcon color={'#414141'} size={20} />
                        <View style={styles.verticalBar}></View>
                        <TextInput placeholder='What would you like to eat?' />
                    </View>
                </View>

                <ScrollView
                    contentContainerStyle={{ paddingBottom: 10 }}
                >
                    {/* Categories */}
                    <Categories />

                    {/* Featured PAPA Jack pizza maker */}
                    <PizzaMaker />

                    {/* Different Rows */}
                    <ContentRow
                        id="123"
                        title="Featured"
                    />
                </ScrollView>
            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    homeContainer: {
        flex: 1,
        backgroundColor: '#FFF'
    },
    background: {
        width: '100%',
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: 250,
    },
    headerContainer: {
        width: '100%',
        marginTop: StatusBar.currentHeight,
        paddingHorizontal: 15,
        paddingVertical: 10,
    },
    searchContainer: {
        width: '100%',
        marginVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    verticalBar: {
        height: 20,
        width: 1.5,
        backgroundColor: '#E7D5C2',
        marginHorizontal: 10
    },
    addressContainer: {
        width: '100%',
        backgroundColor: 'red',
        height: 100
    }
})

export default HomeScreen