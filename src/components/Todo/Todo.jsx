import styles from "./Todo.module.css"

const Todo = ({ id, description, completed, deleteToDo, handleUpdateToDo, selectCheckbox }) => {
    
    const textStyle = {
        textDecoration: "line-through"
    }
    
    return(
        <div className={styles.todo}>
            <input onChange={() => selectCheckbox(id)} type="checkbox" checked={completed}/>
            <label style={ completed ? textStyle : null}>{description}</label>
            <button onClick={() => handleUpdateToDo(id)}>Edit</button>
            <button onClick={() => deleteToDo(id)}>Remove</button>
        </div>
    )
}

export default Todo
