import { StyleSheet } from 'react-native'
import { COLORS, FONTSIZE } from '../../contains'

const styles = StyleSheet.create({

    boxUser: {
        flexDirection: 'row',
        height: 100,
        marginTop: 10,
        borderTopColor: COLORS.black,
        borderTopWidth: 1
    },

    boxImage: {
        width: '30%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50
    },

    image: {
        width: '75%',
        height: '75%',
        borderRadius: 50

    },

    infoUser: {
        justifyContent: 'space-between',
        marginLeft: 10,
        paddingVertical: 20,
    },

    titleName: {
        fontSize: FONTSIZE.h1,
        fontWeight: 'bold',

    }
})

export default styles