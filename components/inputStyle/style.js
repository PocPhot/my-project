import { StyleSheet } from 'react-native'
import { COLORS } from '../../contains'

const styles = StyleSheet.create({

    container: {
        marginHorizontal: 20,
        marginTop: 15
    },

    textInput: {
        borderColor: COLORS.main,
        borderWidth: 1,
        marginTop: 10,
        borderRadius: 7,
        paddingVertical: 3,
        paddingHorizontal: 10
    },

    icon: {
        position: 'absolute',
        right: 10,
        top: 35
    }
})

export default styles