import { View, FlatList } from 'react-native'
import React from 'react'

import styles from './style'
import ProductCart from '../productCart'

const ProductInfoShip = ({ data }) => {

    const renderListProductShip = ({ item }) => {
        let newData = {
            id: item.product_id,
            sum: item.quantity
        }
        return (
            <ProductCart
                data={newData}
            />
        )
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                renderItem={renderListProductShip}
                keyExtractor={item => item.id.toString()}
            />
        </View>
    )
}

export default ProductInfoShip