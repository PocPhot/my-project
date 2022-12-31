import React from 'react'
import Toast from 'react-native-root-toast'
import { View } from 'react-native'

const ShowToast = (message, colorBg) => {
    return (
        <View>
            {
                Toast.show(message, {
                    backgroundColor: colorBg,
                    position: 50,
                })
            }
        </View>
    )
}

export default ShowToast