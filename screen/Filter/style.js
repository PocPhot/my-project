import { StyleSheet } from 'react-native'
import { COLORS, FONTSIZE } from '../../contains'


const styles = StyleSheet.create({

    container: {
        flex: 1,
        marginHorizontal: 10
    },

    title: {
        fontSize: FONTSIZE.h1,
        marginVertical: 20
    },

    boxOption: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center'
    },

    notice: {
        color: COLORS.title,
        marginTop: 10,
    },

    slider: {
        paddingHorizontal: 10,
    }
})

export default styles