import { v4 } from 'uuid'

import { ADD_FAKE, CHANGE_VALUE, RESET_VALUE } from '../constants/constants'

const initState = {
    listFake: [
        { id: 1, name: 'Huỳnh Kiên', age: 20, img: `https://joeschmoe.io/api/v1/${'Huỳnh Kiên'.replace(' ', '-')}` },
        { id: 2, name: 'Hoàng Diệu', age: 18, img: `https://joeschmoe.io/api/v1/${'Hoàng Diệu'.replace(' ', '-')}` },
        { id: 3, name: 'Ngọc Trang', age: 18, img: `https://joeschmoe.io/api/v1/${'Ngọc Trang'.replace(' ', '-')}` },
    ],
    currentFake: {
        name: '',
        age: '',
        img: '',
    }
};

const fakeReducer = (state = initState, action) => {
    let newCurrentFake = {};
    switch (action.type) {
        case ADD_FAKE:
            newCurrentFake = {
                ...state.currentFake,
                img: `https://joeschmoe.io/api/v1/${state.currentFake.name.replace(' ', '-')}`,
                id: v4(),
            };

            return {
                ...state,
                listFake: [
                    ...state.listFake,
                    newCurrentFake
                ]
            }

        case CHANGE_VALUE:
            let { name, value } = action.payload;

            return {
                ...state,
                currentFake: {
                    ...state.currentFake,
                    [name]: value,
                }
            }

        case RESET_VALUE:
            newCurrentFake = {
                name: '',
                age: '',
                img: '',
            }
            return {
                ...state,
                currentFake: { ...newCurrentFake }
            }
        default:
            return { ...state }
    }
}

export default fakeReducer;