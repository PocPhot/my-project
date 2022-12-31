import { api } from ".";

const ProductServices = {

    getProductById: ({
        id,
        ...restParams
    } = {}) => {
        return api.call().get(`/mobile/products/${id}`, {
            params: {
                id,
                ...restParams
            }
        })
    },

    getAllProduct: ({
        search = '',
        offset = 0,
        limit = 10,
        special,
        is_new,
        sortBy,
        order,
        min_price,
        max_price = 50000000,
        ...restParams
    } = {}) => {
        return api.call().get('/mobile/products', {
            params: {
                search,
                offset,
                limit,
                special,
                is_new,
                sortBy,
                order,
                min_price,
                max_price,
                ...restParams
            }
        })
    }

}

export default ProductServices