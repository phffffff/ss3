
// import { actionCreater } from './actions/actions';
import ContextProvider from "./ContextProvider/ContextProvider";
import FakeCloneChildren from "./FakeCloneChildren";
import FakeInput from "./FakeInput";

function FakeClone() {
    return (
        <ContextProvider>
            <div className='w-50 mx-auto'>
                <FakeCloneChildren />
                <FakeInput />
            </div>
        </ContextProvider>
    );
}

export default FakeClone;