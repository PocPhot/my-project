import { StyleSheet } from 'react-native'
import { COLORS, FONTSIZE } from '../../contains'

const styles = StyleSheet.create({

    container: {
        marginVertical: 10
    },

    viewCategory: {
        width: 80,
        height: 70,
        marginHorizontal: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.white,
        borderRadius: 20
    },

    boxImage: {
        height: '75%',
        width: '100%',
    },

    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },

    titleText: {
        marginBottom: 10,
        fontSize: FONTSIZE.h2,
    }
})

export default styles