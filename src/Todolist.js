import * as React from 'react';


function useLocalStorage(name,initialValue){
    const[value,setValue] = React.useState(JSON.parse(window.localStorage.getItem(name))??initialValue)

    const stringifiedValue= JSON.stringify(value)
    React.useEffect(()=>{
        window.localStorage.setItem(name,stringifiedValue)
    },[stringifiedValue,name])

    return[value,setValue]
}

function Todo(){
   
}



export default function TodoList(){


const [value,setValue]=React.useState("")
const [local,setLocal]=useLocalStorage("todoList",{"todo":[],})


function HandleSubmit(e){
    e.preventDefault()
    if (value){
        
        setLocal({
            ...local,
            todo:[...local.todo,value,],
        })
        setValue("")
    }
}
    return(
        <div>
            <form onSubmit={HandleSubmit}>
            <h1>TodoList</h1>
            <input value={value} onChange={(e)=>setValue(e.target.value)}></input>
            </form>

            <Todo/>
        </div>
    )
}