import axios from "axios";

const baseURL = 'https://apiforlearning.zendvn.com/api'

export const api = {
    call: () => {
        return axios.create({
            baseURL
        })
    },
}