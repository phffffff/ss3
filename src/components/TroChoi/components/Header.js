import { useSelector } from 'react-redux'

function Header() {
    const { point } = useSelector(state => state.trochoiReducer)

    return (
        <header className="pt-2 pb-3 text-center text-success">
            <h1 className='mb-3'>Trò chơi pầu cua tôm cá</h1>
            <h3 className="">Điểm: <span className="text-white">{point}</span></h3>
        </header>
    );
}

export default Header;