import { View } from 'react-native'
import React, { useState } from 'react'
import { SearchBar } from '@rneui/themed';
import { useNavigation, useRoute } from '@react-navigation/native';

import styles from './style'


const BoxSearch = () => {

    const route = useRoute()
    const navigation = useNavigation()

    // Save value of boxSearch when change Search Screen
    const [search, setSearch] = useState(route.params?.search || '')

    const changePage = () => {
        // If user staying SearchScreen and keep going to search product
        if (route.name === 'SearchScreen') {
            navigation.setParams({
                search
            })
        } else { // User stay another screen and want to search product
            if (search) {
                navigation.navigate('SearchScreen', { search })
            }
        }
    }
    // Render Search Box 
    return (
        <View>
            <SearchBar
                lightTheme
                placeholder="Tìm kiếm..."
                containerStyle={styles.textInput}
                inputContainerStyle={styles.input}
                round={true}
                onChangeText={(search) => setSearch(search)}
                value={search}
                onSubmitEditing={changePage}

            />
        </View>


    )
}

export default BoxSearch