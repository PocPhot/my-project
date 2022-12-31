import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux'

import styles from './style'
import { fetchCategoryById } from '../../store/slices/category'

const CategoryLogo = ({ listCategory }) => {

    const navigation = useNavigation()
    const dispatch = useDispatch()

    // Handle change Category Screen
    const changeCategory = (name, id) => {
        navigation.navigate('CategoryScreen', { title: name })
        dispatch(fetchCategoryById({ id: id })) // Push up id of Category to get Product of the Category
    }

    // Render list data Category Logo
    const renderListCategoryLogo = ({ item }) => {
        const name = item.name
        const id = item.id
        return (
            <TouchableOpacity style={styles.viewCategory} onPress={() => changeCategory(name, id)}>
                <View style={styles.boxImage}>
                    <Image
                        source={{ uri: item.image }}
                        style={styles.image}
                    />
                </View>
                <Text> {item.name} </Text>
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titleText}> Tất cả các danh mục </Text>
            <FlatList
                data={listCategory}
                renderItem={renderListCategoryLogo}
                keyExtractor={item => item.id.toString()}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

export default CategoryLogo