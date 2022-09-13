import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native';
import CategoryCard from './CategoryCard';

const data = [
    {
        imgUrl: require('../assets/salad.png'),
        bgColor: '#EAF8E6',
        title: 'Salad'
    },
    {
        imgUrl: require('../assets/steak.png'),
        bgColor: '#FFE8EE',
        title: 'Steak'
    },
    {
        imgUrl: require('../assets/biryani.png'),
        bgColor: '#E5EDFA',
        title: 'Biryani'
    },
    {
        imgUrl: require('../assets/pizza.png'),
        bgColor: '#FDECB5',
        title: 'Pizza'
    },
    {
        imgUrl: require('../assets/sandwich.png'),
        bgColor: '#FFF8F7',
        title: 'Sandwich'
    },
    {
        imgUrl: require('../assets/pasta.png'),
        bgColor: '#EAF8E6',
        title: 'Pasta'
    },
    {
        imgUrl: require('../assets/ramen.png'),
        bgColor: '#E5EDFA',
        title: 'Ramen'
    },
    {
        imgUrl: require('../assets/chicken.png'),
        bgColor: '#FFE8EE',
        title: 'Chicken'
    },
    {
        imgUrl: require('../assets/icecream.png'),
        bgColor: '#FDECB5',
        title: 'Dessert'
    },
]

function Categories() {
    return (
        <View className="px-4">
            <View className="flex-row items-center justify-between">
                <Text className="font-bold text-base">Category</Text>
                {/* <TouchableOpacity>
                    <Text className="font-bold text-xs text-orange-500">See All</Text>
                </TouchableOpacity> */}
            </View>

            <View className="flex-row flex-wrap justify-between my-2">
                {
                    data.map((item, index) => {
                        return (
                            <View key={index}>
                                <CategoryCard
                                    imgUrl={item.imgUrl}
                                    title={item.title}
                                    bgColor={item.bgColor}
                                />
                            </View>
                        )
                    })
                }
            </View>

        </View>
    )
}

export default Categories;