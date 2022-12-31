import { View, FlatList } from 'react-native'
import React from 'react'

import styles from './style'
import { Product } from '../../components'
import { useSelector } from 'react-redux'


const SeenScreen = () => {

    const listSeen = useSelector(state => state.Seen.listSeen)
    const product = useSelector(state => state.Product.productAll)

    console.log('listSeen', listSeen)

    const productSeen = listSeen.map(item => {
        return product.find(itemID => {
            if (itemID.id === item.id) {
                return {
                    ...itemID,
                    view: item.view
                }

            }
        })
    })

    console.log('productSeen', productSeen)

    const renderItem = ({ item }) => {
        return (
            <Product
                data={item}
                sale
            />
        )
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={productSeen}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
                numColumns={2}
            />
        </View>
    )
}

export default SeenScreen