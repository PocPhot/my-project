import { View, Text } from 'react-native'
import React from 'react'

import styles from './style'
import { TouchableOpacity } from 'react-native'

const ButtonFilter = ({ title, onPress, activeTitle }) => {

    // Set style when user selected
    const activeBackground = activeTitle === title ? styles.active : {}

    const activeButton = () => {
        onPress(title)
    }

    return (
        <TouchableOpacity
            style={[styles.container, activeBackground]}
            onPress={activeButton}
        >
            <Text>{title}</Text>
        </TouchableOpacity>
    )
}

export default ButtonFilter