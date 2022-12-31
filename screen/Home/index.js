import { ScrollView, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'

import styles from './style'
import {
    BoxSlider,
    CategoryLogo,
    CategorySpecial
} from '../../components'
import { fetchCategory } from '../../store/slices/category'
import { fetchProducSpecial, fetchProducNew } from '../../store/slices/product'
import { Loading } from '../../common/index'

const HomeScreen = () => {

    const dispatch = useDispatch()

    const listCategory = useSelector(state => state.Category.listCategory) // get State list Category
    const listProductSpecial = useSelector(state => state.Product.productSpecial) // get State list Product Special
    const listProductNew = useSelector(state => state.Product.productNew) // get State list Product New
    const token = useSelector(state => state.Auth.token)

    const [loading, setLoading] = useState(true)

    // Get token when start UI first 
    useEffect(() => {
        const setHeader = async () => {
            try {
                const token = await AsyncStorage.getItem('access_token')
                axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
            } catch (e) {
                // error reading value
                console.log(e)
            }
        }
        setHeader()
    }, [token])

    // get list Category once from API by redux
    useEffect(() => {
        dispatch(fetchCategory())
        dispatch(fetchProducSpecial())
        dispatch(fetchProducNew())
            .then(res => {
                setLoading(false)
            })
    }, [])

    // Render loading screen
    if (loading) {
        return (
            <Loading />
        )
    }

    return (
        <View style={styles.container}>
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <BoxSlider />
                <View style={styles.category}>
                    <CategoryLogo listCategory={listCategory} />
                    <CategorySpecial title={'Danh Mục Nổi Bật'} listData={listProductSpecial} />
                    <CategorySpecial title={'DanH Mục Sản Phẩm Mới'} listData={listProductNew} />
                </View>
            </ScrollView>

        </View>
    )
}

export default HomeScreen