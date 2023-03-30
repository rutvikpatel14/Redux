 const reducer = (state=0, action)=>{
    if(action.type === 'deposite'){
        return state + action.payload
    }
    else if(action.type === 'withdrawl'){
        return state - action.payload
    }
    else {
        return state;
    }
};
export default reducer;