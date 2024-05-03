import React,{useState} from "react";
import Todolist from "./todolist";
function Counter(){
    var [c,setC]=useState(0)
    function abc(){
        setC(c=>c+1)
    }
    function xyz(){
        setC(c=>c-1)
    }
    return <div className="border border-3 border-primary p-3">
    <h1>counter:{c}</h1>
    <button onClick={()=>{abc()}}>Inc</button>
    <button onClick={()=>{xyz()}}>Dec</button>
    <Todolist></Todolist>
    </div>
}
export default Counter