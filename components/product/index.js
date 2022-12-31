import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'

import styles from './style'
import IconStyle from '../iconStyle'
import { IMAGES } from '../../contains'
import { FormatPrice, SalePercent } from '../../help'
import { addListFavorite } from '../../store/slices/favorite'
import { AddCart } from '../../store/slices/cart'

const Product = ({ sale, data }) => {

    const navigation = useNavigation()
    const dispatch = useDispatch()

    // Get list id into listFavorite when user handle like a product
    const listFavoriteID = useSelector(state => state.Favorite.listFavorite)

    // Destructuring data
    const { name, image, price, price_sale_off, summary, id } = data

    const activeItem = listFavoriteID.find(item => item === id) // Find products already liked
    const activeIconHeart = activeItem ? 'heart' : 'hearto' // Custom icon heart for action like

    // Handle user like product
    const handleFavorite = () => {
        dispatch(addListFavorite({ id }))
    }

    // Handle select product and move Product Screen
    const handleSelectProduct = (id) => {
        navigation.navigate('ProductScreen', { id: id })
    }

    // Add item into Cart
    const addCart = () => {
        dispatch(AddCart({ id: id, total: price_sale_off }))
    }

    // Create component Product
    return (
        <TouchableOpacity style={styles.container} onPress={() => handleSelectProduct(id)}>

            <View style={styles.top}>

                <IconStyle name={activeIconHeart} style={styles.iconLeft} onPress={handleFavorite} />

                <View style={styles.boxImage}>
                    <Image source={{ uri: image }} style={styles.image} />
                </View>
                {
                    sale
                        ? <View style={styles.boxImageSale}>
                            <Image source={IMAGES.sale} style={styles.imageSale} />
                            <View style={styles.boxSalePrice}>
                                <Text style={styles.percent}>{SalePercent(price, price_sale_off)}</Text>
                                <Text style={styles.content}>GIẢM GIÁ</Text>
                            </View>
                        </View>
                        : <></>
                }
            </View>

            <View style={styles.botter}>

                <Text style={styles.title} numberOfLines={1}>{name}</Text>
                <Text numberOfLines={1}>{summary}</Text>

                <View style={styles.boxInfo}>

                    <View style={styles.boxPrice}>
                        <Text style={styles.priceOld} numberOfLines={1}>{FormatPrice(price)}</Text>
                        <Text style={styles.priceNew} numberOfLines={1}>{FormatPrice(price_sale_off)}</Text>
                    </View>
                    <IconStyle name='cartInProduct' style={styles.iconCart} onPress={addCart} />

                </View>

            </View>

        </TouchableOpacity>
    )
}

export default Product