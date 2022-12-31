import { View, Text } from 'react-native'
import React, { useState } from 'react'

import styles from './style'
import { TextInput } from 'react-native'
import IconStyle from '../iconStyle'

const InputStyle = ({ title, value, onChangeText }) => {

    const [showPass, setShowPass] = useState(false)

    let obj = {
        title: title,
        // ediable: editable,
        placeholder: `${title}...`,
        autoCapitalize: 'none',
        secureTextEntry: showPass,
        icon: <></>
    }

    switch (title) {
        case 'ConfirmPassword':
        case 'Password':
            obj.secureTextEntry = !showPass
            obj.icon = <IconStyle name={showPass ? 'eye_slash' : 'eye'} onPress={() => setShowPass(!showPass)} />
            break;
        default:
            break;
    }

    return (
        <View style={styles.container}>
            <Text>{title}</Text>
            <TextInput
                style={styles.textInput}
                placeholder={obj.placeholder}
                autoCapitalize={obj.autoCapitalize}
                // editable={obj.ediable}
                secureTextEntry={obj.secureTextEntry}
                value={value}
                onChangeText={onChangeText}
            />
            <View style={styles.icon}>{obj.icon}</View>
        </View>
    )
}

export default InputStyle