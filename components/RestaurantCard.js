import React from 'react'
import { Text, TouchableOpacity, Image, View } from 'react-native'
import { LocationMarkerIcon } from 'react-native-heroicons/outline'
import { StarIcon } from 'react-native-heroicons/solid'

function RestaurantCard({ id, imgUrl, title, rating, genre, address, short_description, dishes, lat, long }) {
    return (
        <TouchableOpacity className="bg-white mr-3 shadow">
            <Image
                source={{
                    uri: imgUrl
                }}
                className="h-36 w-64 rounded"
            />
            <View className="px-2 pb-4">
                <Text className="font-bold text-lg pt-2">{title}</Text>
                <View className="flex-row items-center space-x-1">
                    <StarIcon color={"green"} opacity={0.65} size={22} />
                    <Text className="text-sm text-gray-500">
                        <Text className="text-green-500">{rating}</Text> . {genre}
                    </Text>
                </View>
                <View className="flex-row items-center">
                    <LocationMarkerIcon color={"gray"} opacity={0.4} size={22} />
                    <Text className="text-xs text-gray-500">{address}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default RestaurantCard