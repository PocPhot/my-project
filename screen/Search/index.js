import { View, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useRoute } from '@react-navigation/native'
import HighlightText from '@sanar/react-native-highlight-text';

import styles from './style'
import { Product } from '../../components'
import { fetchProductSearch } from '../../store/slices/product'
import { Loading, CheckLogin } from '../../common'
import ShowToast from '../../help/showToast'
import { COLORS, MESSAGE, IMAGES } from '../../contains'

const SearchScreen = () => {

    const route = useRoute()
    const dispatch = useDispatch()

    const [isLoading, setIsLoading] = useState(true)
    const [listItems, setListItems] = useState({})

    const { search } = route.params

    // Get products be found when user search 
    useEffect(() => {
        setIsLoading(true)
        dispatch(fetchProductSearch({ search: search }))
            .then(res => {
                if (!res.error) {
                    setIsLoading(false)
                    ShowToast(MESSAGE.success, COLORS.success)
                    setListItems(res.payload)
                } else {
                    ShowToast(MESSAGE.error, COLORS.error)
                }
            })
    }, [search])

    // Create method to high light text search
    const highLightText = (name) => {
        return (
            <HighlightText
                highlightStyle={{ backgroundColor: 'yellow' }}
                searchWords={[search]}
                textToHighlight={name}
            />
        )
    }

    // Show list Search Product
    const renderListSearch = ({ item }) => {
        // reaplace name to highlight name when user search 
        let product = {
            ...item,
            name: highLightText(item.name)
        }

        return (
            <>
                <Product
                    data={product}
                    sale
                />
            </>
        )
    }

    // Render loading screen
    if (isLoading) {
        return (
            <Loading />
        )
    }

    return (
        <View style={styles.container}>
            {
                listItems.length !== 0
                    ? <FlatList // If have products be searched, show list Item
                        data={listItems}
                        renderItem={renderListSearch}
                        keyExtractor={item => item.id.toString()}
                        numColumns={2}
                        showsVerticalScrollIndicator={false}
                    />

                    : // If don't have products, show notice
                    <CheckLogin nameImage={IMAGES.noData} content='Không tìm thấy sản phẩm' />
            }

        </View>
    )
}

export default SearchScreen