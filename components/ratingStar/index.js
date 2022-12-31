import { View, Text } from 'react-native'
import React from 'react'
import { Rating } from 'react-native-ratings'

import styles from './style'
import { COLORS } from '../../contains'

const RatingStar = ({ imageSize, product = false, rating, ratingInHome, checkRating }) => {

    const color = product ? COLORS.main : COLORS.white
    const ratingValue = checkRating ? ratingInHome : rating

    return (
        <View style={styles.container}>
            <Rating
                type='star'
                ratingCount={5}
                imageSize={imageSize}
                tintColor={color}
                startingValue={ratingValue}
            />
        </View>
    )
}

export default RatingStar