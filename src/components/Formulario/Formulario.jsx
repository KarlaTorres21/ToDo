import { useState } from "react";
import { nanoid } from "nanoid"
import styles from "./Formulario.module.css"

const Formulario = ( {setListTodos}) => {

    const [textTodo, setTextTodo] = useState("");

    const handleAdd = event => {
        setTextTodo( event.target.value )
    }

    const addTodo = event => {
        event.preventDefault()
        if ( textTodo.length < 1 ) return
        const newToDo = {id: nanoid(3), description: textTodo}
        setListTodos( currentList => [newToDo, ...currentList] )
        setTextTodo( "" )
    }

    return(
        <form onSubmit={addTodo}>
            <input 
                type="text" 
                value={textTodo} 
                placeholder="Tasks to do"
                onChange={handleAdd}
            />
            <div className={styles.containerButton}>
                <button>Add</button>
            </div>
        </form>
    )
}

export default Formulario
