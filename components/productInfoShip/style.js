import { StyleSheet } from 'react-native'
import { COLORS, FONTSIZE } from '../../contains'

const styles = StyleSheet.create({

    container: {
        paddingHorizontal: 20
    },

    boxProduct: {
        flexDirection: 'row',
        height: 90,
        marginTop: 10
    },

    boxImage: {
        backgroundColor: COLORS.white,
        width: '25%',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },

    image: {
        width: '80%',
        height: '80%',
        resizeMode: 'contain'
    },

    boxTitle: {
        paddingLeft: 20,
        justifyContent: 'space-between',
        paddingVertical: 5
    },

    titleName: {
        fontSize: FONTSIZE.h1,
        fontWeight: 'bold'
    },

    price: {
        color: COLORS.red,
    },

    icon: {
        position: 'absolute',
        top: 0,
        left: 0
    }
})

export default styles