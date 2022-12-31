import { StyleSheet } from 'react-native'
import { COLORS, FONTSIZE } from '../../contains'

const styles = StyleSheet.create({

    container: {
        backgroundColor: COLORS.main,
        marginTop: 25,
        marginHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
        borderRadius: 10
    },

    text: {
        color: COLORS.white,
        fontSize: FONTSIZE.h1,
        fontWeight: 'bold'
    },

    containerIcon: {
        flexDirection: 'row'
    },

    icon: {
        marginRight: 10
    }
})

export default styles