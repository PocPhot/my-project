import { View, Text } from 'react-native'
import React, { useState } from 'react'
import MultiSlider from '@ptomasroos/react-native-multi-slider'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'

import styles from './style'
import {
    ButtonFilter,
    ButtonStyle
} from '../../components'
import { COLORS } from '../../contains'
import { FormatPrice } from '../../help'
import { Filter } from '../../store/slices/filter'


const FilterScreen = () => {

    const filter = useSelector(state => state.Filter.items)

    const fromValue = 10000
    const [toValue, setToValue] = useState(filter.toValue)
    const [activeTitle, setActiveTitle] = useState(filter.activeTitle)

    const dispatch = useDispatch()
    const navigation = useNavigation()

    // Set up active button when user select
    const activeButton = (title) => {
        setActiveTitle(title)
    }

    // Save setting
    const apply = () => {
        dispatch(Filter({ activeTitle, toValue, fromValue }))
        navigation.goBack()
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Lọc theo sản phẩm </Text>
            <View style={styles.boxOption}>
                <ButtonFilter title='Mới nhất' onPress={activeButton} activeTitle={activeTitle} />
                <ButtonFilter title='Giá giảm' onPress={activeButton} activeTitle={activeTitle} />
                <ButtonFilter title='Giá tăng' onPress={activeButton} activeTitle={activeTitle} />
                <ButtonFilter title='Cũ nhất' onPress={activeButton} activeTitle={activeTitle} />
                <ButtonFilter title='Đang giảm giá' onPress={activeButton} activeTitle={activeTitle} />
            </View>
            <Text style={styles.title}> Lọc theo giá </Text>

            <View style={styles.slider}>
                <MultiSlider
                    min={0}
                    max={50000000}
                    markerStyle={{
                        backgroundColor: COLORS.title
                    }}
                    selectedStyle={{
                        backgroundColor: COLORS.title
                    }}
                    sliderLength={350}
                    onValuesChangeFinish={(toValue) => setToValue(toValue)}
                />

            </View>


            <Text style={styles.notice}> Giá từ: 0 VND == Giá đến: {FormatPrice(`${toValue}`)}</Text>
            <ButtonStyle content={'Áp dụng'} onPress={apply} />
        </View>
    )
}

export default FilterScreen