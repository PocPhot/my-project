import { View, FlatList, Text } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'

import styles from './styles'
import { Product } from '../../components'

const CategoryScreen = () => {

    // Get list Category by ID 
    const listCategoryById = useSelector(state => state.Category.listCategoryById)

    // Show list CategoryAll on TabBar Category
    const renderListCategory = ({ item }) => {
        return (
            <Product
                data={item}
                sale
            />
        )
    }

    // Render alert when list is empty
    const listEmpty = () => {
        return (
            <View>
                <Text>Danh mục không có sản phẩm</Text>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={listCategoryById}
                renderItem={renderListCategory}
                keyExtractor={item => item.id.toString()}
                numColumns={2}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={listEmpty}
            />
        </View>
    )
}

export default CategoryScreen