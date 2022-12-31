import { View, Text, ScrollView, FlatList, Alert } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigation, useRoute } from '@react-navigation/native'

import styles from './style'
import { ProductCart, ButtonStyle, InputStyle } from '../../components'
import { FormatPrice } from '../../help'
import { fetchBuyProduct } from '../../store/slices/buy'
import ShowToast from '../../help/showToast'
import { COLORS, MESSAGE } from '../../contains'
import { RemoveAll } from '../../store/slices/cart'

const BuyScreen = () => {

    const listCart = useSelector(state => state.Cart.itemsCart)
    const user = useSelector(state => state.Auth.token)
    const dispatch = useDispatch()
    const navigation = useNavigation()
    const route = useRoute()
    const { total } = route.params // Get total price of the bill

    // User pay the bill
    const handleBuy = () => {
        dispatch(fetchBuyProduct({ data: listCart }))
            .then(res => {
                if (!res.error) { // Success
                    ShowToast(MESSAGE.buySuccess, COLORS.success)
                    // Show notification about user'order
                    Alert.alert(
                        "Thông báo",
                        `Mã đơn hàng của bạn là : ${res.payload.code}`,
                        [
                            {
                                text: "Trở về",
                                onPress: () => {
                                    navigation.navigate('HomeScreen')
                                    dispatch(RemoveAll())
                                },
                            },
                        ],
                    );
                    console.log(res.payload.code)
                } else { // Error
                    ShowToast(MESSAGE.noInfo, COLORS.red)
                }
            })
    }

    const handleCheckBill = ({ item }) => {
        return (
            <ProductCart
                data={item}
            />
        )
    }

    return (
        <View style={styles.container}>

            <ScrollView
                showsVerticalScrollIndicator={false}
                style={styles.container}
            >
                <FlatList
                    data={listCart}
                    renderItem={handleCheckBill}
                    keyExtractor={item => item.id.toString()}
                    showsVerticalScrollIndicator={false}
                />

                <View style={styles.boxTotalBill}>
                    <Text style={styles.boxTotalBillText}>Tổng đơn hàng</Text>
                    <Text style={styles.boxTotalBillText}>{FormatPrice(total)}</Text>
                </View>

                {/* <View style={styles.discount}>
                    <InputStyle title={'Mã giảm giá nếu có'} />
                    <Text style={styles.discountText}>Bạn đã được giảm {FormatPrice(4000000)}</Text>
                </View>

                <View style={styles.discount}>
                    <InputStyle title={'Phí vận chuyển'} />
                    <Text style={styles.discountText}>Bạn đã được giảm {FormatPrice(4000000)}</Text>
                </View>

                <View style={styles.boxTotalBill}>
                    <Text style={styles.boxTotalBillText}>Tổng thanh toán</Text>
                    <Text style={styles.boxTotalBillText}>{FormatPrice(40000000)}</Text>
                </View> */}
            </ScrollView>

            <View style={styles.boxButton}>
                <ButtonStyle
                    content={'Mua hàng'}
                    onPress={handleBuy}
                />
            </View>


        </View>
    )
}

export default BuyScreen