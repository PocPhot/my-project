import { View, Text, Image } from 'react-native'
import React from 'react'

import styles from './style'

const CheckLogin = ({ nameImage, content }) => {
    // When user don't have account, show notice for user need to login
    return (
        <View style={styles.container}>
            <Image source={nameImage} style={styles.image} />
            <Text style={styles.text}>{content}</Text>
        </View>
    )
}

export default CheckLogin