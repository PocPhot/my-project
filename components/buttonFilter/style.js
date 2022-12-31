import { StyleSheet } from 'react-native'

import { COLORS } from '../../contains'

const styles = StyleSheet.create({

    container: {
        backgroundColor: COLORS.white,
        width: 100,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10,
        marginTop: 10,
        borderRadius: 15,
        shadowColor: COLORS.main,
        shadowOffset: {
            width: 0,
            height: 5
        },
        shadowOpacity: 2,
        shadowRadius: 10
    },

    active: {
        backgroundColor: COLORS.main
    }
})

export default styles