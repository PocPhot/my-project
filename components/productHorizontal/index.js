import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

import styles from './style'
import RatingStar from '../ratingStar';
import { FormatPrice } from '../../help'

const ProductHorizontal = ({ id, name, image, summary, ratingInHome, price }) => {

    const navigation = useNavigation()

    // Handle move detail product screen from product id
    const moveDetailProduct = () => {
        navigation.navigate('ProductScreen', {
            id: id
        })
    }

    return (
        <TouchableOpacity
            style={styles.viewCategory}
            onPress={moveDetailProduct}
        >
            <View style={styles.boxImage}>
                <Image
                    source={{ uri: image }}
                    style={styles.image}
                />
            </View>

            <View style={styles.infoTitle}>
                <Text numberOfLines={1} style={styles.nameText}> {name} </Text>
                <Text numberOfLines={1}> {summary} </Text>
                <View style={styles.ratingStar}>
                    <RatingStar imageSize={20} ratingInHome={ratingInHome} checkRating />
                </View>
                <Text numberOfLines={1} style={styles.priceText}> {FormatPrice(price)} </Text>
            </View>

        </TouchableOpacity >
    )
}

export default ProductHorizontal