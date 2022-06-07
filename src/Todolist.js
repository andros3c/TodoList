import * as React from 'react';


function useLocalStorage(name,initialValue){
    const[value,setValue] = React.useState(window.localStorage.getItem(name)??initialValue)

    const stringifiedValue= JSON.stringify(value)
    React.useEffect(()=>{
        window.localStorage.setItem(name,stringifiedValue)
    },[stringifiedValue,name])

    return[value,setValue]
}


export default function TodoList(){




    return(
        <div>
            <h1>TodoList</h1>
        </div>
    )
}