import { api } from ".";

const CategoryServices = {

    getCategory: ({
        offset = 0,
        limit = 4,
        ...resetParam
    } = {}) => {
        return api.call().get('/mobile/categories', {
            params: {
                offset,
                limit,
                ...resetParam
            }
        })
    },

    getCategoryById: ({
        id,
        limit,
        ...restParam
    } = {}) => {
        return api.call().get(`/mobile/categories/${id}/products`, {
            params: {
                id,
                limit,
                ...restParam
            }
        })
    }

}

export default CategoryServices