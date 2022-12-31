import { StyleSheet } from 'react-native'
import { Dimensions } from 'react-native';
import { COLORS, FONTSIZE } from '../../contains';

const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: COLORS.main
    },

    header: {
        justifyContent: 'center',
        alignItems: 'center',
        height: windowHeight / 8 * 2.5,
    },

    boxImage: {
        width: 100,
        height: 100,
        backgroundColor: 'white',
        borderRadius: 100,
        marginBottom: 10
    },

    image: {
        width: '100%',
        height: '100%',
        borderRadius: 100
    },

    textHeader: {
        color: COLORS.white,
        fontSize: FONTSIZE.h1
    },

    bottomDrawer: {
        height: windowHeight / 8 * 0.8,
        justifyContent: 'center',
        alignItems: 'center'
    },

    bottomDrawerText: {
        color: COLORS.white
    },

    mainDrawer: {
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        backgroundColor: COLORS.white
    }
})

export default styles