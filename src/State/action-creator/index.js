export const Deposite = (amount)=>{
    console.log(amount,'amount')
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