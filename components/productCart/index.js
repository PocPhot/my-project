import { View, Text, Image } from 'react-native'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import styles from './style'
import { FormatPrice } from '../../help'
import QualityProduct from '../qualityProduct'
import { RemoveCart, AddCart } from '../../store/slices/cart'

const ProductCart = ({ quality, data }) => {

    const dispatch = useDispatch()
    const [number, setNumber] = useState(data?.sum || 1)
    const dataProduct = useSelector(state => state.Product.productAll)

    const dataCart = dataProduct.find(item => {
        if (item.id === data.id) {
            return item
        }
    })

    const handleChangeNumber = (value) => {
        setNumber(value)
        if (value === 0) { // User remove item of Cart
            dispatch(RemoveCart({ id: data.id }))
        } else { // If user want to add item. Item will add +1 into CartScreen
            dispatch(AddCart({ id: data.id, sum: value, total: dataCart.price_sale_off }))
        }

    }

    //Create product in list Cart
    return (
        <View style={styles.container}>

            <View style={styles.boxImage}>
                <Image
                    source={{ uri: dataCart.image }}
                    style={styles.image}
                />
            </View>

            {
                quality
                    // If add props 'quality': we don't have title about quality and interactive in Cart Screen
                    ? <View style={styles.boxTitle}>
                        <Text style={styles.titleText}>{dataCart.name}</Text>
                        <Text
                            style={styles.titleRate}
                            numberOfLines={1}
                        > {dataCart.description} </Text>
                        <Text
                            style={styles.titlePrice}
                            numberOfLines={1}
                        >Giá tiền: {FormatPrice(number * dataCart.price_sale_off)} </Text>
                    </View>

                    // If don't add prop 'quality': we have title about quality and interactive in Buy Screen
                    : <View style={styles.boxTitleNotQuality}>
                        <Text style={styles.titleText} numberOfLines={1}>{dataCart.name}</Text>
                        <Text style={styles.titleRate} numberOfLines={1}>{dataCart.description}</Text>
                        <Text>Số lượng: {data.sum}</Text>
                        <Text style={styles.titlePrice} numberOfLines={1}> {FormatPrice(data.sum * dataCart.price_sale_off)} </Text>
                    </View>
            }



            {   // If add props 'quality': we have funtion can change quality product
                quality
                    ? <QualityProduct handleChangeNumber={(value) => handleChangeNumber(value)} quality={number} />
                    : <></>
            }


        </View>
    )
}

export default ProductCart