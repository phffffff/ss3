import DanhSachHat from "./components/DanhSacHat";
import DanhSachCuoc from "./components/DanhSachCuoc";
import Header from "./components/Header";

import "./TroChoi.scss"

function TroChoi() {
    return (
        <div className='bg-trochoi'>
            <Header />
            <div className="container">
                <div className='row'>
                    <div className='col col-8'>
                        <DanhSachCuoc />
                    </div>
                    <div className='col col-4'>
                        <DanhSachHat />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TroChoi;