import { StyleSheet, Dimensions } from 'react-native'
import { COLORS, FONTSIZE } from '../../contains'

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({

    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    containerOp1: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.main
    },

    search: {
        width: windowWidth * 0.9
    },

    searchOp1: {
        width: windowWidth * 0.8
    },

    icon: {
        color: COLORS.white
    }

})

export default styles