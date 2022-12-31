import React from 'react'
import {
    View,
    Text,
    FlatList
} from 'react-native'

import styles from './style'
import ProductHorizontal from '../productHorizontal';

// Render list data Category Special
const renderListCategorySpecial = ({ item }) => {

    return (
        <ProductHorizontal
            image={item.image}
            name={item.name}
            summary={item.summary}
            ratingInHome={item.rating}
            price={item.price}
            id={item.id}
        />
    )
}

const CategorySpecial = ({ title, listData }) => {

    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>{title}</Text>
            <FlatList
                data={listData}
                renderItem={renderListCategorySpecial}
                keyExtractor={item => item.id.toString()}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

export default CategorySpecial