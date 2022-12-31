import { api } from ".";

const SliderServices = {

    getListSlider: ({
        offset = 0,
        limit = 4,
        ...restParam
    } = {}) => {
        return api.call().get('/mobile/sliders', {
            params: {
                limit,
                offset,
                ...restParam
            }
        })
    }
}

export default SliderServices