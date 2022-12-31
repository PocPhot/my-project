import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

import { COLORS } from '../../contains';

const IconStyle = ({ name, onPress, style, white }) => {

    let icon
    switch (name) {
        case 'drawer':
            icon = <Ionicons name="md-reorder-four" size={28} color={COLORS.main} />
            break;
        case 'cart':
            icon = <AntDesign name="shoppingcart" size={28} color={white ? COLORS.white : COLORS.main} />
            break;
        case 'filter':
            icon = <AntDesign name="filter" size={28} color={COLORS.main} />
            break;
        case 'trash':
            icon = <FontAwesome name="trash-o" size={28} color={COLORS.main} />
            break;
        case 'contract':
            icon = <FontAwesome name="address-book-o" size={26} color={COLORS.main} />
            break;
        case 'ship':
            icon = <FontAwesome5 name="shipping-fast" size={26} color={COLORS.main} />
            break;
        case 'iconRight':
            icon = <AntDesign name="right" size={28} color={COLORS.main} />
            break;
        case 'back':
            icon = <Ionicons name="arrow-back" size={26} color={white ? COLORS.white : COLORS.main} />
            break;
        case 'check':
            icon = <AntDesign name="check" size={24} color={COLORS.black} />
            break;
        case 'heart':
            icon = <AntDesign name="heart" size={22} color={COLORS.red} />
            break;
        case 'hearto':
            icon = <AntDesign name="hearto" size={22} color={COLORS.red} />
            break;
        case 'cartInProduct':
            icon = <FontAwesome5 name="shopping-cart" size={24} color={COLORS.red} />
            break;
        case 'plus':
            icon = <Entypo name="plus" size={24} color={COLORS.title} />
            break;
        case 'minus':
            icon = <Entypo name="minus" size={24} color={COLORS.title} />
            break;
        case 'eye':
            icon = <FontAwesome name="eye" size={24} color={COLORS.main} />
            break;
        case 'eye_slash':
            icon = <FontAwesome name="eye-slash" size={24} color={COLORS.main} />
            break;

        default:
            break;
    }

    // All icon in project
    return (
        (
            onPress
                ? <TouchableOpacity onPress={onPress} style={style}>
                    {icon}
                </TouchableOpacity>
                : <View style={style}>
                    {icon}
                </View>
        )
    )
}

export default IconStyle