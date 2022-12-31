import { StyleSheet, Dimensions } from 'react-native'
import { COLORS, FONTSIZE } from '../../contains'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({

    container: {
        backgroundColor: COLORS.main,
        flex: 1
    },

    infoTitle: {
        alignItems: 'flex-end',
        marginRight: 30,
        paddingTop: 10,
        height: windowHeight / 8 * 2
    },

    infoContent: {
        backgroundColor: COLORS.white,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingTop: 40,
        paddingHorizontal: 20
    },

    ratingStar: {
        backgroundColor: COLORS.main,
        marginBottom: 20
    },

    nameTitle: {
        color: COLORS.white,
        fontSize: FONTSIZE.h1,
        fontWeight: 'bold',
        marginBottom: 20,
        marginRight: 15
    },

    priceTitle: {
        color: COLORS.inputSearch,
        textDecorationLine: 'line-through',
        fontSize: FONTSIZE.h2
    },

    boxImage: {
        position: 'absolute',
        height: 200,
        width: 120,
        top: 5,
        left: 25
    },

    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    },

    priceNew: {
        position: 'absolute',
        backgroundColor: COLORS.price,
        right: 10,
        top: 150,
        paddingHorizontal: 40,
        paddingVertical: 15,
        borderRadius: 20
    },

    priceNewText: {
        color: COLORS.white,
        fontSize: FONTSIZE.h2,
        fontWeight: 'bold'
    },

    qualityTitle: {
        marginVertical: 20
    },

    title: {
        fontSize: FONTSIZE.h1,
        fontWeight: 'bold',
    },

    footer: {
        backgroundColor: COLORS.gray,
        flexDirection: 'row',
        paddingHorizontal: 35,
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    footerText: {
        color: COLORS.white,
        fontSize: FONTSIZE.h3
    },

    submitText: {
        color: COLORS.white,
        fontSize: FONTSIZE.h2,
        fontWeight: 'bold'
    },

    boxSubmit: {
        backgroundColor: COLORS.price,
        borderRadius: 15,
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },

    boxComment: {
        marginTop: 20
    }
})

export default styles