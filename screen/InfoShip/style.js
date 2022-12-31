import { StyleSheet } from 'react-native'
import { COLORS, FONTSIZE } from '../../contains'

const styles = StyleSheet.create({

    container: {
        flex: 1
    },

    boxTextInput: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    boxInfoShip: {
        paddingHorizontal: 20,
        marginTop: 15
    },

    title: {
        fontWeight: 'bold',
        fontSize: FONTSIZE.h2
    }
})

export default styles