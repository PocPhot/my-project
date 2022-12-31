import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigation } from '@react-navigation/native'

import styles from './style'
import { InputStyle, ButtonStyle } from '../../components'
import { fetchAuthLogin } from '../../store/slices/auth'

const LoginScreen = () => {

    const dispatch = useDispatch()
    const navigation = useNavigation()

    const [data, setData] = useState({
        email: '',
        password: ''
    })

    const handleLogin = () => {
        dispatch(fetchAuthLogin(data))
            .then(res => {
                if (!res.error) { // Login success
                    navigation.navigate('HomeScreen')
                } else { // Login fail
                    alert('Lỗi kết nối')
                }
            })
    }

    return (
        <View style={styles.container}>
            <InputStyle title={'Username'} value={data.email} onChangeText={(value) => setData({ ...data, email: value })} />
            <InputStyle title={'Password'} value={data.password} onChangeText={(value) => setData({ ...data, password: value })} />
            <ButtonStyle content={'Đăng nhập'} onPress={handleLogin} />
        </View>
    )
}

export default LoginScreen