import { StyleSheet } from 'react-native'
import { COLORS, FONTSIZE } from '../../contains'

const styles = StyleSheet.create({

    container: {
        flexDirection: 'row',
        marginHorizontal: 10,
        height: 130,
        marginTop: 20,
    },

    boxImage: {
        width: '30%',
        height: '100%',
        backgroundColor: COLORS.white,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        shadowColor: COLORS.inputSearch,
        shadowOffset: {
            width: 0,
            height: 5
        },
        shadowOpacity: 0.5
    },

    image: {
        height: '100%',
        width: '90%',
        borderRadius: 10,
        resizeMode: 'contain'
    },

    boxTitle: {
        justifyContent: 'space-between',
        paddingVertical: 15,
        marginHorizontal: 5,
        // backgroundColor: 'red',
        width: '40%'
    },

    boxTitleNotQuality: {
        justifyContent: 'space-between',
        paddingVertical: 15,
        marginHorizontal: 15,
        // backgroundColor: 'red',
        width: '80%',
    },

    titleText: {
        fontSize: FONTSIZE.h1,
        fontWeight: 'bold'
    },

    titlePrice: {
        color: COLORS.red
    },

    boxQuality: {
        flexDirection: 'row',
        // backgroundColor: 'red',
        alignItems: 'center'
    },

    boxQualityIcon: {
        backgroundColor: COLORS.button,
        paddingVertical: 3,
        borderRadius: 10
    },

    boxQualityNumber: {
        marginHorizontal: 10,
        fontSize: FONTSIZE.h1,
        fontWeight: 'bold'
    },

})

export default styles