import { StyleSheet, Dimensions } from 'react-native'
import { COLORS, FONTSIZE } from '../../contains';

const windowWidth = Dimensions.get('window').width - 60;

const styles = StyleSheet.create({

    container: {
        backgroundColor: COLORS.white,
        width: windowWidth / 2,
        height: 250,
        borderRadius: 20,
        shadowColor: COLORS.icon,
        shadowOffset: {
            width: 0,
            right: 10
        },
        shadowOpacity: 0.5,
        shadowRadius: 10,
        marginTop: 20,
        marginLeft: 15
    },

    top: {
        flexDirection: 'row',
        height: '67%',
        width: '100%',
    },

    iconLeft: {
        // position: 'relative',
        left: 5,
        top: 10
    },

    boxImage: {
        width: '80%',
        height: '100%',
        paddingTop: 10
        // backgroundColor: 'red'
    },

    image: {
        height: '90%',
        width: '90%',
        resizeMode: 'contain'
    },

    boxImageSale: {
        position: 'absolute',
        right: 0,
        width: 50,
        height: 50,
    },

    imageSale: {
        width: '100%',
        height: '100%'
    },

    boxSalePrice: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center'
    },

    percent: {
        fontSize: FONTSIZE.h3,
        color: COLORS.red,
        fontWeight: 'bold'
    },

    content: {
        fontSize: 10,
        color: COLORS.red,
        fontWeight: 'bold'
    },

    title: {
        fontWeight: 'bold',
        fontSize: FONTSIZE.h3,
    },

    titileSeach: {
        color: COLORS.yellow,
    },

    boxInfo: {
        flexDirection: 'row',
    },

    iconCart: {
        width: '35%',
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },

    botter: {
        marginHorizontal: 10,
    },

    priceOld: {
        color: COLORS.icon,
        textDecorationLine: 'line-through',
        fontSize: FONTSIZE.h3
    },

    priceNew: {
        color: COLORS.red,
        fontWeight: 'bold'
    }

})

export default styles