const initState = {
    danhSachCuoc: [
        { id: 1, name: 'Cá', img: './PauCuaTomCa/ca.png', point: 0, },
        { id: 2, name: 'Tôm', img: './PauCuaTomCa/tom.png', point: 0, },
        { id: 3, name: 'Pầu', img: './PauCuaTomCa/bau.png', point: 0, },
        { id: 4, name: 'Nai', img: './PauCuaTomCa/nai.png', point: 0, },
        { id: 5, name: 'Cua', img: './PauCuaTomCa/cua.png', point: 0, },
        { id: 6, name: 'Gà', img: './PauCuaTomCa/ga.png', point: 0, },
    ],
    point: 1000,
    danhSachDat: [
        { id: 1, name: 'Cá', img: './PauCuaTomCa/ca.png', },
        { id: 2, name: 'Tôm', img: './PauCuaTomCa/tom.png', },
        { id: 3, name: 'Pầu', img: './PauCuaTomCa/bau.png', },
    ]
}

const trochoiReducer = (state = initState, action) => {
    let newDanhSachCuoc = [];
    switch (action.type) {
        case "PLUS_POINT":
            let idx = state.danhSachCuoc && state.danhSachCuoc.length && state.danhSachCuoc.findIndex((item) => item.id === action.payload.id)

            newDanhSachCuoc = [...state.danhSachCuoc];

            let prePoint = (state.danhSachCuoc && state.danhSachCuoc.length && state.danhSachCuoc.reduce((acc, cur) => acc + cur.point, 0)) || 0;

            if (idx !== -1) {
                newDanhSachCuoc[idx].point =
                    action.payload.flag
                        ? state.point > 0 ? newDanhSachCuoc[idx].point + 100 : newDanhSachCuoc[idx].point
                        : newDanhSachCuoc[idx].point === 0 ? 0 : newDanhSachCuoc[idx].point - 100;
            }

            let newPoint = action.payload.flag
                ? state.point > 0 ? state.point - 100 : state.point
                : newDanhSachCuoc[idx].point > 0 ? state.point + 100 : state.point;

            console.log("prePoint", prePoint)
            console.log('newPoint', newPoint);


            return {
                ...state,
                danhSachCuoc: [...newDanhSachCuoc],
                point: newPoint,
            }


        default:
            return { ...state }
    }
}

export default trochoiReducer;