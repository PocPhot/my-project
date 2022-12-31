import { View, Text } from 'react-native'
import React, { useState } from 'react'

import styles from './style'
import IconStyle from '../iconStyle'

const QualityProduct = ({ handleChangeNumber, quality }) => {

    // Handle increan quality
    const handleInc = () => {
        handleChangeNumber(quality + 1)
    }

    // Handle decrease quality
    const handleDec = () => {
        handleChangeNumber(quality === 0 ? 1 : quality - 1)
    }

    return (
        <View style={styles.qualityIcon}>
            <IconStyle name='minus' style={styles.icon} onPress={handleDec} />
            <Text style={styles.qualityNumber}>{quality}</Text>
            <IconStyle name='plus' style={styles.icon} onPress={handleInc} />
        </View>
    )
}

export default QualityProduct
