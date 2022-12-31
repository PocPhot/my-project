import React, { useState } from 'react'
import { View, Text, Image } from 'react-native'
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer'
import { useNavigation } from '@react-navigation/native'
import { Drawer } from 'react-native-paper'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useDispatch, useSelector } from 'react-redux'

import styles from './style'
import { COLORS, IMAGES } from '../../contains'
import { logOut } from '../../store/slices/auth'

const DrawerContent = () => {

    const [activeItem, setActiveItem] = useState('Home') // Change status focused of DrawerItem
    const navigation = useNavigation()
    const dispatch = useDispatch()

    const isLoading = useSelector(state => state.Auth.isLoading)

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.boxImage}>
                    <Image
                        source={IMAGES.avatar}
                        style={styles.image}
                    />
                </View>
                <Text style={styles.textHeader}> Nguyễn Chí Hiếu</Text>
            </View>

            <DrawerContentScrollView style={styles.mainDrawer}>
                <DrawerItem
                    label="Trang chủ"
                    onPress={() => {
                        navigation.navigate('HomeStack')
                        setActiveItem('Home')
                    }}
                    icon={({ focused, color, size }) => <Ionicons color={color} size={size} name={focused ? 'ios-home' : 'ios-home-outline'} />}
                    focused={activeItem === 'Home' ? true : false}
                    activeTintColor={COLORS.main}
                />

                <DrawerItem
                    label="Danh mục"
                    onPress={() => {
                        navigation.navigate('CategoryStack')
                        setActiveItem('Category')
                    }}
                    icon={({ focused, color, size }) => <Ionicons color={color} size={size} name={focused ? 'ios-browsers' : 'ios-browsers-outline'} />}
                    focused={activeItem === 'Category' ? true : false}
                    activeTintColor={COLORS.main}
                />

                <DrawerItem
                    label="Thông tin giỏ hàng"
                    onPress={() => {
                        navigation.navigate('CartScreen')
                        setActiveItem('Cart')
                    }}
                    icon={({ focused, color, size }) => <Ionicons color={color} size={size} name={focused ? 'ios-cart' : 'ios-cart-outline'} />}
                    focused={activeItem === 'Cart' ? true : false}
                    activeTintColor={COLORS.main}
                />

                <DrawerItem
                    label="Quản lí thông tin"
                    onPress={() => {
                        navigation.navigate('InfoStack')
                        setActiveItem('Info')
                    }}
                    icon={({ focused, color, size }) => <Ionicons color={color} size={size} name={focused ? 'ios-person' : 'ios-person-outline'} />}
                    focused={activeItem === 'Info' ? true : false}
                    activeTintColor={COLORS.main}
                />

                {
                    isLoading
                        ?
                        <DrawerItem
                            label="Đăng xuất"
                            onPress={() => {
                                dispatch(logOut()) // Log out user
                            }}
                            icon={({ color, size }) => <Ionicons color={color} size={size} name={'ios-log-out-outline'} />}
                            activeTintColor={COLORS.main}
                        />
                        : <DrawerItem
                            label="Đăng nhập"
                            onPress={() => {
                                navigation.navigate('LoginScreen')
                                setActiveItem('Login')
                            }}
                            icon={({ color, size }) => <Ionicons color={color} size={size} name={'ios-log-in-outline'} />}
                            activeTintColor={COLORS.main}
                        />
                }

            </DrawerContentScrollView>

            <Drawer.Section style={styles.bottomDrawer}>
                <Text style={styles.bottomDrawerText}></Text>
            </Drawer.Section>
        </View>
    )
}

export default DrawerContent