import styles from "./BoatoPrincipal.module.css"

const BoatoPrincipal = ({ children, tamanho }) => {
    return(
        <button className={`${styles.botaoPrincipal} ${styles[tamanho]}`}>
            {children}
        </button>
    )
}

export default BoatoPrincipal