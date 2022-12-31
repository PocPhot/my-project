import { View, Text } from 'react-native'
import React from 'react'

import styles from './style'
import { InfoList } from '../../components'
import { useNavigation } from '@react-navigation/native'

const InfoScreen = () => {

    const navigation = useNavigation()

    // Handle move InfoCart Screen
    const moveInfoCart = () => {
        navigation.navigate('InfoCartScreen')
    }

    // Handle move InfoShip Screen
    const moveInfoShip = () => {
        navigation.navigate('InfoShipScreen')
    }

    return (
        <View style={styles.container}>
            <InfoList
                title='Thông tin giao hàng'
                icon='contract'
                onPress={moveInfoCart}
            />

            <InfoList
                title='Thông tin đơn hàng'
                icon='ship'
                onPress={moveInfoShip}
            />
        </View>
    )
}

export default InfoScreen