import Hat from "./Hat";

function DanhSachHat() {
    return (
        <>
            <div style={{
                backgroundColor: '#fff',
                minHeight: '350px',
                width: '350px',
                borderRadius: '50%'
            }} className='row pt-5'>
                <div className='col col-12'>
                    <Hat />
                </div>
                <div className='col col-6'>
                    <Hat />
                </div>
                <div className='col col-6'>
                    <Hat />
                </div>

            </div>
            <button className='btn btn-primary mt-3' style={{
                position: "relative",
                left: '50%',
                transform: `translate(-50%, 0)`
            }}>Play</button>
        </>
    );
}

export default DanhSachHat;