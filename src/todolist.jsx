import React,{useState} from "react";

function Todolist(){
    console.log("todolist")
    var[newtodo,setNewtodo]=useState("")
    var[todo,setTodo]=useState(["Ayyappa","Anji","Vikas","Tarun"])
    function addTodo(){
        console.log("hello")
       setTodo([...todo,newtodo])
    }
    function zx(i){
        var de=[...todo]
        de.splice(i,1)
        setTodo(de)
    }
    return <div className="border border-2 border-info p-3 m-3">
        <input type="text" onChange={(e)=>{setNewtodo(e.target.value)}} />
        <button onClick={()=>{addTodo()}}>Add Todo</button>
        <ul>
            {
                todo.map((s)=>{
                    return <li>{s} <button onClick={()=>{zx()}}>Del</button></li>
                })
            }
        </ul>
    </div>
}
export default Todolist