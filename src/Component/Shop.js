import React from 'react'
import { useDispatch } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import { actionCreators } from '../State/index';
import { Clear, Deposite, Withdrawl } from '../State/action-creator';


const Shop = () => {
    const dispatch = useDispatch();

    return (
        <div className='container'>
            <h2>Deposit/Withdrawl</h2>
            <button className="btn btn-primary mx-2" onClick={() => { dispatch(Withdrawl(100)) }}>-</button>
            Update Balance
            <button className="btn btn-primary mx-2" onClick={() => { dispatch(Deposite(100)) }}>+</button>
            <button className="btn btn-primary mx-2" onClick={() => { dispatch(Clear(0)) }}>Clear</button>
        </div>
    )
}

export default Shop
