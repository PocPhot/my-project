import { StyleSheet } from 'react-native'
import { COLORS, FONTSIZE } from '../../contains'

const styles = StyleSheet.create({

    qualityIcon: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 15,

    },

    icon: {
        backgroundColor: COLORS.button,
        padding: 5,
        borderRadius: 10,
    },

    qualityNumber: {
        fontSize: FONTSIZE.h1,
        fontWeight: 'bold',
        marginHorizontal: 15,
    },
})

export default styles