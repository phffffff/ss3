import { PLUS_POINT } from './constants';

const plusPoint = (payload) => {
    return {
        type: PLUS_POINT,
        payload,
    }
}

export {
    plusPoint,
}