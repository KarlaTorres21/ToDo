import styles from "./Actions.module.css"

const Actions = ({ handleActions }) => {

    const possibleActions = ["All", "Active", "Completed"]

    return(
        <section className={styles.filters}>
            {possibleActions.map( actionToDo => 
                <button key={actionToDo} onClick={() => handleActions(actionToDo)}>{actionToDo} tasks</button>
            )}
        </section>
    )
}

export default Actions
