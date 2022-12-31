import { StyleSheet, Dimensions } from 'react-native'

import { COLORS, FONTSIZE } from '../../contains'

const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({

    container: {
        flex: 1
    },

    boxButton: {
        paddingBottom: 10,
        backgroundColor: COLORS.inputSearch
    },

    boxTotalBill: {
        marginTop: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        borderTopColor: COLORS.main,
        borderTopWidth: 1,
        paddingVertical: 10
    },

    boxTotalBillText: {
        fontSize: FONTSIZE.h2,
        fontWeight: 'bold'
    },

    discount: {
        marginVertical: 10
    },

    discountText: {
        color: COLORS.main,
        marginLeft: 20, marginTop: 5
    },

    listItems: {
        height: windowHeight / 8 * 5
    }
})

export default styles