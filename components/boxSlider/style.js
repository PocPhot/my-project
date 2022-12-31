import { StyleSheet, Dimensions } from 'react-native'
import { COLORS, FONTSIZE } from '../../contains';

const windowHeight = Dimensions.get('window').height / 8 * 2.5;

const styles = StyleSheet.create({

    container: {
        width: '100%',
        height: windowHeight,
        borderRadius: 10
    },

    image: {
        width: '100%',
        height: '100%',
        borderRadius: 10
    },

    boxImage: {
        width: '100%',
        borderRadius: 10
    },

    dotPagination: {
        position: 'absolute',
        top: '80%',
        left: '25%'
    },

    dotStyle: {
        backgroundColor: COLORS.white,
        width: 10,
        height: 10,
        borderRadius: 50
    },

})

export default styles