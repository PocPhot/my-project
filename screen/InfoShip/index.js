import { View, Text, TextInput, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import styles from './style'
import { ButtonStyle, InputStyle, ProductInfoShip, ProgressBarShip } from '../../components'
import { fetchOrdersByCode } from '../../store/slices/buy'
import ShowToast from '../../help/showToast'
import { COLORS, MESSAGE } from '../../contains'

const InfoShipScreen = () => {

    const dispatch = useDispatch()
    const [value, setValue] = useState('')
    const [listProductBuy, setListProductBuy] = useState([])

    // Check order
    const handleCheckOrders = () => {
        dispatch(fetchOrdersByCode({ order_code: value }))
            .then(res => {
                if (!res.error) {
                    ShowToast(MESSAGE.success, COLORS.success)
                    setListProductBuy(res.payload?.order_items)
                } else {
                    ShowToast(MESSAGE.codeError, COLORS.error)
                    setValue('')
                }
            })
    }

    return (
        <ScrollView style={styles.container}>

            <View style={styles.boxTextInput}>
                <InputStyle
                    title={'Nhập mã đơn hàng của bạn'}
                    value={value}
                    onChangeText={(value) => setValue(value)}
                />
            </View>

            <ButtonStyle
                content={'KIỂM TRA ĐƠN HÀNG'} icon
                onPress={handleCheckOrders}
            />

            <View style={styles.boxInfoShip}>
                <Text style={styles.title}>Đơn hàng của bạn</Text>
                <ProductInfoShip
                    data={listProductBuy}
                />
            </View>

            <View style={styles.boxInfoShip}>
                <Text style={styles.title}>Tình trạng đơn hàng</Text>
                <ProgressBarShip />
            </View>


        </ScrollView>
    )
}

export default InfoShipScreen