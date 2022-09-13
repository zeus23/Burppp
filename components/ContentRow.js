import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurantCard from './RestaurantCard'

function ContentRow({ id, title }) {
    return (
        <View>
            <View className="flex-row items-center justify-between px-4">
                <Text className="font-bold text-lg">{title}</Text>
                <Text className="font-bold text-xs text-orange-500">See All</Text>
            </View>

            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                    paddingHorizontal: 15
                }}
                className="pt-4"
            >
                <RestaurantCard
                    id="123"
                    imgUrl="https://links.papareact.com/gn7"
                    title="Yo! Sushi"
                    rating={4.5}
                    genre="Japanese"
                    address="123, Main St"
                    short_description="This is a test description"
                    dishes={[]}
                    lat={20}
                    long={10}
                />
            </ScrollView>
        </View>
    )
}

export default ContentRow