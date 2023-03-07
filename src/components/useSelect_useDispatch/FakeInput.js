import { useContext, useEffect, useMemo, } from 'react';

import { actionCreater, actionCreaterWithPayload } from './actions/actions';
import { Context } from './ContextProvider/ContextProvider';
import { ADD_FAKE, CHANGE_VALUE, RESET_VALUE } from './constants/constants'

function FakeInput() {
    const store = useContext(Context);

    const { dispatch, state } = store;

    const { currentFake } = state

    console.log(currentFake)

    const handleOnClickAddFake = (e) => {
        e.preventDefault();
        dispatch(actionCreater(ADD_FAKE))
    }

    const handleOnChangeInput = (e) => {
        const { name, value } = e.target;
        dispatch(actionCreaterWithPayload(CHANGE_VALUE, { name, value }))
    }

    useEffect(() => {
        // console.log(currentFake);
        // dispatch(actionCreater(RESET_VALUE))
    })

    return (

        <div div className='mt-5 p-5 border' >
            <form>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id='name' placeholder="Name" name='name'
                        value={currentFake.name}
                        onChange={(e) => { handleOnChangeInput(e) }}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="age" className="form-label">Age</label>
                    <input type="text" className="form-control" id='age' placeholder="Age" name='age'
                        value={currentFake.age}
                        onChange={(e) => { handleOnChangeInput(e) }}
                    />
                </div>
                <div className="mb-3">
                    <button className='btn btn-primary'
                        onClick={(e) => { handleOnClickAddFake(e) }}
                    >
                        Add</button>
                </div>
            </form>
        </div >
    );
}

export default FakeInput;