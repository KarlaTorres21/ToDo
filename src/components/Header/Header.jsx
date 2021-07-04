import flowers from "../../assets/images/flowers.png"
import styles from "./Header.module.css"

const Header = () => (
    <section className = {styles.header}>
        <img src={flowers} alt="flowers"/>
        <h1>ToDos app</h1>
        <h3>What are we going to do today?</h3>
    </section>
)

export default Header;
