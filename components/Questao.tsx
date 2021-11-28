import QuestaoModel from "../model/Questao";
import styles from "../styles/Questao.module.css" 
import Enunciado from "../components/Enunciado"

interface QuestaoProps {
    valor: QuestaoModel
}

export default function Questao(props: QuestaoProps){
    const questao = props.valor

    return (
        <div className={styles.questao}>
            <Enunciado texto={questao.enunciado}/>
        </div>
    )
}