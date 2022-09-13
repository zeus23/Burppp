import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('screen');

function CategoryCard({ imgUrl, title, bgColor }) {
    return (
        <TouchableOpacity
            className="relative"
            style={[styles.categoryCardContainer, { backgroundColor: bgColor }]}
        >
            <Image
                // source={{ uri: imgUrl }}
                source={imgUrl}
                style={styles.categoryImage}
                resizeMethod="resize"
            />
            <Text className="absolute top-2 left-2 text-slate-700 font-semibold text-xs">{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    categoryCardContainer: {
        borderRadius: 15,
        height: 80,
        width: (width - 60) / 3,
        marginBottom: 15,
        overflow: 'hidden'
    },
    categoryImage: {
        height: 80,
        width: 80,
        position: 'absolute',
        right: -10,
        bottom: -10
    }
})

export default CategoryCard