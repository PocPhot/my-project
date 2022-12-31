import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'

import styles from './style'
import { Product } from '../../components'
import { CheckLogin } from '../../common'
import { IMAGES, MESSAGE } from '../../contains'

const FavoriteScreen = () => {

    const listFavoriteID = useSelector(state => state.Favorite.listFavorite) // Get list id into listFavorite when user handle like a product
    const listProduct = useSelector(state => state.Product.productAll)

    // Get list products when user like products
    const listFavorite = listFavoriteID?.map(itemID => {
        return listProduct?.find(item => {
            if (itemID === item.id) {
                return itemID
            }
        })
    })

    // Show list Favorite on TabBar Favorite
    const renderListFavorite = ({ item }) => {
        return (
            <Product
                data={item}
                sale
            />
        )
    }

    // Show alert when list is empty
    const listEmpty = () => {
        return (
            <CheckLogin nameImage={IMAGES.noData} content={MESSAGE.noProductLike} />
        )
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={listFavorite}
                renderItem={renderListFavorite}
                keyExtractor={item => item.id.toString()}
                numColumns={2}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={listEmpty}
            />
        </View>
    )
}

export default FavoriteScreen