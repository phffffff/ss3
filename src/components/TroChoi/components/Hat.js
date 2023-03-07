import ca from '../../../assets/PauCuaTomCa/ca.png'

function Hat() {
    return (
        <div className="d-flex justify-content-center">
            <div style={{
                width: '50px',
                height: '50px',
            }}>
                <img src={ca} style={{
                    width: '100%'
                }} />
            </div>
        </div>
    );
}

export default Hat;