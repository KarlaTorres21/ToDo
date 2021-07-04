import { useState } from "react"

import styles from "./App.module.css"
import Header from "./components/Header/Header"
import Actions from "./components/Actions/Actions"
import Formulario from "./components/Formulario/Formulario"
import Todo from "./components/Todo/Todo"

const initialTodos = [
    {
        id: 0,
        description: "Terminar de realizar ToDo",
        completed: false
    },
    {
        id: 1,
        description: "Terminar de leer libro",
        completed: false
    },
    {
        id: 2,
        description: "Resolver problema de C++",
        completed: false
    },
    {
        id: 3,
        description: "Estudiar matemáticas",
        completed: false
    }
]

const FILTERS = {
    All: () => true,
    Active: todo => !todo.completed,
    Completed: todo => todo.completed
}

const App = () => {

    const [listTodos, setListTodos] = useState(initialTodos)
    const [filterToDo, setFilterToDo] = useState( "All" )

    const hadleDelete = id => {
        setListTodos( todos => todos.filter( todoItem => todoItem.id !== id ) )
    }

    const handleCheckbox = id => {
        const newTodos = listTodos.map( todoItem => {
            if( todoItem.id === id ){
                return {...todoItem, completed: !todoItem.completed}
            }
            return todoItem
        })
        setListTodos( newTodos )
    }

    const handleActions = actionToDo => {
        setFilterToDo( actionToDo )
    }

    const handleUpdate = id => {
        console.log(id)
    }

    return (
        <main>
            <Header />
            <Formulario 
                setListTodos={setListTodos}
            />
            <Actions
                handleActions={handleActions}
            />
            <section id={styles.todos}>
                { listTodos.length > 0 ?
                    listTodos.filter( FILTERS[filterToDo] ).map( ({ id, description, completed }) => 
                        <Todo 
                            key={id}
                            id={id}
                            description={description} 
                            completed={completed}
                            deleteToDo={hadleDelete}
                            handleUpdateToDo={handleUpdate}
                            selectCheckbox={handleCheckbox}
                        />
                    ) 
                    : <p>There are no activities to do</p>
                }
            </section>
        </main>
    )
}

export default App;
