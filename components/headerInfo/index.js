import { View, Text } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

import styles from './style'
import IconStyle from '../iconStyle'
import BoxSearch from '../boxSearch';

const HeaderInfo = ({ iconRight, onPress, onPressRight }) => {

    const navigation = useNavigation()

    // Handle move Drawer screen
    const moveDrawerScreen = () => {
        navigation.openDrawer()
    }

    return (
        (
            iconRight
                // Option 1: Have icon on the right screen
                ? <View style={styles.containerOp1}>
                    <IconStyle name='back' onPress={onPress} style={styles.icon} white />
                    <View style={styles.searchOp1}>
                        <BoxSearch />
                    </View>
                    <IconStyle name={iconRight} onPress={onPressRight} style={styles.icon} white />
                </View>

                // Option 2: Don't have icon right
                : <View style={styles.container}>
                    <IconStyle name='back' onPress={onPress} />
                    <View style={styles.search}>
                        <BoxSearch />
                    </View>
                </View>
        )

    )
}

export default HeaderInfo