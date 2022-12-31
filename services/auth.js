import { api } from ".";

const AuthServices = {

    postAuth: ({
        email,
        password
    } = {}) => {
        return api.call().post('/auth/login', {
            email,
            password
        })
    }
}

export default AuthServices