import { useDispatch } from 'react-redux'

import { plusPoint } from '../redux/actions'

function Cuoc({ item }) {
    const dispatch = useDispatch();

    const handleOnClickCuoc = (payload) => {
        dispatch(plusPoint(payload));
    }
    console.log(item)
    return (
        <div className="card mb-3" style={{
            width: "160px"
        }}>
            <img className="card-img-top" src={item.img} alt="" />
            <div className="card-body">
                <div className="card-text d-flex justify-content-around">
                    <button
                        onClick={() => {
                            const { id } = item;
                            handleOnClickCuoc({ id, flag: false })
                        }}
                    >
                        <i className="fa fa-minus" aria-hidden="true"></i>
                    </button>
                    <span className="card-text">{item.point || '0'}</span>
                    <button
                        onClick={() => {
                            const { id } = item;
                            handleOnClickCuoc({ id, flag: true })
                        }}
                    >
                        <i className="fa fa-plus" aria-hidden="true"></i>
                    </button>
                </div>

            </div>
        </div>
    );
}

export default Cuoc;