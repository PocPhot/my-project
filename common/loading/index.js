import { View, Text, ActivityIndicator } from 'react-native'
import React from 'react'

import styles from './style'
import { COLORS } from '../../contains'

const Loading = () => {
    // Set up loading when UI waiting
    return (
        <View style={styles.container}>
            <ActivityIndicator
                color={COLORS.main}
                size='large'
            />
        </View>
    )
}

export default Loading