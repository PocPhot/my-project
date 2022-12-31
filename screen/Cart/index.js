import { View, Text, ScrollView, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'

import styles from './style'
import { ProductCart, ButtonStyle } from '../../components'
import { useSelector } from 'react-redux'
import { CheckLogin } from '../../common'
import { IMAGES, MESSAGE } from '../../contains'

const CartScreen = () => {

    const navigation = useNavigation()
    const listCart = useSelector(state => state.Cart.itemsCart)
    const [total, setTotal] = useState(0)

    console.log(total)

    useEffect(() => {
        let totalCur = 0
        listCart.map(item => {
            totalCur += item.total
        })
        setTotal(totalCur)
    }, [listCart])

    // Check bill and move Buy Screen
    const handleCheckBill = () => {
        navigation.navigate('BuyScreen', { total: total })
    }

    if (listCart.length === 0) {
        return (
            <CheckLogin
                nameImage={IMAGES.noData}
                content={MESSAGE.noProduct}
            />
        )
    }

    const renderDataCart = ({ item }) => {
        return (
            <ProductCart
                quality
                data={item}
            />
        )
    }

    // Render list product data in cart by ProuductCart component
    return (
        <View style={styles.container}>
            <FlatList
                data={listCart}
                renderItem={renderDataCart}
                keyExtractor={(item) => item.id.toString()}
                showsVerticalScrollIndicator={false}
            />

            <View style={styles.boxButton}>
                <ButtonStyle
                    content={'Thanh toán'}
                    onPress={handleCheckBill}
                />
            </View>

        </View>
    )
}

export default CartScreen