import { Text } from 'react-native'
import React from 'react'

import styles from './style'
import { TouchableOpacity } from 'react-native'
import IconStyle from '../iconStyle'

const ButtonStyle = ({ content, icon, onPress }) => {

    // Render all button
    return (
        (
            icon

                ? <TouchableOpacity style={[styles.container, styles.containerIcon]} onPress={onPress}>
                    <IconStyle name='check' style={styles.icon} />
                    <Text style={styles.text}>{content}</Text>
                </TouchableOpacity>

                : <TouchableOpacity style={styles.container} onPress={onPress}>
                    <Text style={styles.text}>{content}</Text>
                </TouchableOpacity>
        )

    )
}

export default ButtonStyle