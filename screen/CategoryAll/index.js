import { View, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import styles from './style'
import { BoxSlider, Product } from '../../components'
import { fetchProductAll } from '../../store/slices/product'
import { Loading } from '../../common'

const CategoryAllScreen = () => {

    const dispatch = useDispatch()
    const listProductAll = useSelector(state => state.Product.productAll) // get State list ProductAll
    const itemsFilter = useSelector(state => state.Filter.items)
    const [loading, setLoaing] = useState(true)

    // get list Category, Product once from API by redux
    useEffect(() => {
        // when itemsFilter change, UI will render again 
        let max_price = itemsFilter.toValue
        let min_price = itemsFilter.fromValue
        let sortBy, order
        switch (itemsFilter?.activeTitle) {
            case 'Mới nhất':
                sortBy = 'id'
                order = 'desc'
                break;
            case 'Giá giảm':
                sortBy = 'price'
                order = 'desc'
                break;
            case 'Giá tăng':
                sortBy = 'price'
                order = 'asc'
                break;
            case 'Cũ nhất':
                sortBy = 'id'
                order = 'asc'
                break;
            case 'Đang giảm giá':
                sortBy = 'price_sale_off'
                order = 'asc'
                break;
            default:
                break;
        }
        dispatch(fetchProductAll({ max_price, sortBy, order, min_price }))
            .then(res => {
                setLoaing(false)
            })
    }, [itemsFilter])

    // Show list CategoryAll on TabBar Category
    const renderListCategoryAll = ({ item }) => {
        return (
            <Product
                sale
                data={item}
            />
        )
    }

    // Render loading screen
    if (loading) {
        return (
            <Loading />
        )
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={listProductAll}
                renderItem={renderListCategoryAll}
                keyExtractor={item => item.id.toString()}
                numColumns={2}
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={<BoxSlider />}
            />
        </View>
    )
}

export default CategoryAllScreen