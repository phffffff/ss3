const actionCreaterWithPayload = (type, payload) => {
    return {
        type,
        payload
    }
}
const actionCreater = (type) => {
    return {
        type
    }
}

export {
    actionCreater,
    actionCreaterWithPayload,
}