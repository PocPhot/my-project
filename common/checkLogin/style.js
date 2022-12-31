import { StyleSheet, Dimensions } from 'react-native'
import { COLORS, FONTSIZE } from '../../contains'

const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: windowHeight / 8 * 6
    },

    image: {
        width: '80%',
        height: '65%',
    },

    text: {
        fontSize: 28,
        color: COLORS.main,
        fontWeight: 'bold',
        textAlign: 'center'
    }
})

export default styles