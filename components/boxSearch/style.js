import { StyleSheet } from 'react-native'
import { COLORS } from '../../contains'

const styles = StyleSheet.create({

    textInput: {
        borderRadius: 20,
        padding: 0,
        marginHorizontal: 10,
        marginVertical: 10,
        backgroundColor: COLORS.inputSearch
    },

    input: {
        marginHorizontal: 10,
        backgroundColor: COLORS.inputSearch
    }
})

export default styles