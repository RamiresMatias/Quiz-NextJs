import styles from '../styles/Apresentacao.module.css'
import Botao from './Botao'

interface InicioProps {
    comecar: any
}

export default function Inicio(props: InicioProps) {
    return (
        <div className={styles.inicio}>
            <div className={styles.apresentacao}>
                <p>Basic project of a quiz developed by</p>
                <h1>Ramires Matias</h1>
            </div>
            <div>
                <Botao texto='Começar' onClick={props.comecar}></Botao>
            </div>
        </div>
    )
}