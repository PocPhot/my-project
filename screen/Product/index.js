import { View, Text, Image, ScrollView, TouchableOpacity, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useRoute } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';

import styles from './style'
import { ProductHorizontal, QualityProduct } from '../../components';
import RatingStar from '../../components/ratingStar';
import { FormatPrice } from '../../help';
import { fetchProductById } from '../../store/slices/product';
import { fetchCategoryById } from '../../store/slices/category';
import { Loading } from '../../common'
import { AddCart } from '../../store/slices/cart';
import { AddListSeen } from '../../store/slices/seen';

const ProductScreen = () => {

    const route = useRoute()
    const dispatch = useDispatch()
    const { id } = route.params

    const [isLoadingScreen, setIsLoadingScreen] = useState(true)
    const [loading, setLoading] = useState(false)
    const [numberQuality, setNumberQuality] = useState(1)

    const productById = useSelector(state => state.Product.productById) // Get product by ID
    const listCategoryById = useSelector(state => state.Category.listCategoryById)

    // Render product user choice
    useEffect(() => {
        dispatch(fetchProductById({ id: id }))
            .then(res => {
                if (!res.error) {
                    dispatch(fetchCategoryById({ id: res.payload.category_id, limit: 4 }))
                    setLoading(true)
                    setIsLoadingScreen(false)
                } else {
                    alert('Sản phẩm lỗi')
                }
            })
    }, [])

    // Quality view when user on click product
    useEffect(() => {
        dispatch(AddListSeen({ id: id }))
    }, [])

    // Handle pay the cart and move Cart Screen
    const handlePayCart = () => {
        dispatch(AddCart({ id: productById?.id, sum: numberQuality, total: productById?.price_sale_off }))
        setNumberQuality(1)
    }

    // Render list product relative
    const renderProductRealtive = ({ item }) => {
        return (
            <ProductHorizontal
                image={item.image}
                name={item.name}
                summary={item.summary}
                ratingInHome={item.rating}
                price={item.price}
            />
        )
    }

    // Render loading screen
    if (isLoadingScreen) {
        return (
            <Loading />
        )
    }

    // Set quality product and total price
    const handleChangeNumber = (value) => {
        setNumberQuality(value)
    }

    // Show info detail product on Product Screen
    return (
        <>
            {loading && (
                <>
                    <ScrollView
                        style={styles.container}
                        showsVerticalScrollIndicator={false}
                    >

                        <View style={styles.infoTitle}>
                            <Text style={styles.nameTitle}>{productById.name}</Text>
                            <View style={styles.ratingStar}>
                                <RatingStar imageSize={25} product rating={productById.rating} />
                            </View>
                            <Text style={styles.priceTitle}>{FormatPrice(productById.price)}</Text>
                        </View>

                        <View style={styles.infoContent}>
                            <Text style={styles.title}>Thông tin sản phẩm</Text>
                            <Text>{productById.description}</Text>

                            <View style={styles.qualityTitle}>
                                <Text style={styles.title}>Số lượng</Text>
                                <QualityProduct handleChangeNumber={(value) => handleChangeNumber(value)} quality={numberQuality} />
                            </View>

                            <View>
                                <Text style={styles.title}>Sản phẩm liên quan</Text>
                                <FlatList
                                    data={listCategoryById}
                                    renderItem={renderProductRealtive}
                                    keyExtractor={item => item.id.toString()}
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}
                                />
                            </View>

                            <View style={styles.boxComment}>
                                <Text style={styles.title}>Nhận xét sản phẩm</Text>
                                {/* <Comment /> */}
                            </View>
                        </View>

                        <View style={styles.boxImage}>
                            <Image
                                source={{ uri: productById.image }}
                                style={styles.image}
                            />
                        </View>

                        <View style={styles.priceNew}>
                            <Text style={styles.priceNewText}>{FormatPrice(productById.price_sale_off)}</Text>
                        </View>

                    </ScrollView>

                    <View style={styles.footer}>
                        <Text style={styles.footerText}> {numberQuality} Item </Text>
                        <TouchableOpacity style={styles.boxSubmit} onPress={handlePayCart}>
                            <Text style={styles.footerText}> Thêm vào giỏ hàng </Text>
                            <Text style={styles.submitText}>{FormatPrice(numberQuality * productById.price_sale_off)}</Text>
                        </TouchableOpacity>
                    </View>
                </>
            )}
        </>
    )
}

export default ProductScreen