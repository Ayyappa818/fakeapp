import { type } from "@testing-library/user-event/dist/type";
import React, { useReducer } from "react";
function reducer(state,action){
    if(action.type==="ADD"){
        return{
            todo:[...state.todo,state.newtodo],
            newtodo:""
        }
    }
    if(action.type==="Updatevalue"){
        return {...state,newtodo:action.payload}
    }
}
function TodolistRe(){
    var[state,dispatch]=useReducer(reducer,{
        todo:["ayyappa","anji","tarun","siva"],
        newtodo:""
    })
    return <div className="border border-2 border-info p-3 m-3">
        <input type="text" value={state.newtodo} onChange={(e)=>(dispatch({type:"Updatevalue",payload:e.target.value}))} />
        <button onClick={()=>{dispatch({type:"ADD"})}}>Add</button>
        <div>
            {
                state.todo.map((s)=>{
                    return <li>{s}</li>
                })
            }
        </div>
    </div>
}
export default TodolistRe