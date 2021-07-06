import { useState } from 'react'
import styles from './UpdateTodo.module.css'

const UpdateTodo = ({ id, textTodo, listTodos, setListTodos, setTodoUpdate }) => {

    const [newTextTodo, setNewTextTodo] = useState(textTodo)

    const updateText = event => {
        setNewTextTodo( event.target.value )
    }

    const handleModifyText = event => {
        event.preventDefault();
        const newTodos = listTodos.map( todoItem => {
            if( todoItem.id === id ){
                return {...todoItem, description: newTextTodo}
            }
            return todoItem
        })
        setListTodos( newTodos )
        setTodoUpdate( "" )
    }

    const handleDelete = () => {
        setTodoUpdate( "" )
    }

    return(
        <form className={styles.updateTodo}>
            <input 
                type="text" 
                value={newTextTodo} 
                placeholder="Tasks to do"
                onChange={updateText}
            />
            <button onClick={handleModifyText}>Modify</button>
            <button onClick={handleDelete}>Cancel</button>
        </form>
    )
}

export default UpdateTodo
