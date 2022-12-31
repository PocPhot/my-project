import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import styles from './style'
import { InputStyle, ButtonStyle } from '../../components'
import { fetchGetUser, fetchUpdateUser } from '../../store/slices/user'
import { Loading, CheckLogin } from '../../common'
import ShowToast from '../../help/showToast'
import { COLORS, IMAGES, MESSAGE } from '../../contains'

const InfoCartScreen = () => {

    const dispatch = useDispatch()
    const isLogin = useSelector(state => state.Auth.isLoading)
    const [isLoading, setIsLoading] = useState(true)
    const [updateInfo, setUpdateInfo] = useState({
        name: '',
        email: '',
        phone: '',
        address: ''
    })

    // Get info user by token
    useEffect(() => {
        setIsLoading(true)
        dispatch(fetchGetUser()) // Call API 
            .then(res => {
                if (!res.error) {  // Success
                    setIsLoading(false)
                    setUpdateInfo({
                        ...updateInfo,
                        name: res.payload.name,
                        email: res.payload.email,
                        phone: res.payload.phone,
                        address: res.payload.address,
                    })
                } else { // Fail
                    setIsLoading(false)
                    ShowToast(MESSAGE.error, COLORS.error)
                }
            })
    }, [])

    // Handle update info user
    const handleUpdate = () => {
        setIsLoading(true)
        dispatch(fetchUpdateUser(updateInfo))
            .then(res => {
                if (!res.error) {
                    setIsLoading(false)
                    ShowToast(MESSAGE.update, COLORS.success)
                } else {
                    setIsLoading(false)
                    ShowToast(MESSAGE.error, COLORS.error)
                }
            })
    }

    // Render loading screen
    if (isLoading) {
        return (
            <Loading />
        )
    }

    // Render info cart on UI by InputStyle component
    return (
        <>
            {
                (isLogin
                    ?
                    (
                        <View style={styles.container}>
                            <InputStyle title='Họ tên' value={updateInfo.name} onChangeText={(value) => setUpdateInfo({ ...updateInfo, name: value })} />
                            <InputStyle title='Email' value={updateInfo.email} onChangeText={(value) => setUpdateInfo({ ...updateInfo, email: value })} />
                            <InputStyle title='Số điện thoại' value={updateInfo.phone} onChangeText={(value) => setUpdateInfo({ ...updateInfo, phone: value })} />
                            <InputStyle title='Địa chỉ' value={updateInfo.address} onChangeText={(value) => setUpdateInfo({ ...updateInfo, address: value })} />
                            <ButtonStyle content={'Cập nhật thông tin'} onPress={handleUpdate} />
                        </View>
                    )
                    : <CheckLogin nameImage={IMAGES.noInfo} content={MESSAGE.noInfo} />
                )
            }

        </>
    )
}

export default InfoCartScreen