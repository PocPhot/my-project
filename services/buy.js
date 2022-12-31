import { api } from ".";

const BuyServices = {

    buy: ({
        data,
        ...restParams
    } = {}) => {
        return api.call().post('/mobile/orders/save', {
            data,
            ...restParams
        })
    },

    getDetailOrderByCode: ({
        order_code,
        ...restParams
    } = {}) => {
        return api.call().get(`/mobile/orders/${order_code}`, {
            params: {
                order_code,
                ...restParams
            }
        })
    }
}

export default BuyServices