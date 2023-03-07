import { useSelector } from "react-redux/es/exports";

import Cuoc from "./Cuoc";

function DanhSachCuoc() {
    const { danhSachCuoc } = useSelector((state) => state.trochoiReducer)

    const renderDanhSachCuoc = () => {
        return danhSachCuoc && danhSachCuoc.length && danhSachCuoc.map((item) => {
            return (
                <div className='col col-4' key={item.id}>
                    <Cuoc item={item} />
                </div>
            )
        })
    }

    return (
        <div className='row'>
            {renderDanhSachCuoc()}
        </div>
    );
}

export default DanhSachCuoc;