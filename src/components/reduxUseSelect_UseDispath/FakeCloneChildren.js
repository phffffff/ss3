import { useContext, } from "react";

import { Context } from "./ContextProvider/ContextProvider";

function FakeCloneChildren() {
    const data = useContext(Context);

    const { state } = data;

    const { listFake } = state;

    console.log(state);


    return (
        <div>
            {
                (listFake && listFake.length && listFake.map((item) => {
                    return (
                        <div className="card" key={item.id}>
                            <div className='row'>
                                <div className='col col-2'>
                                    <img className="card-img-top" src={item.img} alt={item.name} />
                                </div>
                                <div className='col col-10'>
                                    <div className="card-body">
                                        <h4 className="card-title">{item.name}</h4>
                                        <p className="card-text">{item.age}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })) || ''
            }
        </ div>
    );
}

export default FakeCloneChildren;