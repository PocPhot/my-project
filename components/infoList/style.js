import { StyleSheet } from 'react-native'
import { COLORS, FONTSIZE } from '../../contains'

const styles = StyleSheet.create({

    container: {
        paddingHorizontal: 15,
        marginTop: 25
    },

    top: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    title: {
        left: 20,
        flex: 1,
        fontSize: FONTSIZE.h2
    },

    booter: {
        borderColor: COLORS.main,
        borderWidth: 0.2,
        marginTop: 10
    }

})

export default styles