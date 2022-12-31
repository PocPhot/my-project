import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

import IconStyle from '../iconStyle';
import styles from './style';

const InfoList = ({ title, onPress, icon }) => {

    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <View style={styles.top}>
                <IconStyle name={icon} />
                <Text style={styles.title}>{title}</Text>
                <IconStyle name='iconRight' />
            </View>
            <View style={styles.booter}></View>
        </TouchableOpacity>

    )
}

export default InfoList