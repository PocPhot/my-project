import { View, Text, FlatList, Image, ImageEditor } from 'react-native'
import React from 'react'

import styles from './style'
import { IMAGES } from '../../contains'

const listUserCmt = [
    { id: 1, name: 'User1', comment: 'Sảm phẩm tốt', thumb: IMAGES.avatar },
    { id: 2, name: 'User2', comment: 'Sảm phẩm bình thường', thumb: IMAGES.avatar },
    { id: 3, name: 'User3', comment: 'Đóng gói kĩ', thumb: IMAGES.avatar },

]

const Comment = () => {

    const renderListUser = ({ item }) => {
        return (
            <View style={styles.boxUser}>
                <View style={styles.boxImage}>
                    <Image
                        source={item.thumb}
                        style={styles.image}
                    />
                </View>
                <View style={styles.infoUser}>
                    <Text style={styles.titleName}>{item.name}</Text>
                    <Text>{item.comment}</Text>
                </View>
            </View>
        )
    }

    return (
        <>
            <FlatList
                data={listUserCmt}
                renderItem={renderListUser}
                keyExtractor={item => item.id.toString()}
            />
        </>
    )
}

export default Comment