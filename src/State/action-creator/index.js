export const Deposite = (amount)=>{
    return (dispatch)=>{
        dispatch({
            type: 'deposite',
            payload: amount
        })
    }
}

export const Withdrawl = (amount)=>{
    return (dispatch)=>{
        dispatch({
            type: 'withdrawl',
            payload: amount
        })
    }

}
export const Clear = (amount)=>{
    return (dispatch)=>{
        dispatch({
            type: 'clear',
            payload: amount
        })
    }

}