import { View, Text } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

import styles from './style'
import IconStyle from '../iconStyle'
import BoxSearch from '../boxSearch';

const Header = ({ name, iconRight, onPress, stack, notSearch }) => {

    const navigation = useNavigation()

    // Handle move Drawer screen
    const moveDrawerScreen = () => {
        navigation.openDrawer()
    }

    const goBackHomeScreen = () => {
        navigation.goBack()
    }

    return (
        // Have icon drawer on the left, title in middle, icon function on the right and a search box
        <View style={styles.container}>

            <View style={styles.header}>
                {
                    stack
                        ? <IconStyle name='back' onPress={goBackHomeScreen} />
                        : <IconStyle name='drawer' onPress={moveDrawerScreen} />
                }
                <Text style={styles.title}> {name} </Text>
                <IconStyle name={iconRight} onPress={onPress} />
            </View>

            <View style={styles.boxSearch}>
                {
                    notSearch
                        ? <></>
                        : <BoxSearch />
                }
            </View>

        </View>
    )
}

export default Header