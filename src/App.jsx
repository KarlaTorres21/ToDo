import { useEffect, useState } from "react"

import styles from "./App.module.css"
import Header from "./components/Header/Header"
import Actions from "./components/Actions/Actions"
import Formulario from "./components/Formulario/Formulario"
import UpdateTodo from "./components/UpdateTodo/UpdateTodo"
import Todo from "./components/Todo/Todo"

const initialTodos = JSON.parse(localStorage.getItem( "listTodos" ) || "[]")
const filterInitialState = localStorage.getItem( "filterToDo" ) || "All"

const FILTERS = {
    All: () => true,
    Active: todo => !todo.completed,
    Completed: todo => todo.completed
}

const App = () => {

    const [listTodos, setListTodos] = useState(initialTodos)
    const [filterToDo, setFilterToDo] = useState( filterInitialState )
    const [todoUpdate, setTodoUpdate] = useState("")

    useEffect( () => {
        localStorage.setItem( "listTodos", JSON.stringify(listTodos) )
    }, [listTodos])

    useEffect( () => {
        localStorage.setItem( "filterToDo", filterToDo )
    }, [filterToDo])

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
        setTodoUpdate( id )
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
                        todoUpdate === id ? 
                        <UpdateTodo 
                            key={id}
                            id={id}
                            textTodo={description}
                            listTodos={listTodos}
                            setListTodos={setListTodos}
                            setTodoUpdate={setTodoUpdate}
                        />
                        :<Todo 
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
