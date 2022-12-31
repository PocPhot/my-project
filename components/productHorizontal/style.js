import { StyleSheet } from 'react-native'

import { COLORS, FONTSIZE } from '../../contains'

const styles = StyleSheet.create({

    viewCategory: {
        backgroundColor: COLORS.white,
        height: 120,
        width: 220,
        marginRight: 10,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10
    },

    boxImage: {
        width: '50%',
        height: '100%',
    },

    image: {
        height: '100%',
        width: '90%',
        resizeMode: 'contain'
    },

    nameText: {
        fontWeight: 'bold',
        fontSize: FONTSIZE.h3
    },

    priceText: {
        color: COLORS.red,
        fontWeight: 'bold'
    },

    infoTitle: {
        height: '100%',
        width: '50%',
        justifyContent: 'space-between',
        paddingVertical: 10
    },

    ratingStar: {
        alignItems: 'flex-start'
    },

})

export default styles