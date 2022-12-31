import { StyleSheet, Dimensions } from 'react-native'
import { COLORS, FONTSIZE } from '../../contains'

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({

    container: {
        marginTop: 25,
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
    },

    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: COLORS.main
    },

    boxSearch: {
        paddingHorizontal: 10,
    },

    boxSearchInfo: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },

    search: {
        width: windowWidth * 0.9
    }

})

export default styles