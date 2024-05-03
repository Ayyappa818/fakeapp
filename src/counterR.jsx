import React, { useReducer } from "react";
function reducer(state,action){
    if(action.type==="INC"){
        return{count:state.count+1}
    }
    if(action.type==="DEC"){
        return{count:state.count-1}
    }
}
function CounterRe(){
    var[state,dispatch]=useReducer(reducer,{count:0})
    return <div className="border border-3 border-primary p-3 m-3">
        <h1>CounterR:{state.count}</h1>
        <button onClick={()=>{dispatch({type:"INC"})}}>Inc</button>
        <button onClick={()=>{dispatch({type:"DEC"})}}>Dec</button>
    </div>
}
export default CounterRe