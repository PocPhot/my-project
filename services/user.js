import { api } from ".";

const UserServices = {

    getUser: ({
        ...restParam
    } = {}) => {
        return api.call().get('/auth/me', {
            params: {
                ...restParam
            }
        })
    },

    updateUser: ({
        name,
        email,
        phone,
        address,
        ...restParams
    } = {}) => {
        return api.call().put('/auth/update', {
            name,
            email,
            phone,
            address,
            ...restParams
        })
    }
}

export default UserServices